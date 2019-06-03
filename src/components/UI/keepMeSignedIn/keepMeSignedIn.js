import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./keepMeSignedIn.module.css";

class keepMeSignedIn extends Component {
  state = {
    isCheked: true
  };
  changeCheckBoxState = () => {
    this.setState({
      isCheked: !this.state.isCheked
    });
  };
  render() {
    console.log(this.props);
    return (
      <div className={styles.container}>
        <div className={styles.checkBoxContainer}>
          <input
            onClick={this.changeCheckBoxState}
            className={styles.containerInput}
            type="checkbox"
            checked={this.state.isCheked}
          />
          <span>Keep me Logged In</span>
        </div>
        <div>
          <Link to="/reset-password">
            <span className={styles.link}>Forgot Password?</span>{" "}
          </Link>
        </div>
      </div>
    );
  }
}

export default keepMeSignedIn;
