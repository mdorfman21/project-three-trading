import React, { Component } from "react";
import Info from "./Containers/Info/Info";
import WebScraper from "./Containers/web-scraper/web-scraper";
import Homepage from "./Containers/HomePage/HomePage";
import Pairs from "./Containers/Trading-strats/Pairs";

import "./App.css";
import LoginButton from "./components/LoginButton";

class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
        <Pairs />

        <LoginButton />
        <WebScraper />
        {/* <Info /> */}
      </div>
    );
  }
}

export default App;
