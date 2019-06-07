import React, { Component } from "react";
import ProfileList from "./Profile List/ProfileList";
import styles from './Home.module.css'
export default class Home extends Component {
  render() {
    return <div className={styles.homeContent}><ProfileList /></div>;
  }
}
