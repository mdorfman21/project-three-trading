import React from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import API from "../../Utils/API";
import StockInfo from "../../components/StockInfo";
import StockInfoChart from "../../components/StockInfoChart";

class Info extends React.Component {
  state = {
    search: "",
    statsArray: { stats: [] },
    stockStatsArray: [],
    stockDays: [],
    days: 200
  };

  getStockInfo = () => {
    const stockQuery = {
      symbol: this.state.search,
      days: this.state.days
    };
    API.getStockInfo(stockQuery).then(res => {
      console.log(res);
      const response = res.data.stats;
      const stats = response.map(day => day.dayClose);
      console.log(stats);

      const daysArray = response.map(day => day.timestamp);

      this.setState({
        ...this.state,
        stockInfoArray: stats,
        stockDays: daysArray
      });
    });
  };

  getStockStats = () => {
    const symbol = this.state.search;
    API.getStockStats(symbol).then(res => {
      this.setState({ statsArray: res.data });
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
    const statsArray = this.state.statsArray;

    return (
      <div>
        <Form name="search" onChange={this.updateSearch} />
        <Button name="check me" onClick={this.getStockInfo} />
        <Button name="stock stats scraper" onClick={this.getStockStats} />
        <StockInfoChart
          categories={this.state.stockDays}
          dataOne={this.state.stockInfoArray}
          stockOne={this.state.search}
        />

        {statsArray.stats.length > 0
          ? statsArray.stats.map(stat => (
              <span>
                <StockInfo
                  name={stat.name}
                  value={stat.value}
                  key={stat.name}
                />
              </span>
            ))
          : ""}
      </div>
    );
  }
}

export default Info;
