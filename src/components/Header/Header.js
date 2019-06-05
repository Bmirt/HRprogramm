import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from '../../TecHR.jpg'
import signOut from '../../signOutIcon.png'

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <img src={logo} className={styles.logo}></img>
        </div>
        <div className={styles.headerLists}>
          <ul>
            <li>Hi, Lika Zuroshvili</li>
            <li><button><img className={styles.icon} src={signOut}></img></button></li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
