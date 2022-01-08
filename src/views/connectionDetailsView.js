import { time } from 'console';
const { ipcRenderer } = window.require('electron');
import { Link } from 'react-router-dom';
import React from 'react';
import { throws } from 'assert/strict';

export default class ConnectionDetailsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      ip: "",
      port: "",
      username: "",
      password: "",
      keypath: "",
      errors: {
        name: '',
        ip: "",
        port: "",
        username: ""
      }
    }
  }

  componentDidMount() {
    (async () => {
        const result = await ipcRenderer.invoke('fetch-connection', this.props.match.params.id);
        this.setState({
          name: result.name,
          ip: result.ip,
          port: result.port,
          username: result.username,
          password: result.password,
          keypath: result.keypath,
        })
    })();
  }

  openCommandPrompt = () => {
    const connectionData = {
      ip: this.state.ip,
      port: this.state.port,
      username: this.state.username,
      password: this.state.password,
    }
    ipcRenderer.send('open-teminal', connectionData);
  }

  updateConnection = () => {
    const connectionData = {
      id: this.props.match.params.id,
      name: this.state.name,
      ip: this.state.ip,
      port: this.state.port,
      username: this.state.username,
      password: this.state.password,
      keypath: this.state.keypath,
    }
    ipcRenderer.send('update-connection', connectionData);
    ipcRenderer.send('fetch-connection-req', '');
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    
    const validDNSRegex = RegExp(/^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/i);
    const validIpAddressRegex = RegExp(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/i);

    switch (name) {
      case 'name': 
        errors.name = 
          value.length < 1
            ? 'please enter name'
            : '';
        break;
      case 'ip': 
        errors.ip = 
          validDNSRegex.test(value) || validIpAddressRegex.test(value)
            ? ''
            : 'host name/ip invalid';
        break;
      case 'port': 
        errors.port = 
          value.length < 1 || value.length > 5
            ? 'invalid port'
            : '';
        break;
      case 'username':
        errors.username =
          value.length < 1
            ? 'please enter username'
            : '';
        break;
      default:
        break;
    }
    this.setState({errors, [name]: value});
  }

  onChange = (e) => {
    let newState = this.state;
    this.handleChange(e);
    newState[e.target.name] = e.target.value;
    this.setState(
      {newState}
    )
  }

  getPath = (e) => {
    if (e.target.files.length > 0) {
      this.setState({
        keypath: e.target.files[0].path
      })
    }
  }
  
  render() {
    return (
      <div className="sect">
        <div className="m-5">

        <div class="bg-white shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Server Information
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500"></p>
          </div>
          <div class="border-t border-gray-200">
            <dl>
              <div class="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="my-auto text-sm font-medium text-gray-500">
                  Server name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <input className={"focus:outline-none bg-gray-50 border rounded-md w-full px-2 py-1" + (this.state.errors.name ? 'border-red-500' : '') } type="text" name="name" id="name" onChange={this.onChange} value={this.state.name}/>
                </dd>
                <p className="text-sm text-red-500 mt-1" >{this.state.errors.name}</p>
              </div>
              <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="my-auto text-sm font-medium text-gray-500">
                  DNS/IP
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <input className={"focus:outline-none bg-gray-50 w-full border rounded-md px-2 py-1" + (this.state.errors.ip ? 'border-red-500' : '')} type="text" name="ip" id="ip" onChange={this.onChange} value={this.state.ip}/>
                </dd>
                <p className="text-sm text-red-500 mt-1" >{this.state.errors.ip}</p>
              </div>
              <div class="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="my-auto text-sm font-medium text-gray-500">
                  Port
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <input className={"focus:outline-none bg-gray-50 border rounded-md w-1/3  px-2 py-1 " + (this.state.errors.port ? 'border-red-500' : '') } type="number" name="port" id="port" onChange={this.onChange} value={this.state.port}/>
                </dd>
                <p className="text-sm text-red-500 mt-1" >{this.state.errors.port}</p>
              </div>
              <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="my-auto text-sm font-medium text-gray-500">
                Username
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <input className={"focus:outline-none bg-gray-50 border rounded-md w-full px-2 py-1" + (this.state.errors.username ? 'border-red-500' : '')} type="text" name="username" id="username" onChange={this.onChange} value={this.state.username}/>
              </dd>
              <p className="text-sm text-red-500 mt-1" >{this.state.errors.username}</p>
            </div>
            <div class="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="my-auto text-sm font-medium text-gray-500">
                  Password
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <input className="focus:outline-none bg-gray-50 border rounded-md w-full px-2 py-1" type="password" name="password" id="password" onChange={this.onChange} value={this.state.password}/>
                </dd>
              </div>
              <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="my-auto text-sm font-medium text-gray-500">
                  Key file
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul role="list" class="border border-gray-200 rounded-md divide-y divide-gray-200">
                    <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div class="w-0 flex-1 flex items-center">

                        <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-2 flex-1 w-0 truncate">
                        {(() => {
                          if (this.state.keypath) {
                            return this.state.keypath
                          } else {
                            return 'No File Selected'
                          }
                        })()}
                        </span>
                      </div>
                      <div class="ml-4 flex-shrink-0">
                        <label class="inline-block cursor-pointer font-medium text-indigo-600 hover:text-indigo-500">
                          <input type="file" onChange={this.getPath} accept=".ppk,.pem" id="keypath" className="hidden"/>
                            Select File
                          </label>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
              <div class="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">

                <dt class="my-auto text-sm font-medium text-gray-500">
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ml-auto">
                <div>
                <button onClick={this.openCommandPrompt} class="inline-flex items-center justify-center mr-1 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded border border-indigo-700 text-white px-6 py-2">
                  Connect
                </button>
                <button onClick={this.updateConnection} class="inline-flex items-center justify-center ml-1 bg-white transition duration-150 ease-in-out hover:border-indigo-600 hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-6 py-2 text-sm">
                  Save
                </button>
                </div>

                </dd>
              </div>
            </dl>
          </div>
        </div>

        </div>
      </div>
    );
  }
}
