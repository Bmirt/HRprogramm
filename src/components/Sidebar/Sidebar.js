import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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
    open: false
  };
  handleClick = e => {
    if (this.state.open) {
      this.setState({ ...this.state, open: false });
    } else {
      this.setState({ ...this.state, open: true });
    }
  };
  changeActiveFunction = link => {
    this.props.history.push(`/home/${link}`);
  };
  generateContent() {
    if (this.state.open) {
      return (
        <div className={styles.sidebarOpen}>
          <ul>
            <li>
              <button
                className={styles.menuBtn + " " + styles.sidebarBtn}
                onClick={this.handleClick}
              >
                <img src={menuIcon} className={styles.sidebarIcon} alt="menu" />
              </button>
            </li>
            <li onClick={() => this.changeActiveFunction("profile_list")}>
              <button className={styles.menuBtn}>
                <img
                  src={profilesIcon}
                  className={styles.sidebarIcon}
                  alt="profile list"
                />
              </button>
              <span>Profile List</span>
            </li>
            <li onClick={() => this.changeActiveFunction("projects")}>
              <button className={styles.menuBtn}>
                <img
                  src={projectsIcon}
                  className={styles.sidebarIcon}
                  alt="projects"
                />
              </button>
              <span>Projects</span>
            </li>
            <li onClick={() => this.changeActiveFunction("analytics")}>
              <button className={styles.menuBtn}>
                <img
                  src={analyticsIcon}
                  className={styles.sidebarIcon}
                  alt="analytics"
                />
              </button>
              <span>Analytics</span>
            </li>
            <li onClick={() => this.changeActiveFunction("calendar")}>
              <button className={styles.menuBtn}>
                <img
                  src={calendarIcon}
                  className={styles.sidebarIcon}
                  alt="calendar"
                />
              </button>
              <span>Calendar</span>
            </li>
            <li onClick={() => this.changeActiveFunction("black_list")}>
              <button className={styles.menuBtn}>
                <img
                  src={blackListIcon}
                  className={styles.sidebarIcon}
                  alt="black list"
                />
              </button>
              <span>Black List</span>
            </li>
            <li onClick={() => this.changeActiveFunction("user_management")}>
              <button className={styles.menuBtn}>
                <img
                  src={userManagmentIcon}
                  className={styles.sidebarIcon}
                  alt="user managment"
                />
              </button>
              <span>User Managment</span>
            </li>
            <span className={styles.versionText}>V.1.0.1</span>
          </ul>
        </div>
      );
    } else {
      return (
        <div className={styles.sidebar}>
          <button
            className={styles.menuBtn + " " + styles.sidebarBtn}
            onClick={this.handleClick}
          >
            <img src={menuIcon} className={styles.sidebarIcon} alt="menu" />
          </button>
          <button className={styles.menuBtn}>
            <img
              src={profilesIcon}
              className={styles.sidebarIcon}
              alt="profile list"
            />
          </button>
          <button className={styles.menuBtn}>
            <img
              src={projectsIcon}
              className={styles.sidebarIcon}
              alt="projects"
            />
          </button>
          <button className={styles.menuBtn}>
            <img
              src={analyticsIcon}
              className={styles.sidebarIcon}
              alt="analytics"
            />
          </button>
          <button className={styles.menuBtn}>
            <img
              src={calendarIcon}
              className={styles.sidebarIcon}
              alt="calendar"
            />
          </button>
          <button className={styles.menuBtn}>
            <img
              src={blackListIcon}
              className={styles.sidebarIcon}
              alt="black list"
            />
          </button>
          <button className={styles.menuBtn}>
            <img
              src={userManagmentIcon}
              className={styles.sidebarIcon}
              alt="user managment"
            />
          </button>
        </div>
      );
    }
  }

  render() {
    console.log(this.state.open);
    console.log(this.content);
    return (
      <div className={styles.sidebarComponent}>{this.generateContent()}</div>
    );
  }
}

export default withRouter(Sidebar);
