import React, { Component } from "react";
import styles from "./ProfileList.module.css";
import searchIcon from "../../../images/searchIcon.png";
import Modal from "../../Modal/Modal";
import Backdrop from "../../Backdrop/Backdrop";
import SmartTable from "../SmartTable/SmartTable";
import FilterIcon from "../../../images/filterIcon.png";
import { fetchProfiles } from "../../../actions/profileListActions";
import Pagination from "../../pagination/Pagination";
import { paginate } from "../../../utils/paginate";
import ExportFile from "../../ExportFile/ExportFile";
export default class Home extends Component {
  state = {
    pageSize: 2,
    creating: false,
    drawFilter: false,
    name: "",
    phone: "",
    position: "",
    profile: "",
    portfolio: "",
    comment: "",
    english: "",
    salary: "",
    status: "",
    projects: [],
    technologies: "",
    currentPage: 1,
    columnHeaders: [
      "Name",
      "Phone",
      "Position",
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
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };

  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };
  modalConfirmHandler = () => {
    this.setState({ creating: false });
  };
  modalCancelHandler = () => {
    this.setState({ creating: false });
  };
  drawFilter = () => {
    this.setState({ drawFilter: !this.state.drawFilter }, () =>
      console.log(this.state.drawFilter)
    );
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
            Name: candidate.name || "-",
            Phone: candidate.phone || "-",
            Position: candidate.phone || "-",
            Profile: candidate.profile || "-",
            Portfolio: candidate.portfolio || "-",
            Technologies: candidate.technologies.reduce(
              (acc, technology) => acc + "#" + technology.title + " ",
              ""
            ),
            English: candidate.english || "-",
            "Salary Expectation": candidate.salary || "-",
            Source: candidate.source || "-",
            Status: candidate.status || "-",
            Projects: candidate.projects.reduce(
              (acc, project) => acc + "#" + project.title + " ",
              ""
            )
          });
          return 0;
        });
        this.setState({ rows: myrows });
        console.log(myrows);
      })
      .catch(error => error);
  };
  componentDidMount() {
    this.fetchingProfiles();
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const profiles = paginate(
      this.state.rows,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.search}>
            <input
              disabled={!this.state.rows.length}
              type="text"
              className={styles.searchInput}
              placeholder="Search..."
              onChange={e => this.profilesFilterer(e)}
            />
            <button>
              <img src={searchIcon} alt="search" />
            </button>
          </div>
          <div className={styles.buttonContainer}>
            <div>
              <button
                className={styles.addcandidate}
                onClick={this.startCreateEventHandler}
              >
                <img src="" />
                Create Profile
              </button>
            </div>
            <div className={styles.profilesListBtnRight}>
              <ExportFile />
              <button
                onClick={this.drawFilter}
                className={styles.profilesListBtn}
                disabled={!this.state.rows.length}
              >
                <img src={FilterIcon} className={styles.btnIcon} />
                <span>Filter</span>
              </button>
            </div>
          </div>
          <div className={styles.profilesTable}>
            <SmartTable
              columnHeaders={this.state.columnHeaders}
              rows={profiles}
            />
          </div>
          <Pagination
            itemsCount={this.props.state.profileListReducer.profiles.length}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
        {this.state.creating && <Backdrop />}
        {this.state.creating && (
          <Modal
            title="Add Candidate"
            canCancel
            canConfirm
            onCancel={this.modalCancelHandler}
            onConfirm={this.modalConfirmHandler}
          >
            <form>
              <div className="form-control">
                <label htmlFor="name">Name,Surname</label>
                <input type="text" name="name" onChange={this.handleChange} />
              </div>
              <div className="form-control">
                <label htmlFor="phone">Phone</label>
                <input
                  type="number"
                  name="phone"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-control">
                <label htmlFor="Current_position">Current Position</label>
                <input
                  type="text"
                  name="position"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-control">
                <label htmlFor="profile">Profile</label>
                <input
                  type="email"
                  name="profile"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-control">
                <label htmlFor="portfolio">Portfolio</label>
                <input
                  type="text"
                  name="portfolio"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-control">
                <label htmlFor="Comment">Comment</label>
                <input
                  type="text"
                  name="Comment"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-control">
                <label htmlFor="English">English</label>
                <input type="text" name="English" />
              </div>
              <div className="form-control">
                <label htmlFor="Salary_Expectation">Salary Expectation</label>
                <input type="text" name="salary" onChange={this.handleChange} />
              </div>
              <div className="form-control">
                <label htmlFor="source">Source</label>
                <input type="text" name="source" onChange={this.handleChange} />
              </div>
              <div className="form-control">
                <label htmlFor="status">Status</label>
                <input type="text" name="status" onChange={this.handleChange} />
              </div>
              <div className="form-control">
                <label htmlFor="projects">Projects</label>
                <input
                  type="text"
                  name="projects"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-control">
                <label htmlFor="Technologies">Technologies</label>
                <input
                  type="text"
                  name="technologies"
                  onChange={this.handleChange}
                />
              </div>
            </form>
          </Modal>
        )}
      </div>
    );
  }
}
