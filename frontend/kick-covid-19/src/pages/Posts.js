import React from "react";
import axios from "axios";
import Post from "../components/Post";
import { withRouter } from "react-router-dom";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: null, answer: null };
  }

  componentDidMount() {
    axios.get(`/api/posts/${this.props.match.params.id}`).then((response) => {
      console.log(response);
      this.setState({ post: response.data });
    });
    axios.get(`/api/answers/${this.props.match.params.id}`).then((response) => {
      console.log(response);
      this.setState({ answer: response.data });
    });
  }

  render() {
    console.log(`[DEBUG] this.props = ${JSON.stringify(this.props, null, 2)}`);
    return (
      <div className="container">
        <div className="row">
          {this.state.post ? (
            <Post body={this.state.post.body} />
          ) : (
            <h3>loading...</h3>
          )}
        </div>
        <div className="row">
          {this.state.answer ? (
            <Post body={this.state.answer.body} />
          ) : (
            <h3>loading...</h3>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Posts);
