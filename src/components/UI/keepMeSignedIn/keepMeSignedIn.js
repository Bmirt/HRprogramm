import React, { Component } from "react";
import { Link } from "react-router-dom";
import Checkbox from "../Checkbox/Checkbox";
import styles from "./keepMeSignedIn.module.css";

class keepMeSignedIn extends Component {
  render() {
    console.log(this.props.checked);
    return (
      <div className={styles.container}>
        <div className={styles.checkBoxContainer}>
          <Checkbox
            checked={this.props.checked}
            handleClick={this.props.functionCheck()}
          />
          <span className={styles.text}>Keep me Logged In</span>
        </div>
        <div>
          <Link to="/forgot-password" className={styles.link}>
            <span>Forgot Password?</span>{" "}
          </Link>
        </div>
      </div>
    );
  }
}

export default keepMeSignedIn;
