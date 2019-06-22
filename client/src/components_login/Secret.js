import React, { Component } from "react";
import App from "../App";

export default class Secret extends Component {
  render() {
    return (
      <div>
        Secret area
        <br />
        Jump back to <a href="/">home</a>
        <br />
        {/* <button onClick={this.props.auth.logout}>log out</button> */}
        <App />
      </div>
    );
  }
}
