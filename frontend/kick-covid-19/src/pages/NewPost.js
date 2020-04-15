import React from "react";
import axios from "axios";

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

    return axios.post("/api/posts", {
      body,
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
      <div className="col-12 col-lg-6 offset-lg-3">
        <textarea
          onChange={(ev) => this.handleChangeField("body", ev)}
          className="form-control my-3"
          placeholder="Article Body"
          value={body}
        ></textarea>

        <button
          onClick={this.handleSubmit}
          className="btn btn-primary float-right"
        >
          Submit
        </button>
      </div>
    );
  }
}

export default NewPost;
