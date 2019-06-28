import React, { useState, useEffect } from "react";
import API from "../Utils/API";
import { Container, Row, Col, Table } from "react-bootstrap/";
import "./GivenPairs.css";

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

  // useEffect(() => {
  //   API.getGivenPairs().then(res => {
  //     setGivenPairs(res.data);
  //     console.log(res.data);
  //   });
  // });

  return (
    <Container>
      <Table striped bordered hover />
      <thead>
        <tr>
          <th>#</th>
          <th>Ticker One</th>
          <th>Ticker Two</th>
          <th>Correlation Coeffecient</th>
        </tr>
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
    </Container>
  );
}

export default GivenPairs;
