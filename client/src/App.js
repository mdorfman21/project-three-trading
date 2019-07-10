import React, { Component } from "react";
import Homepage from "./Containers/HomePage/HomePage";
import "./App.css";
import Nav from "../src/components/Nav"

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Homepage />
      </div>
    );
  }
}

export default App;
