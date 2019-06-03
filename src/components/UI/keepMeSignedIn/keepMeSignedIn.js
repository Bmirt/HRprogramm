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
      <div className={styles.mamaContainer}>
        <div className={styles.container}>
          <span>
            <label className={styles.checkBoxContainer}>
              <input
                onClick={this.props.functionCheck()}
                className={styles.containerInput}
                type="checkbox"
                checked={this.props.cheked}
              />
              <span className={styles.checkmark} />
            </label>
            Keep me signed in
          </span>
          <Link to="/reset-password">
            <span>Forgot Password</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default keepMeSignedIn;
