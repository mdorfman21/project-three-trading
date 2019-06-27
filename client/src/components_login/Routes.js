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
import "bootstrap/dist/css/bootstrap.min.css";

export const makeMainRoutes = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
          <Container>
            <img
              src="https://github.com/mdorfman21/project-three-trading/blob/profile/client/src/media/logonav.png?raw=true"
              class="mr-2"
              height="30px"
              width="50px"
            />
            <a className="navbar-brand" href="/">
              MODO
            </a>
            <div class="btn-group ml-auto">
              <LoginButton />
              <Link to="/">
                <Button name="Home" className="btn btn-outline-light" />
              </Link>
              <Link to="/pairs">
                <Button name="Pairs" className="btn btn-outline-light" />
              </Link>
              <Link to="/given/pairs">
                <Button name="Given Pairs" className="btn btn-outline-light" />
              </Link>
              <Link to="/info">
                <Button name="Stock Info" className="btn btn-outline-light" />
              </Link>
            </div>
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
