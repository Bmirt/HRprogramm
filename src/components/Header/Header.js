import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../images/logo.png";
import signOut from "../../images/signOutIcon.png";
import auth from "../../auth/auth";

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <img src={logo} className={styles.logo} title="logo" alt="logo" />
        </div>
        <div className={styles.headerLists}>
          <ul>
            <li>Hi, Lika Zuroshvili</li>
            <li>
              <button
                onClick={() => auth.logout(() => this.props.history.push("/"))}
              >
                <img className={styles.icon} src={signOut} alt="sign out" />
              </button>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
