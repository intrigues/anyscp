import { time } from 'console';
const { ipcRenderer } = window.require('electron');
import React from 'react';

export class ConnectionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data:[]};
  }

  componentDidMount() {
    ipcRenderer.on("connection-fetch", (event, arg) => {
      console.log(arg);
      this.updateConnectionList();
    });
  }

  updateConnectionList() {
    this.setState(
      {data: [1,2,3,4]},
    );
  }

  render() {
    return (
      <div>
      {this.state.data.map((conn) => (
        <li>{conn}</li>
      ))}
      </div>
    );
  }



}
