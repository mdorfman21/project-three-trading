import React from "react";
import Correlate from "../../Utils/correlation_function";
import Form from "../../components/Form";
import Button from "../../components/Button";
import API from "../../Utils/API";
import { promises } from "fs";
import PairsChart from "../../components/Highcharts";
import SingleChart from "../../components/SingleChart";

// messing with pairs page
import { Col, Row, Container } from "../../components/Grid";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import "./TradingStrats.css";
import DataTable from "../../components/DataTable/DataTable";

class Pairs extends React.Component {
  state = {
    stockOne: "",
    stockTwo: "",
    stockOneStats: [],
    stockTwoStats: [],
    days: 200,
    correlation: 0,
    stockOneDays: [],
    stockTwoDays: [],
    stockOnePriceRelative: [],
    stockTwoPriceRelative: []
  };

  onInputChange = e => {
    const value = e.target.value.toUpperCase();
    const name = e.target.name;
    this.setState({ [name]: value });
    console.log("this is the state as well:", this.state);
  };

  getDataForPairs = () => {
    const stockOne = this.state.stockOne;
    const stockTwo = this.state.stockTwo;
    const days = this.state.days;

    const stockQueryOne = {
      symbol: stockOne,
      days
    };
    const stockQueryTwo = {
      symbol: stockTwo,
      days
    };

    const completeStockOne = new Promise((resolve, reject) => {
      resolve(
        API.getStockInfo(stockQueryOne).then(res => {
          console.log("stock one response", res.data);
          const response = res.data.stats;
          const stats = response.map(day => day.dayClose);
          console.log("stock one mapped over prices", stats);
          const priceRelative = stats.map((price, index) => {
            const firstPrice = stats[0];
            return price / firstPrice;
          });
          console.log("stockone price relative:", priceRelative);
          const daysArray = response.map(day => day.timestamp);
          this.setState({
            ...this.state,
            stockOneStats: stats,
            stockOneDays: daysArray,
            stockOnePriceRelative: priceRelative
          });
        })
      );
    });
    const completeStockTwo = new Promise((resolve, reject) => {
      resolve(
        API.getStockInfo(stockQueryTwo).then(res => {
          console.log(res.data);
          const response = res.data.stats;
          const stats = response.map(day => day.dayClose);
          console.log(stats);
          const priceRelative = stats.map((price, index) => {
            const firstPrice = stats[0];
            return price / firstPrice;
          });
          const daysArray = response.map(day => day.timestamp);
          console.log("pricerelative:", priceRelative);
          this.setState({
            ...this.state,
            stockTwoStats: stats,
            stockTwoDays: daysArray,
            stockTwoPriceRelative: priceRelative
          });
        })
      );
    });

    Promise.all([completeStockOne, completeStockTwo]);
    console.log("this is the state:", this.state);
  };

  correlate = () => {
    const checkDates = this.state.stockOneDays.filter((day, index) => {
      if (day === this.state.stockTwoDays[index]);
      return day;
    });
    if (
      checkDates.length === this.state.stockOneStats.length &&
      this.state.stockTwoStats.length
    ) {
      console.log(checkDates);
      const correlation = Correlate.correlate(
        this.state.stockOnePriceRelative,
        this.state.stockTwoPriceRelative
      );
      console.log(correlation);
      this.setState({ ...this.state, correlation: correlation });
    } else {
      console.log("cant correlate when dates dont match");
    }
  };

  render() {
    console.log("CURRENT RENDER STATE DEBUG:", this.state);

    // messing around with Pairs Js
    const headings = [
      "StockOne",
      "StockTwo",
      "Delete?"
    ];

    const rows = [
      [
        'aapl',
        'bynd',
        <Button name="X" />
      ],
      [
        'aapl',
        'bynd',
        <Button name="X" />
      ],
      [
        'aapl',
        'bynd',
        <Button name="X" />
      ]
    ]

    return (
      <div>
        <Nav />
        <br /><br />
        <h1 className="pageTitle">Stock Comparison</h1>
        {/* messing with pairs page  */}
        <br />
        <br />
        <Container>
          <Row>
            <Col size="lg-6">
              <h3 className="colTitle">Search for your stocks and compare</h3>
              <br />
              <Form
                name="stockOne"
                placeholder="Stock One"
                onChange={this.onInputChange}
              />
              <Form
                name="stockTwo"
                placeholder="Stock Two"
                onChange={this.onInputChange}
              />
              <Button name="click for pairs" onClick={this.getDataForPairs} />
              <Button name="correlate" onClick={this.correlate} />
              <Button name="Add to Favorites" />
            </Col>

            <Col size="lg-6">
              <h3 className="colTitle">Favorites</h3>
              <br />
              <div className="favStockList" style={{height:"100%",overflow:"scroll"}}>
                <DataTable headings={headings} rows={rows} />
                
              </div>
            </Col>

          </Row>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <PairsChart
            categories={this.state.stockOneDays}
            dataOne={this.state.stockOnePriceRelative}
            dataTwo={this.state.stockTwoPriceRelative}
            stockOne={this.state.stockOne}
            stockTwo={this.state.stockTwo}
          />
          <SingleChart
            categories={this.state.stockOneDays}
            dataOne={this.state.stockOneStats}
            stockOne={this.state.stockOne}
          />
          <SingleChart
            categories={this.state.stockTwoDays}
            dataOne={this.state.stockTwoStats}
            stockOne={this.state.stockTwo}
          />
          {this.state.correlation !== 0 ? (
            <h4>
              Correlation coefficient between {this.state.stockOne} and{" "}
              {this.state.stockTwo} is {this.state.correlation}
            </h4>
          ) : (
            ""
          )}
        </Container>
        <br />
        <br /> <br />
        <br />
        
        <Footer />
      </div>
    );
  }
}

export default Pairs;
