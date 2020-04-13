import React from "react";
import axios from "axios";
import Post from "../components/Post";
import { Link } from "react-router-dom";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  async componentDidMount() {
    const response = await axios.get("/api/posts/:id").then((response) => {
      console.log(response);
      this.setState((state) => {
        return { posts: state.posts.concat(response.data) };
      });
    });
    // const { data: posts } = response;
    // this.setState({ posts });
  }

  render() {
    console.log(
      `[DEBUG] this.state.posts = ${JSON.stringify(this.state.posts, null, 2)}`
    );
    return (
      <div className="row">
        {this.state.posts.map(({ _id, body, answers }) => (
          <Link key={_id} to={`/posts/${_id}`}>
            <Post body={body} />
          </Link>
        ))}
      </div>
    );
  }
}

export default Posts;
