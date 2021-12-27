import { time } from 'console';
const { ipcRenderer } = window.require('electron');
import React from 'react';

export class ConnectionList extends React.Component {
  constructor(props) {
    super(props)
    this.state = [1,2,3];
  }

  componentDidMount() {
    ipcRenderer.on("connection-fetch", (event, arg) => {
      console.log(arg);
      this.updateConnectionList()
    });
  }

  updateConnectionList() {
    var newState = this.state
    console.log("1init", this.state)
    var dummy = [...this.state, [5]]
    console.log("1init---", dummy)
    this.setState(
      dummy
    );
  }

  render() {
    return (
      <div>
      {this.state.map((conn) => (
        <li>{conn}</li>
      ))}
      </div>
    );
  }



}
