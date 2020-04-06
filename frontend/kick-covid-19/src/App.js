import React from "react";
import "./assets/main.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Blog from "./components/Blog.js";
import Resources from "./components/Resources.js";

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/blog">
        <Blog />
      </Route>
      <Route exact path="/resources">
        <Resources />
      </Route>
    </Switch>
  </Router>
);
export default App;
