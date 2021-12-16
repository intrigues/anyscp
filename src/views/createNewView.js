/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default function CreateNewFunction() {
  return (
    <div className="sect">
      <div className="m-5">
        <h1 className="text-4xl font-semibold">Server Name</h1>
        <div>
          <div className="block flex mt-5">
            <input
              className="mr-1 flex-1 py-2 px-3 rounded-md border border-2 shadow"
              type="text"
              placeholder="Name"
            />
            <select
              className="ml-1 flex-2 w-1/3 py-2 px-3 rounded-md border border-2 shadow"
              name="Type"
              id="slector"
            >
              <option value="test">AWS</option>
              <option value="test">GCP</option>
              <option value="test">Azure</option>
            </select>
          </div>
          <div className="block flex mt-5">
            <input
              type="text"
              className="flex-1 py-2 px-3 rounded-md border border-2 shadow"
              placeholder="DNS/IP"
            />
          </div>
          <div className="block flex mt-5">
            <input
              className="mr-1 flex-1 py-2 px-3 rounded-md border border-2 shadow"
              type="text"
              placeholder="Password"
            />
            <input
              className="ml-1 flex-1 py-1 px-3 rounded-md my-auto"
              type="file"
            />
          </div>
        </div>

        <div className="flex mt-7">
          <button
            className="px-3 py-2 flex-1 bg-blue-500 font-semibold  text-white mr-1 rounded-md"
            type="button"
          >
            Connect
          </button>
          <button
            className="px-3 py-2 flex-1 bg-blue-500 font-semibold text-white mx-1 rounded-md"
            type="button"
          >
            Test
          </button>
          <button
            className="px-3 py-2 flex-1 bg-blue-500 font-semibold  text-white mx-1 rounded-md"
            type="button"
          >
            Save
          </button>
          <button
            className="px-3 py-2 flex-1 bg-red-500 font-semibold text-white ml-1 rounded-md"
            type="button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
