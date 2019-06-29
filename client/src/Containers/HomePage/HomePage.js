import React, { Component } from "react";
import Button from "../../components/Button";
import LoginButton from "../../components/LoginButton";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import { Col, Row, Container } from "../../components/Grid";
import TradingViewWidget from "react-tradingview-widget";
import Footer from "../../components/Footer";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col size="lg-12">
            <Jumbotron>
              <h2>Interested in knowing Standard & Poor (S&P)?</h2>
              <TradingViewWidget symbol="OANDA:SPX500USD" />
              <h2>Interested in knowing Dow Jones?</h2>
              <TradingViewWidget symbol="FOREXCOM:DJI" />
              <h2>Interested in knowing Nasdaq?</h2>
              <TradingViewWidget symbol="NDAQ" />
            </Jumbotron>
          </Col>
        </Row>
        <Container fluid>
          <Row>
            <Col size="lg-4" />
            <Col size="lg-4">
              <div style={{ textAlign: "center", marginBottom: "2em" }}>
                <Button name="Join Us" />
              </div>
            </Col>
            <Col size="lg-4" />
          </Row>
        </Container>
        <Row>
          <Col size="lg-12">
            <Jumbotron>
              <h2 style={{ textAlign: "center" }}>What is Modo?</h2>
              <p style={{ paddingTop: "8em" }}>
                Modo is an investment strategy information site or something
                along those lines.
              </p>
              <Button name="Learn More" />
            </Jumbotron>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col size="lg-12">
              <div style={{ textAlign: "center", marginBottom: "2em" }}>
                <Button name="Create an Account" />
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
        {/* <LoginButton name="check me" onClick={this.getStockInfo} /> */}
      </div>
    );
  }
}

export default HomePage;
