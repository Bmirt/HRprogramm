import React, { Component } from "react";
import Classes from "./Input.module.css";
import Validation from "../../Validation/Validation";
export class Input extends Component {
  render() {
    return (
      <div style={{ position: "relative" }}>
        <input
          onChange={this.props.event}
          placeholder={this.props.placeholder}
          type={this.props.type}
          name={this.props.name}
          className={Classes.input_error}
        />
        <Validation error={this.props.error} />
      </div>
    );
  }
}

export default Input;
