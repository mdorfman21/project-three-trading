import React from "react";

function Form(props) {
  return (
    <div>
      <input
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Form;
