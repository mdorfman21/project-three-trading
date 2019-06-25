import React, { Component } from "react";
import "../App.css";
import App from "../App";
import Secret from "./Secret";
import Callback from "./Callback";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const makeMainRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/callback" component={Callback} />
        <Route path="/secret" component={Secret} />
      </Switch>
    </Router>
  );
};
