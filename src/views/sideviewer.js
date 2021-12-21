/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
const {
  contextBridge,
  ipcRenderer
} = window.require("electron");
import React from 'react';
import { useParams } from 'react-router';

function openCommandPrompt() {
  console.log("function executed");
  ipcRenderer.send('command', 'hello');
}



export default function Index(props) {
  const params = useParams();
  return (
    <div className="sect">
      <h2>Dynamic : {params?.id}</h2>
      <div className="m-5">
        <div className="flex">
          <div className="justify-end">
            <button
              className="px-3 py-2 flex-1 bg-blue-500 font-semibold  text-white mx-1 rounded-md"
              type="button" onClick={openCommandPrompt}
            >
              Connect
            </button>
         </div>
        </div>
      </div>
    </div>
  );
}
