import React, { Component } from "react";
import Info from "./Containers/Info/Info";
import WebScraper from "./Containers/web-scraper/web-scraper";
import "./App.css";
import Auth from "./Utils/Auth";

function login() {
  const auth = new Auth();
  auth.login();
}

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={login}>Login button</button>
        <WebScraper />
      </div>
    );
  }
}

export default App;
