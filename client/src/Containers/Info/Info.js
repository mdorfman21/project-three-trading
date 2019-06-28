import React from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import API from "../../Utils/API";
import StockInfo from "../../components/StockInfo";
import StockInfoChart from "../../components/StockInfoChart";
import "./Info.css";
import { Container, Row, Col } from "react-bootstrap/";

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

  //58
  render() {
    const statsArray = this.state.statsArray;
    const optionOne = statsArray.stats.slice(0, -43);
    const optionTwo = statsArray.stats.slice(15, -28);
    const optionThree = statsArray.stats.slice(30, -13);
    const optionFour = statsArray.stats.slice(45);

    return (
      <Container>
        <br />
        <Row>
          <Col>
            <h1 className="font-title">Single Stock Info</h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="formButtons">
            <Form
              name="search"
              onChange={this.updateSearch}
              placeholder="Stock Ticker"
            />
          </Col>
        </Row>
        <Row>
          <Col className="formButtons">
            <Button
              name="Bollinger Bands"
              onClick={this.getStockInfo}
              className="btn btn-success"
            />
          </Col>
        </Row>
        <Row>
          <Col className="formButtons">
            <Button
              name="Stock Statistics"
              onClick={this.getStockStats}
              className="btn btn-success"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <p className="font">
              Here we have a graph showing just one securities bollinger bands.
              This is to just get some more information about the security of
              your choosing.
            </p>
            <p className="font">
              The bollinger bands are two standard deviations away from the
              moving average. Typically, the price of the security oscilates
              between these bands. When the price breaks this band in either
              direction and continues in the same direction, that security may
              be heading for a breakout in that direction.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <StockInfoChart
              categories={this.state.stockDays}
              dataOne={this.state.stockInfoArray}
              stockOne={this.state.search}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="font">
              Below we have key financial statistics about the security you are
              searching for. These can be used for indicators for certain
              trading strategies.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="stockInfoDiv">
              {statsArray.stats.length > 0
                ? optionOne.map((stat, index) => (
                    <span className="stockInfoSpan">
                      <StockInfo
                        name={stat.name}
                        value={stat.value}
                        key={stat.name}
                      />
                    </span>
                  ))
                : ""}
            </div>
          </Col>
          <Col>
            <div className="stockInfoDiv">
              {statsArray.stats.length > 0
                ? optionTwo.map((stat, index) => (
                    <span className="stockInfoSpan">
                      <StockInfo
                        name={stat.name}
                        value={stat.value}
                        key={stat.name}
                      />
                    </span>
                  ))
                : ""}
            </div>
          </Col>
          <Col>
            <div className="stockInfoDiv">
              {statsArray.stats.length > 0
                ? optionThree.map((stat, index) => (
                    <span className="stockInfoSpan">
                      <StockInfo
                        name={stat.name}
                        value={stat.value}
                        key={stat.name}
                      />
                    </span>
                  ))
                : ""}
            </div>
          </Col>
          <Col>
            <div className="stockInfoDiv">
              {statsArray.stats.length > 0
                ? optionFour.map((stat, index) => (
                    <span className="stockInfoSpan">
                      <StockInfo
                        name={stat.name}
                        value={stat.value}
                        key={stat.name}
                      />
                    </span>
                  ))
                : ""}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Info;
