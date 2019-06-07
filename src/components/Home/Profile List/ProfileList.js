import React, { Component } from "react";
import styles from "./ProfileList.module.css";


export default class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <table>
          <tbody>
            <tr>
              <th>Name, Surname</th>
              <th>Phone</th> 
              <th>Current Position</th>
              <th>Profile</th>
              <th>Portfolio</th> 
              <th>Technologies</th> 
              <th>English</th> 
              <th>Salary Expectation</th> 
              <th>Source</th> 
              <th>Status</th> 
              <th>Projects</th> 
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Jill</td>
              <td>Smith</td> 
              <td>50</td>
              <td>Jill</td>
              <td>Smith</td> 
              <td>50</td>
              <td>Jill</td>
              <td>Smith</td> 
              <td>50</td>
              <td>Jill</td>
              <td>Smith</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
