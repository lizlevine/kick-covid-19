import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";

import App from "./App";
import AuthProvider from './context/auth.context';
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
    <App />
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
