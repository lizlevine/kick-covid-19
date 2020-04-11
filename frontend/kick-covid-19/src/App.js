import React from "react";
import "./assets/main.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./pages/Home";
import Blog from "./pages/Blog.js";
import Resources from "./pages/Resources.js";
import Footer from "./components/Footer.js";

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
    <Footer />
  </Router>
);
export default App;
