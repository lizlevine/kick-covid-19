import React from "react";
import axios from "axios";
// import { Redirect } from "react-router-dom";

class NewPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
    };

    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { body } = this.state;
    console.log("fired submit");
    return axios
      .post("/api/posts", {
        body,
      })
      .then((res) => {
        console.log(res);
        window.location.href = "/blog";
        // return <Redirect to="/blog" push={true} />;
      });
  }

  handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }

  render() {
    const { body } = this.state;

    return (
      <div className="maindiv">
        <div className="flex justify-center">
          <textarea
            onChange={(ev) => this.handleChangeField("body", ev)}
            className="border-b border-b-2 mt-3 border-teal-500"
            placeholder="Covid Post"
            value={body}
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

export default NewPost;
