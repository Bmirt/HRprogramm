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
        type="submit"
        onClick={() => this.props.event}
        className={buttonClass(this.props.buttonClass)}
      >
        {this.props.value}
      </button>
    );
  }
}
