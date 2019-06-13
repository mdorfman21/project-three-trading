import React from "react";
import Correlate from "../../Utils/correlation_function";
import Form from "../../components/Form/index";

class Pairs extends React.Component {
  state = { stockOne: "", stockTwo: "" };

  onInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  };
}
