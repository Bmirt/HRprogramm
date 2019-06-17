import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import menuIcon from "../../images/menuIcon.png";
import profilesIcon from "../../images/profilesIcon.png";
import profilesIconBlue from "../../images/profilesIconBlue.png";
import projectsIcon from "../../images/projectsIcon.png";
import projectsIconBlue from "../../images/projectsIconBlue.png";
import analyticsIcon from "../../images/analyticsIcon.png";
import analyticsIconBlue from "../../images/analyticsIconBlue.png";
import calendarIcon from "../../images/calendarIcon.png";
import calendarIconBlue from "../../images/calendarIconBlue.png";
import blackListIcon from "../../images/blackListIcon.png";
import blackListIconBlue from "../../images/blackListIconBlue.png";
import userManagementIcon from "../../images/userManagementIcon.png";
import userManagementIconBlue from "../../images/userManagementIconBlue.png";
import technologiesIcon from "../../images/technologiesIcon.png";
import technologiesIconBlue from "../../images/technologiesIconBlue.png";

export class Sidebar extends Component {
  state = {
    open: JSON.parse(localStorage.getItem("sidebarState")),
    sidebarItems: [
      {
        title: "Profile List",
        path: "profile_list",
        icon: profilesIcon,
        iconBlue: profilesIconBlue
      },
      {
        title: "Projects",
        path: "projects",
        icon: projectsIcon,
        iconBlue: projectsIconBlue
      },
      {
        title: "analytics",
        path: "analytics",
        icon: analyticsIcon,
        iconBlue: analyticsIconBlue
      },
      {
        title: "Calendar",
        path: "calendar",
        icon: calendarIcon,
        iconBlue: calendarIconBlue
      },
      {
        title: "Black List",
        path: "black_list",
        icon: blackListIcon,
        iconBlue: blackListIconBlue
      },
      {
        title: "User Management",
        path: "user_management",
        icon: userManagementIcon,
        iconBlue: userManagementIconBlue
      },
      {
        title: "Technologies",
        path: "technologies",
        icon: technologiesIcon,
        iconBlue: technologiesIconBlue
      }
    ]
  };
  handleClick = () => {
    this.setState({ open: !this.state.open });
    localStorage.setItem("sidebarState", !this.state.open);
  };
  generateContent() {
    const currentUrl = window.location.pathname;
    const sidebarStyles = this.state.open ? styles.sidebarOpen : styles.sidebar;
    const isVisible = this.state.open ? styles.visible : styles.invisible;

    let sidebarItems = this.state.sidebarItems.map(item => {
      let itemClass = styles.smth;
      let itemIcon = item.icon;
      if (window.location.pathname === "/home/" + item.path) {
        itemClass = styles.chosen;
        itemIcon = item.iconBlue;
      }
      return (
        <li key={item.path} className={styles.itemClass}>
          <span className={styles.tooltip}>{item.title}</span>
          <Link to={`/home/${item.path}`}>
            <button className={styles.menuBtn}>
              <img
                src={itemIcon}
                className={styles.sidebarIcon}
                alt={item.title}
              />
            </button>
            <span className={isVisible}>{item.title}</span>
          </Link>
        </li>
      );
    });
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
          {sidebarItems}

          <span className={styles.divider} />
          <span className={styles.versionText}>V.1.0.1</span>
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.sidebarComponent}>{this.generateContent()}</div>
    );
  }
}

export default withRouter(Sidebar);
