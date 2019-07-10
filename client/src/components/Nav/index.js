import React from "react";
import LoginButton from "../../components/LoginButton";
import Button from "../../components/Button";
import { Container } from "../../components/Grid";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav() {
  return (
    <Router>
      <div>
        {/* Navigation bar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
          <Container>

            <form className="form-inline">
              <a className="navbar-brand" href="/">
                <img
                  src="https://github.com/mdorfman21/project-three-trading/blob/profile/client/src/media/logonav.png?raw=true"
                  class="mr-2"
                  height="30px"
                  width="50px"
                />

                MODO
            </a>


              <Link to={"/pairs"}>
                <Button name="Pairs" className="btn btn-success" />
              </Link>
              <Link to={"/given/pairs"}>
                <Button name="Given Pairs" className="btn btn-success" />
              </Link>
              <Link to={"/info"}>
                <Button name="Stock Info" className="btn btn-success" />
              </Link>
            </form>
            {/* Login Button Component */}
            <LoginButton />

          </Container>
        </nav>
        
      </div>
    </Router>
  );
}

export default Nav;
