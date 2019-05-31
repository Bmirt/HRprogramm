import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./keepMeSignedIn.module.css";

export default class keepMeSignedIn extends Component {
  state = {
    isCheked: true
  };
  changeCheckBoxState = () => {
    this.setState({
      isCheked: !this.state.isCheked
    });
  };
  render() {
    return (
      <div className={styles.container}>
        <span>
          <label className={styles.checkBoxContainer}>
            <input
              onClick={this.changeCheckBoxState}
              className={styles.containerInput}
              type="checkbox"
              checked={this.state.isCheked}
            />
            <span className={styles.checkmark} />
          </label>
          Keep me signed in
        </span>
        <Link to="/reset-password">
          <span>Forgot Password</span>
        </Link>
      </div>
    );
  }
}
