import React from "react";

function Button(props) {
  return (
    <div>
      <button type="button" class="btn btn-outline-light" name={props.name} onClick={props.onClick}>
        {props.name}
      </button>
    </div>
  );
}

export default Button;
