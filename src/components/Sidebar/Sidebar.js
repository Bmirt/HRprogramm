import React, { Component } from "react";
import styles from "./Sidebar.module.css";
import menuIcon from '../../images/menuIcon.png'
import profilesIcon from '../../images/profilesIcon.png'
import projectsIcon from '../../images/projectsIcon.png'
import analyticsIcon from '../../images/analyticsIcon.png'
import calendarIcon from '../../images/calendarIcon.png'
import blackListIcon from '../../images/blackListIcon.png'
import userManagmentIcon from '../../images/userManagmentIcon.png'

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
  changeActiveFunction = button => {
    this.props.changeActive(button)
  }
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
            <li onClick={() => this.changeActiveFunction(0)}>
              <button className={styles.menuBtn}>
                <img src={profilesIcon} className={styles.sidebarIcon} alt='profile list'/>
              </button>
              Profile List
            </li>
            <li onClick={() => this.changeActiveFunction(1)}>
            <button className={styles.menuBtn}>
              <img src={projectsIcon} className={styles.sidebarIcon} alt='projects'/>
            </button>
              Projects
            </li>
            <li onClick={() => this.changeActiveFunction(2)}>
              <button className={styles.menuBtn}>
                <img src={analyticsIcon} className={styles.sidebarIcon} alt='analytics'/>
              </button>
              Analytics
            </li>
            <li onClick={() => this.changeActiveFunction(3)}>
              <button className={styles.menuBtn}>
                <img src={calendarIcon} className={styles.sidebarIcon} alt='calendar'/>
              </button>
              Calendar
            </li>
            <li onClick={() => this.changeActiveFunction(4)}>
              <button className={styles.menuBtn}>
                <img src={blackListIcon} className={styles.sidebarIcon} alt='black list'/>
              </button>
              Black List
            </li>
            <li onClick={() => this.changeActiveFunction(5)}>
              <button className={styles.menuBtn}>
                <img src={userManagmentIcon} className={styles.sidebarIcon} alt='user managment'/>
              </button>
              User Managment
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
