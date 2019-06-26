import React from "react";
import LoginButton from "../../components/LoginButton";
import Button from "../../components/Button";
import { Container } from "../../components/Grid";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <Container>
        <a className="navbar-brand" href="/">
          Modo
        </a>
        <LoginButton />
      </Container>
    </nav>
  );
}

export default Nav;
