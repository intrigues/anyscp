/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import '../renderer/App.css';
import { execSync } from 'child_process';
import { Clock } from './clock';
import { ConnectionRow } from './connectionRow';

const { ipcRenderer } = window.require('electron');

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    ipcRenderer.send('fetch-connection-req', '');
    this.state = {data:[]}
  }

  componentDidMount() {
    ipcRenderer.on("fetch-connection-res", (event, arg) => {
      this.fetchConnection(arg)
    });
  }

  fetchConnection(arg) {
    this.setState(
      { data: arg }
    )
  }

  render() {
    return (
      <div className="sidebar pt-5">
        <div className="flex mx-3">
          <span className="flex-1 mr-1">
            <Link to="/createNew">
              <button
                type="button"
                className="px-1 py-1.5 font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm w-full"
              >
                Add
              </button>
            </Link>
          </span>

          <span className="flex-1 ml-1">
            <button
              type="button"
              className="px-1 py-1.5 font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm w-full"
            >
              Import
            </button>
          </span>
        </div>
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
            {this.state.data.map((el) => (
              <li key={el.name}>
                <ConnectionRow data={el}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

}
