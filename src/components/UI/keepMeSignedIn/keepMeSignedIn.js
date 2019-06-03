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
        <div className={styles.checkBoxContainer}>
          <input
            onClick={this.changeCheckBoxState}
            className={styles.containerInput}
            type="checkbox"
            checked={this.state.isCheked}
          />
          <span className={styles.text}>Keep me Logged In</span>
        </div>
        <div>
          <Link to="/reset-password" className={styles.link}>
            <span>Forgot Password?</span>{" "}
          </Link>
        </div>
      </div>
    );
  }
}
