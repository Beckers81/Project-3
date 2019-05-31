import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import 'bootstrap/dist/css/bootstrap.css';

// function App() {
//   return (
//     <div className="App">
//       <ValidatedLoginForm />
//     </div>
//   );
// }

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
