import React, { useState, useEffect } from "react";
import API from "../Utils/API";
import { Container, Row, Col } from "react-bootstrap/";
import Table from "react-bootstrap/Table";
import "./GivenPairs.css";
import Footer from "../components/Footer";


function GivenPairs() {
  const [givenPairs, setGivenPairs] = useState([
    { correlations: 0.96, symbolGroup: ["AAC", "ADMS"] },
    { correlations: 0.97, symbolGroup: ["AAC", "INAP"] },
    { correlations: 0.95, symbolGroup: ["AAOI", "LLEX"] },
    { correlations: 0.97, symbolGroup: ["AAT", "CTRE"] },
    { correlations: 0.96, symbolGroup: ["AIT", "OAS"] },
    { correlations: 0.97, symbolGroup: ["AKAO", "NTGR"] },
    { correlations: 0.95, symbolGroup: ["AMAG", "GBX"] },
    { correlations: 0.97, symbolGroup: ["ARA", "AREX"] },
    { correlations: 0.95, symbolGroup: ["BHLB", "TOWN"] },
    { correlations: 0.96, symbolGroup: ["CBPX", "SUP"] }
  ]);

  //why doesnt this work?
  // useEffect(() => {
  //   API.getGivenPairs().then(res => {
  //     setGivenPairs(res.data);
  //     console.log(res.data);
  //   });
  // });

  return (
    <div>
      <Container >
        <br />
        <div class="d-flex justify-content-center">
          <Row><h1 className="font-title">Get Started With These Pairs</h1></Row>
        </div>
        <div class="d-flex justify-content-center">




          <Row>
            <Col>
            </Col>

            <Col>
              <Table striped bordered />
              <thead>
                <th>#</th>
                <th>Ticker One</th>
                <th>Ticker Two</th>
                <th>Correlation Coeffecient</th>
              </thead>
              <tbody>
                {givenPairs.map((pair, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{pair.symbolGroup[0]}</td>
                    <td>{pair.symbolGroup[1]}</td>
                    <td>{Number(pair.correlations).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </Col>
            <Col></Col>
          </Row>
        </div>
      </Container>

      <br></br>
      <Footer />
    </div>
  );
}

export default GivenPairs;
