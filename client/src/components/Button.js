import React from "react";

function Button(props) {
  return (
    <div className={props.className}>
      <button name={props.name} onClick={props.onClick}>
        {props.name}
      </button>
    </div>
  );
}

export default Button;
