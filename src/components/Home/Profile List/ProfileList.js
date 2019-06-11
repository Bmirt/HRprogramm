import React, { Component } from "react";
import styles from "./ProfileList.module.css";
import searchIcon from "../../../images/searchIcon.png";
import SmartTable from "../SmartTable/SmartTable";

import { fetchProfiles } from "../../../actions/profileListActions";
import Pagination from "../../pagination/Pagination";
import { paginate } from "../../../utils/paginate";

export default class Home extends Component {
  state = {
    pageSize: 2,
    currentPage: 1,
    columnHeaders: [
      "Name, Surname",
      "Phone",
      "Current Position",
      "Profile",
      "Portfolio",
      "Technologies",
      "English",
      "Salary Expectation",
      "Source",
      "Status",
      "Projects"
    ],
    rows: []
  };
  fetchingProfiles = () => {
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
        let myrows = [];
        this.props.state.profileListReducer.profiles.map(candidate => {
          myrows.push({
            "Name, Surname": candidate.name || "-",
            Phone: candidate.phone || "-",
            "Current Position": candidate.phone || "-",
            Profile: candidate.profile || "-",
            Portfolio: candidate.portfolio || "-",
            Technologies: "ver vipove",
            English: candidate.english || "-",
            "Salary Expectation": candidate.salary || "-",
            Source: candidate.source || "-",
            Status: candidate.status || "-",
            Projects: "proeqtebi"
          });
        });
        this.setState({ rows: myrows });
      })
      .catch(error => error);
  };
  componentDidMount() {
    this.fetchingProfiles();
  }
  profilesFilterer = e => {
    console.log(e.target.value);
    if (!e.target.value) {
      this.fetchingProfiles();
    } else {
      const filtered = this.props.state.profileListReducer.profiles.filter(
        profile => {
          return profile.name
            .trim()
            .toLowerCase()
            .includes(e.target.value.toLowerCase().trim());
        }
      );

      this.props.filteredProfiles(filtered);
      let myrows = [];
      filtered.map(candidate => {
        myrows.push({
          "Name, Surname": candidate.name || "-",
          Phone: candidate.phone || "-",
          "Current Position": candidate.phone || "-",
          Profile: candidate.profile || "-",
          Portfolio: candidate.portfolio || "-",
          Technologies: "ver vipove",
          English: candidate.english || "-",
          "Salary Expectation": candidate.salary || "-",
          Source: candidate.source || "-",
          Status: candidate.status || "-",
          Projects: "proeqtebi"
        });
      });
      this.setState({ rows: myrows, currentPage: 1 });
    }
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  render() {
    const profiles = paginate(
      this.state.rows,
      this.state.currentPage,
      this.state.pageSize
    );
    if (this.state.rows.length)
      return (
        <div className={styles.container}>
          <div className={styles.search}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search..."
              onChange={e => this.profilesFilterer(e)}
            />
            <button>
              <img src={searchIcon} alt="search" />
            </button>
          </div>
          {/* <table>
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
          {profiles.map(candidate => {
            return (
              <tbody key={candidate.id}>
                <tr>
                  <td>{candidate.name || "-"}</td>
                  <td>{candidate.phone || "-"}</td>
                  <td>{candidate.position || "-"}</td>
                  <td>{candidate.profile || "-"}</td>
                  <td>{candidate.portfolio || "-"}</td>
                  <td>ver vipove</td>
                  <td>{candidate.english || "-"}</td>
                  <td>{candidate.salary || "-"}</td>
                  <td>{candidate.source || "-"}</td>
                  <td>{candidate.status || "-"}</td>
                  <td>proeqtebi</td>
                </tr>
              </tbody>
            );
          })}
        </table> */}
          <SmartTable
            columnHeaders={this.state.columnHeaders}
            rows={profiles}
          />
          <Pagination
            itemsCount={this.props.state.profileListReducer.profiles.length}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      );
    return (
      <div className={styles.container}>
        <div className={styles.search}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search..."
            onChange={e => this.profilesFilterer(e)}
          />
          <button>
            <img src={searchIcon} alt="search" />
          </button>
        </div>
      </div>
    );
  }
}
