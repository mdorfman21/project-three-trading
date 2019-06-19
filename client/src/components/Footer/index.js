import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./style.css";

function Footer() {
  return (
    <footer className="navbar navbar-expand-lg navbar-dark bg-success">
      <Container>
        <Row>
          <Col size="lg-3">
            <a className="navbar-brand footer-brand" href="/">
              Modo
            </a>
          </Col>
          <Col size="lg-3">
            <ul className="footer-links">
              <li>
                <a href="/">Why Modo?</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Investment Guidance</a>
              </li>
            </ul>
          </Col>
          <Col size="lg-3">
            <ul className="footer-links">
              <li>
                <a href="/">Goal Planning</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">FAQs</a>
              </li>
            </ul>
          </Col>
          <Col size="lg-3">
            <ul className="footer-links">
              <li>
                <a href="/">Privacy</a>
              </li>
              <li>
                <a href="/">Security</a>
              </li>
              <li>
                <p className="copyright">©2019, Modo. All Rights Reserved</p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
