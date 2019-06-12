import React from "react";
import Form from "../../components/Form";
import Button from "../../components/Button";
import API from "../../Utils/API";

class WebScraper extends React.Component {
  state = {
    search: ""
  };

  onInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value.toUpperCase() });
    console.log(this.state);
  };

  getStockNews = () => {
    API.getStockNews(this.state.search).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <div>
        <Form name="search" onChange={this.onInputChange} />
        <Button name="click me" onClick={this.getStockNews} />
      </div>
    );
  }
}
export default WebScraper;
