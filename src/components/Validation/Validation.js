import React, { Component } from "react";
import styles from "./validation.module.css";
export default class Validation extends Component {
  render() {
    return <span className={styles.errorMessage}>{this.props.value}</span>;
  }
}
