import React, { Component } from "react";
import ProfileListContainer from "../../containers/ProfileListContainer";
import styles from './Home.module.css'
export default class Home extends Component {
  render() {
    return <div className={styles.homeContent}><ProfileListContainer /></div>;
  }
}
