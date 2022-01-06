import { time } from 'console';
const { ipcRenderer } = window.require('electron');
import { Link } from 'react-router-dom';
import React from 'react';

export class ConnectionRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link to={`/id/${this.props.data.id}`}>
          <div className="inline dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-2 my-1 | flex justify-start cursor-pointer | hover:bg-gray-200 dark:hover:bg-grey-600 | transition-colors duration-200">
            <div className="my-auto mx-2 w-10 h-10 flex justify-center items-center rounded-md bg-cyan-50 text-md font-semibold text-black uppercase">
              {this.props.data.name[0]}
              {this.props.data.name[1]}
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-base text-gray-700 font-semibold">
                {this.props.data.name}
              </span>
              <span className="text-sm text-gray-500">{this.props.data.ip}</span>
            </div>
          </div>
      </Link>
    );
  }
}
