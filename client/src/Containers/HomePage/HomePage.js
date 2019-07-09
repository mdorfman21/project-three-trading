import React, { Component } from "react";
import Button from "../../components/Button";
import LoginButton from "../../components/LoginButton";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import { Col, Row, Container } from "../../components/Grid";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import Footer from "../../components/Footer";
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col size="lg-12">
            <div className="introBackground">
              <h2 className="introHeading">What is Modo?</h2>
              <p className="introParagraph">
                Modo is an investment strategy information site or something
                along those lines.
              </p>
              <div className="introBtn">
                <button>Learn More</button>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col size="lg-12">
            <div className="imageInfo">
              <div className="box">
                <img src={require("../../images/investment.png")} />
                <p>
                  Learn how and when to invest in companies you're interested in
                  to add to your portfolio.
                </p>
                <a href="#">Investing</a>
              </div>
              <div className="box">
                <img src={require("../../images/growth.png")} />
                <p>
                  Learn how to grow your portfolios by studying trends and charts.
                </p>
                <a href="#">Growth</a>
              </div>
              <div className="box">
                <img src={require("../../images/revenue.png")} />
                <p>
                  Learn how and when to invest and when to short to increase your revenue.
                </p>
                <a href="#">Revenue</a>
              </div>
              <div className="box">
                <img src={require("../../images/savings.png")} />
                <p>
                  Learn how to turn your savings into investments you search and research for yourself.
                </p>
                <a href="#">Assets and saving</a>
              </div>
            </div>
          </Col>
        </Row>

        <h3 className="marketTracking">Market Tracking</h3>

        <div className="sAndP">
        <p>Standard & Poor</p>
          <TradingViewWidget
            symbol="OANDA:SPX500USD"
            theme={Themes.DARK}
            locale="en"
            autosize
          />
        </div>

        <div className="dJ">
        <p>Dow Jones</p>
          <TradingViewWidget
            symbol="FOREXCOM:DJI"
            theme={Themes.DARK}
            locale="en"
            autosize
          />
        </div>

        <div className="nasdq">
        <p>Nasdaq</p>
          <TradingViewWidget
            symbol="NDAQ"
            theme={Themes.DARK}
            locale="en"
            autosize
          />
        </div>

        <div className="getStarted">
          <h1>Get Started</h1>
          <p>
            Learn how to be financially independent by studying trends. Sign up
            now!
          </p>
          <div className="getStartedBtn">
            <button>Sign Up</button>
          </div>
        </div>

        <Footer />
        {/* <LoginButton name="check me" onClick={this.getStockInfo} /> */}
      </div>
    );
  }
}

export default HomePage;

