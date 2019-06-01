import React, { Component } from 'react';
import "./BlogPost.css";

export default class BlogPost extends Component {

  state = {
    title: '',
    blogPost: '',
  }
  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.name) {
      // Call the API
    }
  };


  render() {
    return (
      <form>
        <input
          type="text"
          name="title"
        />
        <textarea
          name="body"
          value={ this.state.title }
        />

        <button>Submit</button>

    </form>
    )
  }


};

