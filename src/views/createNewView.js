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
  // console.log("--->", connectionData)
  ipcRenderer.send('add-connection', connectionData);
  ipcRenderer.send('fetch-connection-req', '');
}

export default function CreateNewFunction() {
  return (
    <div className="sect">
      <div className="m-5">

      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Server Information
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">

          </p>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="my-auto text-sm font-medium text-gray-500">
                Server name
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <input className="bg-gray-50 border rounded-md w-full px-2 py-1" type="text" name="name" id=""/>
              </dd>
            </div>
            <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="my-auto text-sm font-medium text-gray-500">
                DNS/IP
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <input className="bg-gray-50 w-full border rounded-md px-2 py-1" type="text" name="name" id=""/>
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="my-auto text-sm font-medium text-gray-500">
                Port
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <input className="bg-gray-50 border rounded-md w-1/3  px-2 py-1" type="number" name="name" id=""/>
              </dd>
            </div>
            <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="my-auto text-sm font-medium text-gray-500">
              Username
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <input className="bg-gray-50 border rounded-md w-full px-2 py-1" type="text" name="name" id=""/>
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="my-auto text-sm font-medium text-gray-500">
                Password
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <input className="bg-gray-50 border rounded-md w-full px-2 py-1" type="password" name="name" id=""/>
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
                        secretfile.pem
                      </span>
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                        Choose
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="my-auto text-sm font-medium text-gray-500">
              <a href="#" class="inline-flex items-center justify-center mr-1 px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-indigo-700">
                Connect
              </a>
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ml-auto">
              <div>
              <a href="#" class="inline-flex items-center justify-center ml-1 px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Test Connectivity
              </a>
              <a href="#" class="inline-flex items-center justify-center ml-1 px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Save
              </a>
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
