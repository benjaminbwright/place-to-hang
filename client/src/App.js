import React from "react";
import hammockBackground from "./images/hammock-background.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div id="welcome-login">
        <div id="welcome-heading" className="heading">
          <h1>A Place To Hang</h1>
          <h2>know where to hang your hammock</h2>
        </div>
        <div id="login-button">
          <button>Login</button>
        </div>
        <a href="#">Sign Up</a>
        <img id="hammock-background" src={hammockBackground} />
      </div>
    </div>
  );
}

export default App;
