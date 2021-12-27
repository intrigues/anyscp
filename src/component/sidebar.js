/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import '../renderer/App.css';
import { execSync } from 'child_process';
import { Clock } from './clock';
import { ConnectionList } from './connectionRow';

const { ipcRenderer } = window.require('electron');

var Ids = [
  'bastion-prod',
  'api-qa',
  'frontend',
  'elastic-search',
  'bastion-prod',
  '1',
  '2',
  '3',
  '4',
  '5',
];

ipcRenderer.on("connection-fetch", (event, arg) => {
  console.log(arg);
  Ids = arg
});


export default function Sidebar() {
  return (
    <div className="sidebar pt-5">
      <div className="flex mx-3">
        <span className="flex-1 mr-1">
          <Link to="/createNew">
            <button
              type="button"
              className="px-5 py-2.5 font-medium bg-blue-100 hover:bg-blue-200 text-blue-500 rounded-lg text-sm font-semibold w-full"
            >
              Add
            </button>
          </Link>
        </span>

        <span className="flex-1 ml-1">
          <button
            type="button"
            className="px-5 py-2.5 font-medium bg-blue-100 hover:bg-blue-200 text-blue-500 rounded-lg text-sm font-semibold w-full"
          >
            Import
          </button>
        </span>
      </div>
      <ConnectionList/>
      <div className="w-full px-3 mt-4">
        <input
          className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none"
          id="search"
          type="text"
          placeholder="Search"
        />
      </div>

      <div className="mt-5">
        <span className="ml-4 font-bold text-sm">Connections</span>
        <ul className="overflow-y-scroll connections-list no-scrollbar">
          {Ids.map((el) => (
            <li key={el}>
              <Link to={`/id/${el}`}>
                <div className="inline dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-2 my-1 | flex justify-start cursor-pointer | hover:bg-gray-200 dark:hover:bg-grey-600 | transition-colors duration-500">
                  <div className="my-auto mx-2 w-10 h-10 flex justify-center items-center rounded-md bg-cyan-50 text-md font-semibold text-black uppercase">
                    {el[0]}
                    {el[1]}
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-base text-gray-700 font-semibold">
                      {el}
                    </span>
                    <span className="text-sm text-gray-500">192.168.0.1</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
