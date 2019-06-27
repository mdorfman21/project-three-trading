import React from "react";

function Button(props) {
  return (
    <div>
      <button
        type="button"
        class={props.className}
        name={props.name}
        onClick={props.onClick}
      >
        {props.name}
      </button>
    </div>
  );
}

export default Button;
