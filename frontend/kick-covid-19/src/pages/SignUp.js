import React from "react";
import "./style.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function SignUp(props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [wantsupdates, setWantsUpdates] = React.useState(false);
  const { refresh, setRefresh } = props;
  let history = useHistory();

  const signUp = async (event) => {
    // our signup logic
    const userObject = {
      username,
      email,
      password,
      wantsupdates,
    };
    event.preventDefault();
    const data = await axios.post("/auth/signup", userObject);
    console.log(data);
    window.location.href = "/login";
    return false;
  };

  return (
    <form className="w-full max-w-sm" onSubmit={(event) => signUp(event)}>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-username"
          >
            Email
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            // className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-400"
            className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-400"
            id="inline-username"
            type="text"
            placeholder=""
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            User Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-400"
            id="inline-full-name"
            type="text"
            placeholder=""
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-username"
          >
            Password
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-400"
            id="inline-username"
            type="password"
            placeholder=""
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3"></div>
        <label className="md:w-2/3 block text-gray-500 font-bold">
          <input
            className="mr-2 leading-tight"
            type="checkbox"
            onChange={(event) => event.target.checked}
            value={wantsupdates}
          />
          <span className="text-sm">I'd like to receive updates</span>
        </label>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="shadow bg-teal-400 hover:bg-teal-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}
export default SignUp;
