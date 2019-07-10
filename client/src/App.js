import React, { Component } from "react";
import Info from "./Containers/Info/Info";
import WebScraper from "./Containers/web-scraper/web-scraper";
import Homepage from "./Containers/HomePage/HomePage";
import Pairs from "./Containers/Trading-strats/Pairs";
import "./App.css";
import LoginButton from "./components/LoginButton";
import GivenPairs from "./components/GivenPairs";
import Nav from "../src/components/Nav"

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Homepage />
        {/* <Pairs />
        <LoginButton />
        <WebScraper /> */}
        {/* <Info /> */}
        {/* <GivenPairs /> */}
      </div>
    );
  }
}

export default App;
