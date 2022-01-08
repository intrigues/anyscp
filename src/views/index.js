/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default function Index() {
  return (
    <div className="sect">
    <div className="my-auto h-full flex justify-center items-center">
    <div className="w-full">
      <h2 className="text-center text-indigo-600 text-5xl font-extrabold">AnySCP</h2>
      <p className="text-center text-xl font-semibold">A great way to manage you ssh connection</p>

      <div class="mx-auto xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6 mt-5">
        <div class="py-5 px-4 bg-indigo-700 border border-gray-200 shadow rounded-lg text-left">
            <h2 class="text-2xl text-white font-semibold mb-8">Free</h2>
            <ul class="flex flex-col mb-6">
                <li class="flex items-center mb-2.5">
                    <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png" class="mr-4" alt="check-mark" />
                    <p class="text-white text-base font-normal">Stores Connection Details</p>
                </li>
                <li class="flex items-center mb-2.5">
                    <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png" class="mr-4" alt="check-mark" />
                    <p class="text-white text-base font-normal">Integrated File Browser</p>
                </li>
                <li class="flex items-center mb-2.5">
                    <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png" class="mr-4" alt="check-mark" />
                    <p class="text-white text-base font-normal">Import from Cloud Providers</p>
                </li>
                <li class="flex items-center mb-2.5">
                    <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png" class="mr-4" alt="check-mark" />
                    <p class="text-white text-base font-normal">Proxy from bastion</p>
                </li>
                <li class="flex items-center mb-2.5">
                    <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png" class="mr-4 opacity-0" alt="check-mark" />
                    <p class="text-gray-400 text-base font-normal">Snippets</p>
                </li>
            </ul>
            <button class="mt-5 w-full text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white transition duration-150 ease-in-out rounded bg-white hover:bg-gray-100 px-8 py-3 text-base font-semibold py-3">Give us a star</button>
        </div>
    </div>
    </div>
    </div>
    </div>
  );
}
