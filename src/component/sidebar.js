/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import '../renderer/App.css';

const Ids = [
  'bastion-prod',
  'api-qa',
  'frontend',
  'elastic-search',
  'bastion-prod',
  '1',
  '2',
  '3',
  '4',
  '5',
];

export default function Sidebar() {
  return (
    <div className="sidebar pt-5">
      <div className="flex mx-3">
        <span className="flex-1">
          <button
            type="button"
            className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full"
          >
            <svg
              className="-ml-1 mr-2 h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            New
          </button>
        </span>

        <span className="flex-1 ml-3">
          <button
            type="button"
            className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full"
          >
            <svg
              className="-ml-1 mr-2 h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                clipRule="evenodd"
              />
            </svg>
            Import
          </button>
        </span>
      </div>

      <div className="rounded-md shadow-sm -space-y-px mx-3 mt-4">
        <div>
          <input
            id="search"
            name="search"
            type="text"
            autoComplete="text"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="mt-5">
        <span className="ml-4 font-bold text-sm">Connections</span>
        <ul className="overflow-y-scroll connections-list no-scrollbar">
          {Ids.map((el) => (
            <li key={el}>
              <Link to={`/id/${el}`}>
                <div className="inline dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-2 my-1 | flex justify-start cursor-pointer | hover:bg-gray-200 dark:hover:bg-grey-600 | transition-colors duration-500">
                  <div className="my-auto mx-2 w-10 h-10 flex justify-center items-center rounded-md bg-sky-700 text-md font-semibold text-white uppercase">
                    {el[0]}
                    {el[1]}
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-base text-gray-700 font-semibold">
                      {el}
                    </span>
                    <span className="text-sm text-gray-500">192.168.0.1</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
