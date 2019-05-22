import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {

  state = {
    username: '',
    password: '',
  }

  handleInputChange = (name, value) => {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form className="App" onSubmit={ e => {
        e.preventDefault();
        console.log("Submitting form! ...Allegedly");

        axios.post('/api/users', { ...this.state })
          .then(response => console.log(response.data))
          .catch(error => console.error(error));

      }}>
        <input
          type="text"
          name="username"
          onChange={ e => this.handleInputChange(e.target.name, e.target.value) }
        />
        <input
          type="password"
          name="password"
          onChange={ e => this.handleInputChange(e.target.name, e.target.value) }
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}