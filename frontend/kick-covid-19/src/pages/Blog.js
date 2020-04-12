import React from "react";
import axios from "axios";
import Post from "../components/Post";
import { Link } from "react-router-dom";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  async componentDidMount() {
    const response = await axios.get("/api/posts").then((response) => {
      console.log(response);
      this.setState((state) => {
        return { posts: state.posts.concat(response.data) };
      });
    });
    // const { data: posts } = response;
    // this.setState({ posts });
  }

  render() {
    return (
      <div className="row">
        {this.state.posts.map((posts, body, id) => (
          <Link key={posts.id} to={`/posts/${posts.id}`}>
            <Post body={body} key={id} />
            <pre>{JSON.stringify(posts.body, null, 2)}</pre>
          </Link>
        ))}
      </div>
    );
  }
}

export default Blog;
