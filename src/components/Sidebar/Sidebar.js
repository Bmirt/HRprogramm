import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import menuIcon from "../../images/menuIcon.png";
import profilesIcon from "../../images/profilesIcon.png";
import projectsIcon from "../../images/projectsIcon.png";
import analyticsIcon from "../../images/analyticsIcon.png";
import calendarIcon from "../../images/calendarIcon.png";
import blackListIcon from "../../images/blackListIcon.png";
import userManagmentIcon from "../../images/userManagmentIcon.png";

export class Sidebar extends Component {
  state = {
    open: JSON.parse(localStorage.getItem("sidebarState"))
  };
  handleClick = () => {
    this.setState({ open: !this.state.open });
    localStorage.setItem("sidebarState", !this.state.open);
  };
  changeActiveFunction = link => {
    this.props.history.push(`/home/${link}`);
  };
  generateContent() {
    const sidebarStyles = this.state.open ? styles.sidebarOpen : styles.sidebar;
    const isVisible = this.state.open ? styles.visible : styles.invisible;
    return (
      <div className={sidebarStyles}>
        <ul>
          <li>
            <button
              className={styles.menuBtn + " " + styles.sidebarBtn}
              onClick={this.handleClick}
            >
              <img src={menuIcon} className={styles.sidebarIcon} alt="menu" />
            </button>
          </li>
          <li>
            <Link to="profile_list">
              <button className={styles.menuBtn}>
                <img
                  src={profilesIcon}
                  className={styles.sidebarIcon}
                  alt="profile list"
                />
              </button>
              <span className={isVisible}>Profile List</span>
            </Link>
          </li>
          <li>
            <Link to="projects">
              <button className={styles.menuBtn}>
                <img
                  src={projectsIcon}
                  className={styles.sidebarIcon}
                  alt="projects"
                />
              </button>
              <span className={isVisible}>Projects</span>
            </Link>
          </li>
          <li>
            <Link to="analytics">
              <button className={styles.menuBtn}>
                <img
                  src={analyticsIcon}
                  className={styles.sidebarIcon}
                  alt="analytics"
                />
              </button>
              <span className={isVisible}>Analytics</span>
            </Link>
          </li>
          <li>
            <Link to="calendar">
              <button className={styles.menuBtn}>
                <img
                  src={calendarIcon}
                  className={styles.sidebarIcon}
                  alt="calendar"
                />
              </button>
              <span className={isVisible}>Calendar</span>
            </Link>
          </li>
          <li>
            <Link to="black_list">
              <button className={styles.menuBtn}>
                <img
                  src={blackListIcon}
                  className={styles.sidebarIcon}
                  alt="black list"
                />
              </button>
              <span className={isVisible}>Black List</span>
            </Link>
          </li>
          <li>
            <Link to="user_management">
              <button className={styles.menuBtn}>
                <img
                  src={userManagmentIcon}
                  className={styles.sidebarIcon}
                  alt="user managment"
                />
              </button>
              <span className={isVisible}>User Managment</span>
            </Link>
          </li>
          <span className={styles.divider} />
          <span className={styles.versionText}>V.1.0.1</span>
        </ul>
      </div>
    );
  }

  render() {
    console.log(this.state.array);
    return (
      <div className={styles.sidebarComponent}>{this.generateContent()}</div>
    );
  }
}

export default withRouter(Sidebar);
