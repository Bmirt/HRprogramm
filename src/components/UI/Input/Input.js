import React, { Component } from "react";
import Classes from "./Input.module.css";
export class Input extends Component {
  render() {
    const styles = this.props.error ? Classes.input_error : Classes.input;
    return (
      <div>
        <input
          onChange={this.props.event}
          placeholder={this.props.placeholder}
          type={this.props.type}
          name={this.props.name}
          className={styles}
          minLength={this.props.minlength}
          maxLength={this.props.maxlength}
          required={this.props.required}
        />
      </div>
    );
  }
}

export default Input;
