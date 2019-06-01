import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
//pages

import Homepage from './pages/home/homepage';
import BlogPost from './pages/BlogPost/BlogPost';

import Homepage from './pages/Home/Homepage';


import "./App.css";


class App extends Component {

  state = {
    loggedIn: false,
    loggedInUser: null,
  }

  componentDidMount() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
      this.setState({
        loggedInUser: user,
        loggedIn: true,
      });
    }

  }

  render() {
    return (
      <Router>
        <div>

          <Route exact path="/" render={ props => (
            <Homepage
              user={ this.state.loggedInUser }
              updateLoggedInUser={ user => {
                sessionStorage.setItem('user', JSON.stringify(user));
                this.setState({
                  loggedIn: true,
                  loggedInUser: user
                });
              }}/>
          )} />
          
          <Route exact path="/blog" component={BlogPost}/>

        </div>
      </Router>
    )
  }
}

export default App;