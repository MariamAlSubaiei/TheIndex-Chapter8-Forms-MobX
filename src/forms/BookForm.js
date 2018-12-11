import React, { Component } from "react";

import bookStore from "../stores/BookStore";
import { observer } from "mobx-react";

class BookForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      color: ""
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.submitBook = this.submitBook.bind(this);
  }

  onTextChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  submitBook(e) {
    e.preventDefault();
    bookStore.addBook(this.state, this.props.authorID);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitBook}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Title</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Color</span>
            </div>
            <select
              type=""
              className="form-control"
              name="color"
              onChange={this.onTextChange}
            >
              <option value="">Color</option>
              <option value="red">Red</option>
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="blue">Blue</option>
            </select>
          </div>
          <input type="submit" /> <br />
        </form>
      </div>
    );
  }
}

export default observer(BookForm);
