import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

export class Sidebar extends Component {
  state = {
    open: true
  };
  handleClick = e => {
    if (this.state.open) {
      this.setState({ ...this.state, open: false });
    } else {
      this.setState({ ...this.state, open: true });
    }
  };
  generateContent() {
    if (this.state.open) {
      return (
        <div>
          <div className={styles.btnOpen}>
            <button
              className={styles.toggleExpandBtn}
              onClick={this.handleClick}
            >
              {'<'}
            </button>
          </div>
          <ul className={styles.sidebarOpen}>
            <li>
              <NavLink exact to="/">
                Profile List
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/Analytics">Analytics</NavLink>
            </li>
            <li>
              <NavLink to="/Calendar">Calendar</NavLink>
            </li>
            <li>
              <NavLink to="/BlackList">Black List</NavLink>
            </li>
            <li>
              <NavLink to="/UserManagment">User Managment</NavLink>
            </li>
            <span>V.1.0.1</span>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <button className={styles.toggleExpandBtn} onClick={this.handleClick}>
            >
          </button>
        </div>
      );
    }
  }

  render() {
    console.log(this.state.open);
    console.log(this.content);
    return <div className={styles.sidebar}>{this.generateContent()}</div>;
  }
}

export default Sidebar;
