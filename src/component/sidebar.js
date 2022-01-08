/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import '../renderer/App.css';
import { execSync } from 'child_process';
import { Clock } from './clock';
import { ConnectionRow } from './connectionRow';


const { ipcRenderer } = window.require('electron');

class Sidebar extends React.Component {
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

  onclick = (id) => {
    this.props.history.push(`/id/${id}`);
  }

  render() {
    return (
      <div className="sidebar pt-5 bg-white shadow">

        <div className="w-full px-3">
          <input
            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none"
            id="search"
            type="text"
            placeholder="Search"
          />
        </div>
      <div className="">
      <span className="ml-4 font-bold text-sm">Connections</span>
          <ul className="overflow-y-scroll connections-list no-scrollbar">
            {this.state.data.map((el) => (
              <li key={el.name}>
                <ConnectionRow onclick={this.onclick} data={el}/>
              </li>
            ))}
          </ul>
        </div>
        <hr/>

        <div className="flex mx-3 mt-2">

          <span className="flex-1 mr-1">
            <Link to="/createNew">
            <button type="button" className="w-full bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded border border-indigo-700 hover:border-indigo-600 text-white px-6 py-2 text-sm">Add</button>
            </Link>
          </span>

          <span className="flex-1 ml-1">
            <button type="button" className="w-full bg-white transition duration-150 ease-in-out hover:bg-gray-100 hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-6 py-2 text-sm">Import</button>
          </span>
        </div>
      </div>
    );
  }

}

export default withRouter (Sidebar)
