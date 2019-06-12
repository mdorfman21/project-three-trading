import React from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import API from "../../Utils/API";

class Info extends React.Component {
  state = {
    search: "",
    statsArray: []
  };

  getStockInfo = () => {
    console.log(this.state);
    const stockQuery = {
      symbol: this.state.search,
      days: 30
    };
    API.getStockInfo(stockQuery);
  };

  updateSearch = e => {
    const name = e.target.name;
    const value = e.target.value.toUpperCase();
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <Form name="search" onChange={this.updateSearch} />
        <Button name="check me" onClick={this.getStockInfo} />
      </div>
    );
  }
}

export default Info;
