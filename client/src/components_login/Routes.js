import React, { Component } from "react";
import "../App.css";
import App from "../App";
import Secret from "./Secret";
import Callback from "./Callback";
import Pairs from "../Containers/Trading-strats/Pairs";
import GivenPairs from "../components/GivenPairs";
import Info from "../Containers/Info/Info";
import Nav from "../components/Nav/index";
import Button from "../components/Button";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import LoginButton from "../components/LoginButton";
import { Container } from "../components/Grid";

export const makeMainRoutes = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
          <Container>
            <a className="navbar-brand" href="/">
              Modo
            </a>
            <LoginButton />
            <Link to="/">
              <Button name="Home" />
            </Link>
            <Link to="/pairs">
              <Button name="Pairs" />
            </Link>
            <Link to="/given/pairs">
              <Button name="Given Pairs" />
            </Link>
            <Link to="/info">
              <Button name="Stock Info" />
            </Link>
          </Container>
        </nav>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/callback" component={Callback} />
          <Route path="/secret" component={Secret} />
          <Route exact path="/pairs" component={Pairs} />
          <Route exact path="/given/pairs" component={GivenPairs} />
          <Route exact path="/info" component={Info} />
        </Switch>
      </div>
    </Router>
  );
};
