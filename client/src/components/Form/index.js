import React from "react";

export function Input(props) {
  return (
    <div>
      <input
        onChange={props.onInputChange}
        name="search"
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
}

export function FormBtn(props) {
  return <button {...props}>{props.children}</button>;
}
