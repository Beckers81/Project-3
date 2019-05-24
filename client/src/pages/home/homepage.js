import React from 'react';

import BlogPost from '../BlogPost/BlogPost';
import Register from "../../components/Register/register";
import Login from "../../components/Login/Login";
import Nav from "../../components/navbar/Nav";

import { Button } from 'reactstrap';

import axios from 'axios';

class Homepage extends React.Component {
  state = {
    registerModal: false,
    loginModal: false,

    loginCreds: {},
    registerCreds: {},
    post: {},
  };
  
  toggleLogin = () => {
    this.setState(prevState => ({
      loginModal: !prevState.loginModal
    }));
  }

  toggleRegister = () => {
    this.setState(prevState => ({
      registerModal: !prevState.registerModal
    }));
  }

  handleRegisterInputChange = (name, value) => {
    const registerCreds = { ...this.state.registerCreds, [ name ]: value };
    this.setState({ registerCreds });
  }

  handleLoginInputChange = (name, value) => {
    const loginCreds = { ...this.state.loginCreds, [ name ]: value };
    this.setState({ loginCreds: loginCreds });
  }

  register = () => {
    console.log('registering');
    axios.post('/api/users', this.state.registerCreds)
      .then(response =>{
        console.log(response.data);
        this.props.updateLoggedInUser(response.data);
      })
      .catch(error => console.error(error));
  }

  login = () => {
    console.log('logging in')
    axios.post('/api/login', this.state)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  }

  render(){
    return (
      <div>

        { !this.props.user && 
          <>
            <div className="horizontal-center">
              <h1 className="display-3">Our Amazing App!</h1>
              <p className="lead">Interested in a Free Gift?</p>
              <hr className="my-2" />
              <p>Our Home Page is Fun and Inspirational.</p>

              <Register
                isOpen={ this.state.registerModal }
                toggleRegister={ this.toggleRegister }
                handleInputChange={ this.handleRegisterInputChange }
                register={ this.register }
              />
              <Login
                isOpen={ this.state.loginModal }
                toggleLogin={ this.toggleLogin }
                handleInputChange={ this.handleLoginInputChange }
              />

            </div>
            <p className="lead">
              <Button color="secondary" size="lg" onClick={this.toggleLogin}>Login</Button>
              <Button color="secondary" size="lg" onClick={this.toggleRegister}>Register</Button>
            </p>
          </>
        }

        { this.props.user &&
          <BlogPost />
        }
      </div>
    );
  } 
};

export default Homepage;