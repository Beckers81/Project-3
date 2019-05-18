import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//pages
import Homepage from './pages/home/homepage';
//components
import Login from './components/Login/Login';
import Register from './components/Register/register';

import "./App.css";

class App extends Component {

  state = {
    loggedIn: false,
    newUser:  false,
  }

  render() {
  return (
    <Router>
      <div>
        
        
          <Route exact path="/" component={Homepage} />
        
      </div>
    </Router>)

    // if (this.state.loggedIn) {
    //   return <>User Logged In!</>
    // } else if (this.state.newUser) {
    //   return <Register />
    // } else {
    //   return <Login />
    // }
  }

}

export default App;
