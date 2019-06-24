import React from "react";

function GivenPairs(props) {
  return (
    <div>
      <h6>
        These pairs, {props.stockOne} and {props.stockTwo} have a correlation of{" "}
        {props.correlations}
      </h6>
    </div>
  );
}

export default GivenPairs;
