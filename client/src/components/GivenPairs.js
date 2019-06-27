import React, { useState, useEffect } from "react";
import API from "../Utils/API";
import { Container, Row, Col, Table } from "react-bootstrap/";
import "./GivenPairs.css";

function GivenPairs() {
  const [givenPairs, setGivenPairs] = useState([]);

  useEffect(() => {
    API.getGivenPairs().then(res => {
      setGivenPairs(res.data);
    });
  });

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
            <td>{index}</td>
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
