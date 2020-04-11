import React from "react";
import axios from "axios";
import Post from "./Post";

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
        {this.state.posts.map((body, id) => (
          <Post body={body} key={id} />
        ))}
      </div>
    );
  }
}

export default Blog;
