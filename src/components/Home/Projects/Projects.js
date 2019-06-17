import React, { Component } from "react";
import styles from "./Projects.module.css";
import { Link } from "react-router-dom";

export default class Home extends Component {

  render() {
    console.log(this.state);
    let generateContent = this.props.projects.map(item => {
      return (
        <div className={styles.projecthlist} key={item.id}>
          <span className={styles.projectitem}>{item.title}</span>
          <Link to={`/home/projects/${item.id}`}>
            <button>View</button>{" "}
          </Link>
        </div>
      );
    });
    console.log(this.state);
    return (
      <div className={styles.container}>
        <div>
          <div>{generateContent}</div>
        </div>
      </div>
    );
  }
}
