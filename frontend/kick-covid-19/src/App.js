import React from "react";

//import { useAuth } from './context/auth.context';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import Blog from "./pages/Blog.js";
import Resources from "./pages/Resources.js";
import Footer from "./components/Footer.js";
import Posts from "./pages/Posts.js";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import NewPost from "./pages/NewPost.js";
import "./assets/main.css";
import "./App.css";
import About from "./pages/About";

const App = () => {
  const [username, setUsername] = React.useState(0);

  return (
    <Router>
      <Header refresh={username} />
      <div className="page">
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
            <Login refresh={username} setRefresh={setUsername} />
          </Route>

          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/newpost">
            <NewPost />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};
export default App;
