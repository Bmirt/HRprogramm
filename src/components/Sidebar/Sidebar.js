import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import menuIcon from '../../menuIcon.png'
import profilesIcon from '../../profilesIcon.png'
import projectsIcon from '../../projectsIcon.png'
import analyticsIcon from '../../analyticsIcon.png'
import calendarIcon from '../../calendarIcon.png'
import blackListIcon from '../../blackListIcon.png'
import userManagmentIcon from '../../userManagmentIcon.png'

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
  generateContent() {
    if (this.state.open) {
      return (
        <div className={styles.sidebarOpen}>
          <ul>
            <li>
              <button className={styles.menuBtn+' '+styles.sidebarBtn} onClick={this.handleClick}>
                  <img src={menuIcon} className={styles.sidebarIcon} alt='menu'/>
              </button>
            </li>
            <li>
              <button className={styles.menuBtn}>
                <img src={profilesIcon} className={styles.sidebarIcon} alt='profile list'/>
              </button>
              <NavLink exact to="/">Profile List</NavLink>
            </li>
            <li>
            <button className={styles.menuBtn}>
              <img src={projectsIcon} className={styles.sidebarIcon} alt='projects'/>
            </button>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <button className={styles.menuBtn}>
                <img src={analyticsIcon} className={styles.sidebarIcon} alt='analytics'/>
              </button>
              <NavLink to="/Analytics">Analytics</NavLink>
            </li>
            <li>
              <button className={styles.menuBtn}>
                <img src={calendarIcon} className={styles.sidebarIcon} alt='calendar'/>
              </button>
              <NavLink to="/Calendar">Calendar</NavLink>
            </li>
            <li>
              <button className={styles.menuBtn}>
                <img src={blackListIcon} className={styles.sidebarIcon} alt='black list'/>
              </button>
              <NavLink to="/BlackList">Black List</NavLink>
            </li>
            <li>
              <button className={styles.menuBtn}>
                <img src={userManagmentIcon} className={styles.sidebarIcon} alt='user managment'/>
              </button>
              <NavLink to="/UserManagment">User Managment</NavLink>
            </li>
            <span>V.1.0.1</span>
          </ul>
        </div>
      );
    } else {
      return (
        <div className={styles.sidebar}>
          <button className={styles.menuBtn+' '+styles.sidebarBtn} onClick={this.handleClick}>
            <img src={menuIcon} className={styles.sidebarIcon} alt='menu' />
          </button>
          <button className={styles.menuBtn}>
            <img src={profilesIcon} className={styles.sidebarIcon} alt='profile list' />
          </button>
          <button className={styles.menuBtn}>
            <img src={projectsIcon} className={styles.sidebarIcon} alt='projects' />
          </button>
          <button className={styles.menuBtn}>
            <img src={analyticsIcon} className={styles.sidebarIcon} alt='analytics' />
          </button>
          <button className={styles.menuBtn}>
            <img src={calendarIcon} className={styles.sidebarIcon} alt='calendar' />
          </button>
          <button className={styles.menuBtn}>
            <img src={blackListIcon} className={styles.sidebarIcon} alt='black list' />
          </button>
          <button className={styles.menuBtn}>
            <img src={userManagmentIcon} className={styles.sidebarIcon} alt='user managment' />
          </button>
        </div>
      );
    }
  }

  render() {
    console.log(this.state.open);
    console.log(this.content);
    return <div className={styles.sidebarComponent}>{this.generateContent()}</div>;
  }
}

export default Sidebar;
