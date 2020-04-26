import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import { useHistory } from "react-router-dom";

const Header = (props) => {
  const { refresh } = props;
  const [username, setUsername] = React.useState(null);
  const history = useHistory();

  React.useEffect(() => {
    const token = localStorage.getItem("__kickcovid19_token");
    if (token) {
      axios
        .get("/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          setUsername(data.username);
        });
    }
  }, [refresh]);

  const logout = () => {
    localStorage.removeItem("__kickcovid19_token");
    setUsername(null);
    history.push("/");
  };

  const showLoginOrUsername = () => {
    if (username != null) {
      return (
        <div>
          <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Welcome, {username}.
          </div>
          <button
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none bg-white rounded-full text-teal-500 border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
            >
              Sign Up
            </a>
          </Link>
          <Link to="/login">
            <a
              href="#"
              className="inline-block ml-2 text-sm px-4 py-2 leading-none  bg-white rounded-full text-teal-500 border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
            >
              Login
            </a>
          </Link>
        </div>
      );
    }
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          className="h-10 w-10 mr-4 object-cover"
          src="https://assets.website-files.com/5d9ba0eb5f6edb77992a99d0/5e62506c4527700a4546c461_iconfinder_doctor-advise-warning-suggestion-avatar_5728189.png"
          alt=""
        />
        <span className="font-semibold text-xl tracking-tight">Kick Covid</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link to="/">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Home
            </a>
          </Link>
          <Link to="/blog">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Blog
            </a>
          </Link>
          <Link to="/resources">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Resources
            </a>
          </Link>
          <Link to="/about">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              About
            </a>
          </Link>
        </div>
        {showLoginOrUsername()}
      </div>
    </nav>
  );
};

export default Header;
