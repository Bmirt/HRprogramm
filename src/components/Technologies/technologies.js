import React, { Component } from "react";
import styles from "./Technologies.module.css";
import { Link } from "react-router-dom";

class Technologies extends Component {
  // state = {
  //   technologies: []
  // };
  // generateContent = <div>not found</div>;
  // componentDidMount() {
  //   const token = localStorage.getItem("token");
  //   fetch("http://laravel.local/api/get-technologies", {
  //     headers: {
  //       "Content-Type": "applcation/json",
  //       Authorization: token
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res);
  //       this.setState({
  //         technologies: res.technologies
  //       });
  //     });
  // }
  // remtech = () => {
  //   console.log(this.state.technologies);
  // };
  // edittech = () => {
  //   const input = prompt("Please enter a title");
  //   console.log(input);
  //   // console.log(name);
  //   console.log("edit");
  // };
  render() {
    // console.log(this.state);
    let generateContent = this.props.technologies.map(item => {
      return (
        <div className={styles.techlist}>
          <span className={styles.techitem}>{item.title}</span>
          <span className={styles.techitem}>{item.profiles.length}</span>
          {/* <button onClick={this.edittech}>Edit</button>
          <button onClick={this.remtech}>Remove</button> */}
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
