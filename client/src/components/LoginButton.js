import React, { Component } from "react";
import Auth from "../Utils/Auth";

function login() {
  const auth = new Auth();
  auth.login();
}

class LoginButton extends Component {
  render() {
    return (
      <div>
        <button onClick={login}>Login</button>
        <button onClick={login}>Sign Up</button>
      </div>
    );
  }
}

export default LoginButton;
