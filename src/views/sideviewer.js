/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useParams } from 'react-router';

const { ipcRenderer } = window.require('electron');

function openCommandPrompt() {
  // eslint-disable-next-line no-console
  console.log('function executed');
  ipcRenderer.send('open-teminal', '');
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
              type="button"
              onClick={openCommandPrompt}
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
