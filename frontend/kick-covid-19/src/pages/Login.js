import React from "react";
import "./style.css";

function Login() {
  return (
    //     <div className="w-full max-w-xs">
    //       <form
    //         className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    //         id="login"
    //       >
    //         <div className="mb-4">
    //           <label
    //             className="block text-gray-700 text-sm font-bold mb-2"
    //             for="username"
    //           >
    //             Email
    //           </label>
    //           <input
    //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //             id="username"
    //             type="text"
    //             placeholder="Username"
    //           />
    //         </div>
    //         <div className="mb-6">
    //           <label
    //             className="block text-gray-700 text-sm font-bold mb-2"
    //             for="password"
    //           >
    //             Password
    //           </label>
    //           <input
    //             className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //             id="password"
    //             type="password"
    //             placeholder="Password"
    //           />
    //           <p className="text-purple-500 text-xs italic">Password required.</p>
    //         </div>
    //         <div className="flex items-center justify-between">
    //           <button
    //             className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //             type="button"
    //           >
    //             Sign-In
    //           </button>
    //           <a
    //             className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-blue-800"
    //             href="#"
    //           >
    //             Forgot Password?
    //           </a>
    //         </div>
    //       </form>
    //       <p className="text-center text-gray-500 text-xs">
    //         &copy;2020 Kick Covid. All rights reserved.
    //       </p>
    //     </div>
    //   );
    // }

    <form className="w-full max-w-sm">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-username"
          >
            Email
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-username"
            type="password"
            placeholder=""
          />
        </div>
      </div>
      {/* <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            User Name
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            placeholder=""
          />
        </div>
      </div> */}
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-username"
          >
            Password
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-username"
            type="password"
            placeholder=""
          />
        </div>
      </div>
      {/* <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3"></div>
        <label class="md:w-2/3 block text-gray-500 font-bold">
          <input class="mr-2 leading-tight" type="checkbox" />
          <span class="text-sm">Send me your newsletter!</span>
        </label>
      </div> */}
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button
            class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
}
export default Login;
