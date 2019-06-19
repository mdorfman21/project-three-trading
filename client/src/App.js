import React, { Component } from "react";
import Info from "./Containers/Info/Info";
import WebScraper from "./Containers/web-scraper/web-scraper";
import HomePage from "./Containers/HomePage/HomePage";
import "./App.css";
import LoginButton from "./components/LoginButton";

class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
        <LoginButton />
        <WebScraper />
      </div>
    );
  }
}

export default App;
