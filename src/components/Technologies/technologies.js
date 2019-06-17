import React, { Component } from "react";
import styles from "./Technologies.module.css";
import { Link } from "react-router-dom";

class Technologies extends Component {

  render() {
    let generateContent = this.props.technologies.map(item => {
      return (
        <div className={styles.techlist} key={item.id} >
          <span className={styles.techitem}>{item.title}</span>
          <span className={styles.techitem}>{item.profiles.length}</span>
          <Link to={`/home/technologies/${item.id}`}>View </Link>
        </div>
      );
    });
    console.log(this.props);
    return (
      <div>
        <div>{generateContent}</div>
      </div>
    );
  }
}

export default Technologies;
