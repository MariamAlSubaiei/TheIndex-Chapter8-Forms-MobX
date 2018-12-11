import React, { Component } from "react";

import authorStore from "../stores/AuthorStore";
import { observer } from "mobx-react";

class AuthorForm extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      imageUrl: "",
      books: []
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.submitAuthor = this.submitAuthor.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  onTextChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  submitAuthor(e) {
    e.preventDefault();
    authorStore.addAuthor(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitAuthor}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">First Name</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="first_name"
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Last Name</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="last_name"
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Image URL</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="imageUrl"
              onChange={this.onTextChange}
            />
          </div>
          <input type="submit" /> <br />
        </form>
      </div>
    );
  }
}

export default observer(AuthorForm);
