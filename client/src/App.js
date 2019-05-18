import React, { Component } from "react";

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
    return( <Register />)
   
    if (this.state.loggedIn) {
      return <>User Logged In!</>
    } else if (this.state.newUser) {
      return <Register />
    } else {
      return <Login />
    }
  }

}

export default App;
