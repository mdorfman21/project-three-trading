import React, { Component } from "react";
import App from "../App";
import Auth from "../Utils/Auth";

const auth = new Auth();
let username = auth.getProfile().given_name || "user";
let proPic = auth.getProfile().picture;

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
        <br />
        <img src={proPic} style={{ width: "100px", height: "100px" }} />
        <br />
        {/* <button>log out</button> */}
        <button onClick={auth.logout}>log out</button>
        <App />
      </div>
    );
  }
}
