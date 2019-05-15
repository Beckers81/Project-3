import React, { Component } from "react";

import Login from './components/Login/Login';

import "./App.css";

class App extends Component {

  state = {
    loggedIn: false,
  }

  render() {
    if (this.state.loggedIn) {
      return <>User Logged In!</>
    } else {
      return <Login />
    }
  }

}

export default App;
