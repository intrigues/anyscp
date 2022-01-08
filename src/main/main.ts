/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import path from 'path';
import { app, BrowserWindow, shell, ipcMain } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import MenuBuilder from './menu';
import { resolveHtmlPath } from './util';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('dev.sqlite3');


ipcMain.on('add-connection', async(event, arg) => {
  const stmt = db.prepare('INSERT INTO connections (name, ip, port, username, password, keypath, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)');
  stmt.run(arg['name'], arg['ip'], arg['port'], arg['username'], arg['password'], arg['keypath'], new Date());
  console.log(event.processId);
  event.reply('fetch-connection-req', '');
})

ipcMain.on('fetch-connection-req', async(event, arg) => {
  console.log("requested to reload")
  let result: any[];
  result = [];
  db.each("SELECT id, name, ip FROM connections", function(err: unknown, row: { id :number, name: string, ip: string; }) {
    if (row.name != "" && row.name && row.ip != "" && row.ip) {
      result.push({"id": row.id, "ip": row.ip, "name": row.name});
    }
    if (err) {
      throw err;
    }
  });
  await new Promise(f => setTimeout(f, 50));
  event.reply('fetch-connection-res', result);

  console.log(arg.info);
})

ipcMain.on("update-connection", async (event, arg) => {
  await db.run(`UPDATE connections SET name=?, ip=?, port=?, username=?, password=?, keypath=?, updated_at=? WHERE id=?`, [arg["name"], arg["ip"], arg["port"], arg["username"], arg["password"], arg["keypath"], new Date(), arg["id"]], function(err:any) {
    if (err) {
      return console.error(err.message);
    }
  });
  event.reply('fetch-connection-req', '');
  console.log(arg.info)
})

ipcMain.on("delete-connection", async (event, arg) => {
  await db.run(`DELETE FROM connections WHERE id=?`, arg, function(err:any) {
    if (err) {
      return console.error(err.message);
    }
  });
  event.reply('fetch-connection-req', '');
  console.log(arg.info)
})

ipcMain.handle('fetch-connection', async (event, arg) => {
  console.log("fetch connection for : ", arg);
  let connectionDetail: any[];
  connectionDetail = [];
  await db.get("SELECT id, name, ip, port, username, password, keypath FROM connections WHERE id=?", arg, function(err:any, data:any) {
    if (err) {
      return console.error(err.message);
    }
    connectionDetail = data
  });
  await new Promise(f => setTimeout(f, 50));
  console.log("event.processId: ", event.processId);
  return connectionDetail;
});


// opens terminal depending upon the operating system
ipcMain.on('open-teminal', async (event, arg) => {
  switch (process.platform) {
    case 'win32':
     runCommandWin32(arg);
      break;
    case 'darwin':
      runCommandDarwin(arg);
      break;
    case 'linux':
      runCommandLinux(arg);
      break;
    default:
      console.log('Unknown platform');
  }
  console.log(event.processId)
});

function runCommandWin32(arg:any) {
  const childProcess = require('child_process');
  const sshCommand = 'start cmd.exec /k ssh ' + arg["username"] + ':' + arg["password"] + '@' + arg["ip"] + ' -p '+ arg["port"];
  childProcess.exec(sshCommand);
}

function runCommandDarwin(arg:any) {
  const childProcess = require('child_process');
  const sshCommand = 'ssh ' + arg["username"] + ':' + arg["password"] + '@' + arg["ip"] + ' -p '+ arg["port"];
  const cmdString = `osascript -e 'tell application "Terminal"' -e 'set newTab to do script ("` + sshCommand + `")' -e 'end tell'`;
  childProcess.exec(cmdString);
}

function runCommandLinux(arg:any) {
  const childProcess = require('child_process');
  const sshCommand = 'gnome-terminal ssh ' + arg["username"] + ':' + arg["password"] + '@' + arg["ip"] + ' -p '+ arg["port"];
  childProcess.exec(sshCommand);
}

export default class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDevelopment =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDevelopment) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload
    )
    .catch(console.log);
};

const createWindow = async () => {
  if (isDevelopment) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    resizable: false,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  // Open urls in the user's browser
  mainWindow.webContents.on('new-window', (event, url) => {
    event.preventDefault();
    shell.openExternal(url);
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);
