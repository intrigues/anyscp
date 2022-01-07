/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default function Index() {
  return (
    <div className="sect">
    <div className="my-auto h-full flex justify-center items-center">
    <div>
      <h2 className="text-center text-indigo-600 text-5xl font-extrabold">AnySCP</h2>
      <p className="text-center text-xl font-semibold">A great way to manage you ssh connection</p>
      <ul className="mt-8 text-center bg-white shadow overflow-hidden sm:rounded-lg py-3">
        <li className="">
          <span className="h-full item-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 inline mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="inline my-auto text-l font-semibold">
              Stores Connection Details
            </p>
          </span>
        </li>
        <li className="mt-2">
        <div className="h-full item-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 inline mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="inline my-auto text-l font-semibold">
            Integrated File Browser
          </span>
        </div>
      </li>
        <li className="mt-2">
        <span className="h-full item-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 inline mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="inline my-auto text-l font-semibold">
            Import from Cloud Providers
          </p>
        </span>
      </li>
      <li className="mt-5">
      <a className="h-full item-center text-indigo-600" href="">
      <p className="inline my-auto ">
      Give us a star on Github
      </p>
      <svg xmlns="http://www.w3.org/2000/svg" className="inline h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
      </a>
    </li>
      </ul>
    </div>
    </div>
    </div>
  );
}
