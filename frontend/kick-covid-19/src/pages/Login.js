import React from "react";
import axios from "axios";
import "./style.css";
import { useHistory } from "react-router-dom";

function Login(props) {
  const { refresh, setRefresh } = props;
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  let history = useHistory();

  const login = async (event) => {
    // this is where the login functionality comes
    event.preventDefault();
    const { data } = await axios.post("/auth/login", { email, password });
    localStorage.setItem("__kickcovid19_token", data.user.token);
    setRefresh(refresh + 1);
    history.push("/");
  };

  return (
    <form className="w-full max-w-sm" onSubmit={(event) => login(event)}>
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
            className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-400"
            id="email"
            name="email"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
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
            id="password"
            name="password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            placeholder=""
          />
        </div>
      </div>

      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="shadow bg-teal-400 hover:bg-teal-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
}
export default Login;
