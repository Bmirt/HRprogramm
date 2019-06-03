import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./keepMeSignedIn.module.css";

class keepMeSignedIn extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={styles.container}>
        <div className={styles.checkBoxContainer}>
          <input
            onChange={this.props.functionCheck()}
            className={styles.containerInput}
            type="checkbox"
            checked={this.props.checked}
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

export default keepMeSignedIn;
