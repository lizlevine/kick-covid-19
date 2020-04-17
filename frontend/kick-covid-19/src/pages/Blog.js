import React from "react";
import axios from "axios";
import Post from "../components/Post";
import { Link } from "react-router-dom";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    axios.get("/api/posts").then((response) => {
      console.log(response);
      this.setState((state) => {
        return { posts: state.posts.concat(response.data) };
      });
    });
  }

  render() {
    console.log(
      `[DEBUG] this.state.posts = ${JSON.stringify(this.state.posts, null, 2)}`
    );
    return (
      <div className="maindiv">
        <div className="buttons flex justify-center">
          <Link to="/newpost">
            <button className="mb-3 mt-3 flex items-center  rounded-full shadow bg-teal-500 px-4 py-2 text-white hover:bg-teal-400">
              Make a Post
            </button>
          </Link>
        </div>
        <div className="row ">
          {this.state.posts.map(({ _id, body, user_id, answers }) => (
            <Link key={_id} to={`/posts/${_id}`}>
              <Post body={body} user_id={user_id} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Blog;
