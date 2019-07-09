import React from "react";

function StockInfo(props) {
  return (
    <span>
      <h6>
        {props.name} : {props.value}
      </h6>
    </span>
  );
}

export default StockInfo;
