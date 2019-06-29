import React from "react";
import Correlate from "../../Utils/correlation_function";
import Form from "../../components/Form";
import Button from "../../components/Button";
import API from "../../Utils/API";
import PairsChart from "../../components/Highcharts";
import SingleChart from "../../components/SingleChart";
import SpreadChart from "../../components/SpreadChart";
import { Container, Row, Col } from "react-bootstrap/";
import "./Pairs.css";
import Footer from "../../components/Footer";

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
      this.setState({
        ...this.state,
        correlation: Number(correlation).toFixed(2)
      });
    } else {
      console.log("cant correlate when dates dont match");
    }
  };

  render() {
    return (
      <div>
      <Container>
        <br />
        <Row>
          <Col>
            <h1 className="font-title">Pairs Trading Strategy</h1>
          </Col>
        </Row>
        <br />
        <Row className="justify-content-center">
          <Col md="justify-content-center">
            <Form
              name="stockOne"
              placeholder="Stock Ticker One"
              onChange={this.onInputChange}
            />
            <Form
              name="stockTwo"
              placeholder="Stock Ticker Two"
              onChange={this.onInputChange}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="justify-content-center">
            <Button
              name="Click For Pairs"
              onClick={this.getDataForPairs}
              className="btn btn-success"
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="justify-content-center">
            <Button
              name="Correlate"
              onClick={this.correlate}
              className="btn btn-success"
            />
          </Col>
        </Row>
        <br />
        <Row className="justify-content-center">
          <Col md="justify-content-center">
            {this.state.correlation !== 0 ? (
              <h6>
                Correlation coefficient between {this.state.stockOne} and{" "}
                {this.state.stockTwo} is {this.state.correlation}
              </h6>
            ) : (
              ""
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="font">
              Below is the chart that is plotting how the relative prices of the
              two securities move. This is to show how whether the correlated
              prices are moving away from each other.
            </p>
            <PairsChart
              categories={this.state.stockOneDays}
              dataOne={this.state.stockOnePriceRelative}
              dataTwo={this.state.stockTwoPriceRelative}
              stockOne={this.state.stockOne}
              stockTwo={this.state.stockTwo}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="font">
              Below is the chart that is showing the movement between the spread
              of the two securities' prices. This will show you that the prices
              are either moving apart or closer together. This gives you a
              visual of what you are looking for in the above chart.
            </p>
            <SpreadChart
              categories={this.state.stockOneDays}
              dataOne={this.state.stockOneStats}
              dataTwo={this.state.stockTwoStats}
              stockOne={this.state.stockOne}
              stockTwo={this.state.stocktwo}
            />
          </Col>
        </Row>
        <Row>
          <Row>
            <Col>
              <p className="font">
                The below charts show the prices of the two securities. The
                upper and lower bollinger bands are representations of two
                standard deviations up and down from the moving average.
                Usually, the price oscilates in between these bands, when it
                breaks these bands and then continues in the same direction it
                usually means a breakout or shortfall.
              </p>
              <p className="font">
                The strategy is when the highly correlated securities' prices go
                in different directions but don't break the bollinger band on
                either side and start going back to the their moving average,
                you buy the under-valued security and short the over-valued
                security. This will provide a win both ways when the securities
                fall back into tandem.{" "}
              </p>
            </Col>
          </Row>
          <Col>
            <SingleChart
              categories={this.state.stockOneDays}
              dataOne={this.state.stockOneStats}
              stockOne={this.state.stockOne}
            />
          </Col>
          <Col>
            <SingleChart
              categories={this.state.stockTwoDays}
              dataOne={this.state.stockTwoStats}
              stockOne={this.state.stockTwo}
            />
          </Col>
        </Row>
      </Container>
        <br></br>
      <Footer />
      </div>
    );
  }
}

export default Pairs;
