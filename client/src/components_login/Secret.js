import React, { Component } from "react";
import App from "../App";
import Auth from "../Utils/Auth";

const auth = new Auth();
let username = auth.getProfile().given_name || "user";

export default class Secret extends Component {
  render() {
    return (
      <div>
        Secret area
        <br />
        Jump back to <a href="/">home</a>
        <br />
        <hr />
        Hello {username}
        {/* <button>log out</button> */}
        <button onClick={auth.logout}>log out</button>
        <App />
      </div>
    );
  }
}
