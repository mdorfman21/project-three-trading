import React from "react";

function StockInfo(props) {
  return (
    <span>
      <h4>
        {props.name} : {props.value}
      </h4>
    </span>
  );
}

export default StockInfo;
