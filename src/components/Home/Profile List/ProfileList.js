import React, { Component } from "react";
import styles from "./ProfileList.module.css";
import { fetchProfiles } from "../../../actions/profileListActions";

export default class Home extends Component {
  componentDidMount() {
    console.log(fetchProfiles);
  }
  render() {
    return <div className={styles.container}>Hello</div>;
  }
}
