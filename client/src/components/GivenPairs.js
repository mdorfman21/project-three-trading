import React, { useState, useEffect } from "react";
import API from "../Utils/API";

function GivenPairs(props) {
  const [givenPairs, setGivenPairs] = useState([]);

  useEffect(() => {
    API.getGivenPairs().then(res => {
      setGivenPairs(res.data);
    });
  });

  return givenPairs.map(pair => (
    <div>
      <h6>
        These pairs, {pair.symbolGroup[0]} and {pair.symbolGroup[1]} have a
        correlation of {Number(pair.correlations).toFixed(2)}
      </h6>
    </div>
  ));
}

export default GivenPairs;
