import { time } from 'console';
const { ipcRenderer } = window.require('electron');
import { Link } from 'react-router-dom';
import React from "react";

function deleteConnection(p) {
  console.log("button clicked, deleting ", p);
}
export class ConnectionRow extends React.Component {
  constructor(props) {
    super(props);
    this.deleteConnection = this.deleteConnection.bind(this);
  }

  deleteConnection() {
    console.log("deleting connection:", this.props.data.id);
    ipcRenderer.send("delete-connection", this.props.data.id);
    ipcRenderer.send('fetch-connection-req', '');
  }

  render() {
    return (
      <Link to={`/id/${this.props.data.id}`}>
        <div className="p-2 my-1 | flex justify-start cursor-pointer | hover:bg-gray-200 dark:hover:bg-grey-600 | transition-colors duration-200">
        <div className="my-auto mx-2 w-10 h-10 flex justify-center shadow-sm border items-center rounded-md text-md font-semibold text-black uppercase">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-sm text-gray-700 font-semibold">
            {this.props.data.name}
          </span>
          <span className="text-sm text-gray-500">{this.props.data.ip}</span>
        </div>
        <div className="flex flex-col my-auto ml-auto">
          <button className="bg-red-500 rounded-md p-1 mx-2" onClick={this.deleteConnection}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
      </Link>
    );
  }
}
