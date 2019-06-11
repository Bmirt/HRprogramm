import React, { Component } from "react";
import styles from "./ProfileList.module.css";
import searchIcon from "../../../images/searchIcon.png";
import { fetchProfiles } from "../../../actions/profileListActions";
import Pagination from "../../pagination/Pagination";
import { paginate } from "../../../utils/paginate";

export default class Home extends Component {
  state = {
    pageSize: 2,
    currentPage: 1
  };

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
        console.log("this is me", res.profiles);
        dispatch(fetchProfiles(res.profiles));
        return res.products;
      })
      .then(() => {})
      .catch(error => error);
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  render() {
    console.log(
      this.props.state.profileListReducer.profiles,
      this.state.currentPage,
      this.state.pageSize
    );
    const profiles = paginate(
      this.props.state.profileListReducer.profiles,
      this.state.currentPage,
      this.state.pageSize
    );
    console.log("profiles", profiles);
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
        </table>
        <Pagination
          itemsCount={this.props.state.profileListReducer.profiles.length}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}
