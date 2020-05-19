import React from "react";
import Button from "../components/Button";
import hammockBackground from "../images/hammock-background.svg";

export default () => {
  return (
    <div id="welcome">
      <div id="welcome-heading" className="heading">
        <h1>A Place To Hang</h1>
        <h2>know where to hang your hammock</h2>
      </div>
      <div id="login-button">
        <Button buttonText="Login" />
      </div>
      <a href="#">Sign Up</a>
      <img id="hammock-background" src={hammockBackground} />
    </div>
  );
};
