import React, { Component } from 'react';
import "./BlogPost.css";

export default class BlogPost extends Component {

  state = {
    title: '',
    blogPost: '',
  }

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



