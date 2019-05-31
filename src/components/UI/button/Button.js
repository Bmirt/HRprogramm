import React, { Component } from "react";
import styles from "./Button.module.css";
export default class Button extends Component {
  render() {
    function buttonClass(temp) {
      let btn = styles.btn;
      switch (temp) {
        case "submit":
          return `${btn} ${styles.buttonSubmit}`;
        case "change":
          return `${btn} ${styles.buttonChange}`;
        case "delete":
          return `${btn} ${styles.buttonDelete}`;
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
