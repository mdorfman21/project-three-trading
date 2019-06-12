import React from "react";

class WebScraper extends React.Component {
  state = {
    search: ""
  };

  onInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  };
}
