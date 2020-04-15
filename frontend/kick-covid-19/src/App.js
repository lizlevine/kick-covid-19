import React from "react";
import "./assets/main.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import Blog from "./pages/Blog.js";
import Resources from "./pages/Resources.js";
import Footer from "./components/Footer.js";
import Posts from "./pages/Posts.js";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/posts/:id">
        <Posts />
      </Route>
      <Route exact path="/blog">
        <Blog />
      </Route>
      <Route exact path="/resources">
        <Resources />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
    </Switch>
    <Footer />
  </Router>
);
export default App;
