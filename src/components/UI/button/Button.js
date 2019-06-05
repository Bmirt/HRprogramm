import React, { Component } from "react";
import styles from "./Button.module.css";
export default class Button extends Component {
  render() {
    function buttonClass(temp) {
      switch (temp) {
        case "submit":
          return `${styles.buttonSubmit}`;
        case "change":
          return `${styles.buttonChange}`;
        case "delete":
          return `${styles.buttonDelete}`;
        default:
          return styles.buttonSubmit;
      }
    }
    return (
      <button
        onClick={this.props.function}
        className={buttonClass(this.props.buttonClass)}
        type={this.props.buttonType}
      >
        {this.props.value}
      </button>
    );
  }
}
