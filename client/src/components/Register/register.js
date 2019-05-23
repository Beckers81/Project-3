import React, { Component } from 'react';
import axios from 'axios';
import "./register.css";

export default class Register extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  }

  handleInputChange = (name, value) => {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form
        className="register-form"
        onSubmit={ e => {
          e.preventDefault();
          console.log("Submitting form! ...Allegedly");

          axios.post('/api/users', this.state)
            .then(response =>{
              console.log(response.data);
              this.props.updateLoggedInUser(response.data);
            })
            .catch(error => console.error(error));

        }}>
     
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            required
            name="firstName"
            id="firstName"
            onChange={ e => this.handleInputChange(e.target.name, e.target.value) }
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            required
            name="lastName"
            id="lastName"
            onChange={ e => this.handleInputChange(e.target.name, e.target.value) }
          />
        </div>

        <div>
          <input
            type="email"
            required
            id="email"
            name="email"
            onChange={ e => this.handleInputChange(e.target.name, e.target.value) }
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            required
            type="password"
            name="password"
            onChange={ e => this.handleInputChange(e.target.name, e.target.value) }
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}