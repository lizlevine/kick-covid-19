import React from "react";
import axios from "axios";
import Post from "../components/Post";
import { withRouter } from "react-router-dom";
import Answer from "../components/Answer";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: null };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/posts/${this.props.match.params.id}`).then((response) => {
      console.log(response);
      this.setState({ post: response.data });
    });
    this.getPost();
  }

  handleSubmit() {
    const { body } = this.state;
    console.log("fired submit");
    return axios
      .post("/api/answers", {
        body: this.state.body,
        post: this.state.post._id,
      })
      .then((res) => {
        this.getPost();
      })
      .catch((err) => {
        // deal with the error
      });
  }

  getPost() {
    axios.get(`/api/posts/${this.props.match.params.id}`).then((response) => {
      console.log(response);
      this.setState({ post: response.data });
    });
  }

  handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }

  render() {
    console.log(`[DEBUG] this.props = ${JSON.stringify(this.props, null, 2)}`);
    return (
      <div className="containertest">
        <div className="row">
          {this.state.post ? (
            <React.Fragment>
              {" "}
              <Post body={this.state.post.body} />
              <h1 className="mt-4 font-bold">Answers</h1>
              {this.state.post &&
                this.state.post.answers.map((answer) => (
                  <Answer user={answer.user} body={answer.body} />
                ))}{" "}
            </React.Fragment>
          ) : (
            <h3>loading...</h3>
          )}
        </div>
        <div className="row"></div>
        <div className="flex justify-center">
          <textarea
            onChange={(ev) => this.handleChangeField("body", ev)}
            className="border-b border-b-2 mt-3 border-teal-500"
            placeholder="Post Your Reply"
            value={this.state.body}
          ></textarea>

          <button
            onClick={this.handleSubmit}
            className="mb-3 ml-3 mt-3 rounded-full shadow bg-teal-500 px-4 py-2 text-white hover:bg-teal-400"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Posts);
