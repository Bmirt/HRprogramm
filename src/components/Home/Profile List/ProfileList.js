import React, { Component } from "react";
import styles from "./ProfileList.module.css";
import searchIcon from "../../../images/searchIcon.png";
import SmartTable from "../SmartTable/SmartTable"

import { fetchProfiles } from "../../../actions/profileListActions";
// import { ClientHttp2Session } from "http2";

export default class Home extends Component {
  state = {
    columnHeaders: ['Name, Surname','Phone','Current Position','Profile','Portfolio','Technologies','English','Salary Expectation','Source','Status','Projects'],
    rows: []
  }
  componentDidMount() {
    let token = localStorage.getItem("token");
    const { dispatch } = this.props;
    fetch("http://laravel.local/api/all-profiles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    })
      .then(response => response.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchProfiles(res.profiles));
        return res.products;
      })
      .then(() => {
        let myrows = []
        this.props.state.profileListReducer.profiles.map(candidate => {
          myrows.push({ 'Name, Surname': candidate.name || "-",
                      'Phone': candidate.phone || "-",
                      'Current Position': candidate.phone || "-",
                      'Profile': candidate.profile || "-",
                      'Portfolio': candidate.portfolio || "-",
                      'Technologies': 'ver vipove',
                      'English': candidate.english || "-",
                      'Salary Expectation': candidate.salary || "-",
                      'Source': candidate.source || "-",
                      'Status': candidate.status || "-",
                      'Projects': 'proeqtebi'
                    })

        })
        this.setState({rows: myrows})
        console.log(this.state.rows)
      })
      .catch(error => error);
  }

  render() {
    console.log(this.state.rows);
    if(this.state.rows.length)
    return (
      <div className={styles.container}>
        <div className={styles.search}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search..."
          />
          <button>
            <img src={searchIcon} alt="search" />
          </button>
        </div>
        <SmartTable columnHeaders={this.state.columnHeaders} rows={this.state.rows}/>
      </div>
    );
    return(
      <div></div>
    )
  }
}
