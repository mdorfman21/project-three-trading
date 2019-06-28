import React, { Component } from "react";
import Auth from "../Utils/Auth";
import Secret from "./Secret";

export default class Callback extends Component {
  componentDidMount() {
    const auth = new Auth();
    auth.handleAuthentication();
  }
  render() {
    return <Secret />;
  }
}
