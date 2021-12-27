import { time } from 'console';
const { ipcRenderer } = window.require('electron');
import React from 'react';

export class ConnectionList extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props)
    this.state = {
      "data": [],
    };
  }

  componentDidMount() {
    ipcRenderer.on("connection-fetch", (event, arg) => {
      console.log("hello", arg);
      this.updateConnectionList(arg);
    });
  }
  
  updateConnectionList(arg) { 
    this.setState({
      "data": [...this.state.data, arg],
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
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
