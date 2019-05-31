import React from "react";
import  Render from 'react-dom';
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import 'bootstrap/dist/css/bootstrap.css';
// import ValidatedLoginForm from "./components/Validation/ValidatedLoginForm"


ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();