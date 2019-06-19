import React from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import API from "../../Utils/API";

class Info extends React.Component {
  state = {
    search: "",
    statsArray: [],
    symbol: "",
    id: "",
    days: 10
  };

  getStockInfo = () => {
    console.log(this.state);
    const stockQuery = {
      symbol: this.state.search,
      days: this.state.days
    };
    API.getStockInfo(stockQuery).then(res => {
      console.log(res);
      this.setState({
        ...this.state,
        statsArray: res.data.stats,
        symbol: res.data.symbol,
        id: res.data._id
      });
    });
    console.log(this.state);
  };

  getStockStats = () => {
    const symbol = this.state.search;
    API.getStockStats(symbol).then(res => {
      console.log(res);
    });
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
        <Form name="days" onChange={this.updateSearch} />
        <Button name="check me" onClick={this.getStockInfo} />
        <Button name="stock stats scraper" onClick={this.getStockStats} />
      </div>
    );
  }
}

export default Info;
