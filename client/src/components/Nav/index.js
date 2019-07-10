import React from "react";
import LoginButton from "../../components/LoginButton";
import Button from "../../components/Button";
import { Container } from "../../components/Grid";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <Container>
        <img
          src="https://github.com/mdorfman21/project-three-trading/blob/profile/client/src/media/logoplain.png?raw=true"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
        />
        <a className="navbar-brand" href="/">
          Modo
        </a>
        {/* <LoginButton /> */}
      </Container>
    </nav>
  );
}

export default Nav;
