/* eslint-disable react/jsx-filename-extension */
import { mainModule } from 'process';
import React from 'react';
const { ipcRenderer } = window.require('electron');
import Connection from "../../models/Connection";

function addConnection() {
  // eslint-disable-next-line no-console
  name = document.getElementById('name').value
  ip = document.getElementById('ip').value
  selector = document.getElementById('selector').value
  password = document.getElementById('password').value
  file = document.getElementById('file').value
  connectionData = {
    ip: ip,
    name: name,
    selector: selector,
    password: password,
    file: file
  }
  console.log("--->", connectionData)
  ipcRenderer.send('add-connection', connectionData);
}

export default function CreateNewFunction() {
  return (
    <div className="sect">
      <div className="m-5">
        <div className="flex">
          <div className="flex-1">
            <h1 className="inline text-4xl font-semibold">Server Name</h1>
          </div>
          <div className="justify-end">
            <button
              className="px-3 py-2 flex-1 bg-blue-500 font-semibold  text-white mx-1 rounded-md"
              type="button"
              onClick={addConnection}
            >
              Save
            </button>
            <button
              className="px-3 py-2 flex-1 bg-red-500 font-semibold text-white ml-1 rounded-md"
              type="button"
            >
              Delete
            </button>
          </div>
        </div>
        <div>
          <div className="block flex mt-5">
            <input
              className="mr-1 flex-1 py-2 px-3 rounded-md border border-2 shadow"
              type="text"
              placeholder="Name"
              id="name"
            />
            <select
              className="ml-1 flex-2 w-1/3 py-2 px-3 rounded-md border border-2 shadow"
              name="Type"
              id="selector"
            >
              <option value="aws">AWS</option>
              <option value="gcp">GCP</option>
              <option value="azure">Azure</option>
            </select>
          </div>
          <div className="block flex mt-5">
            <input
              type="text"
              className="flex-1 py-2 px-3 rounded-md border border-2 shadow"
              placeholder="DNS/IP"
              id="ip"
            />
          </div>
          <div className="block flex mt-5">
            <input
              className="mr-1 flex-1 py-2 px-3 rounded-md border border-2 shadow"
              type="text"
              placeholder="Password"
              id="password"
            />
            <input
              className="ml-1 flex-1 py-1 px-3 rounded-md my-auto"
              type="file"
              id="file"
            />
          </div>
        </div>
        <div>
          <div className="flex mt-7">
            <button
              className="mr-1 px-3 py-2 flex-1 bg-blue-500 font-semibold  text-white rounded-md"
              type="button"
            >
              Connect
            </button>
            <button
              className="ml-1 px-3 py-2 flex-1 bg-blue-500 font-semibold text-white rounded-md"
              type="button"
            >
              Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
