import React, { Component } from "react";
import Auth from "../Utils/Auth";

const auth = new Auth();

function login() {
  auth.login();
}

function logout() {
  auth.logout();
}

class LoginButton extends Component {
  render() {
    // return <button onClick={login}>Login</button>;
    const isAuthenticated = auth.isAuthenticated();
    let button;

    if (isAuthenticated) {
      button = <button type="button" class="btn btn btn-outline-light" onClick={logout}>Logout</button>;
    } else {
      button = <button type="button" class="btn btn btn-outline-light" onClick={login}>Login</button>;
    }

    return <div>{button}</div>;
  }
  // render() {
  //   if (isLoggedIn) {
  //     return <button onClick={logout}>Logout</button>;
  //   }
  //   return <button onClick={login}>Login</button>
  //   <button onClick={login}>Sign Up</button>
  // }

  // return (
  //   <div>
  //     <button onClick={login}>Login</button>
  //     <button onClick={login}>Sign Up</button>
  //   </div>
  // );
}

export default LoginButton;
