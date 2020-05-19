import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Welcome from "./pages/Welcome";
import "./App.scss";

export default () => {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Welcome />
        </Route>
      </Router>
    </div>
  );
};
