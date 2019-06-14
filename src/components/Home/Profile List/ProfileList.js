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
import FilterWindow from "../FilterWindow/filterWindow";

export default class Home extends Component {
  state = {
    pageSize: 10,
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
    black_list: false,
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
    rows: [],
    technologies: [],
    projects: []
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
    this.setState({ drawFilter: !this.state.drawFilter });
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
            Position: candidate.position || "-",
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
            ),
            BlackList: candidate.black_list || 0,
            id: candidate.id || ""
          });
          return 0;
        });
        this.setState({ rows: myrows });
      })
      .catch(error => error);
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    this.fetchingProfiles();
    fetch("http://laravel.local/api/get-technologies", {
      headers: {
        "Content-Type": "applcation/json",
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(res =>
        this.setState({
          technologies: res.technologies.map(item => {
            return { value: item.title, label: item.title };
          })
        })
      );

    fetch("http://laravel.local/api/get-projects", {
      headers: {
        "Content-Type": "applcation/json",
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(res =>
        this.setState({
          projects: res.projects.map(item => {
            return { value: item.title, label: item.title };
          })
        })
      );
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  filteredRows = a => {
    console.log(a);
    this.setState({ rows: a });
  };

  render() {
    const profiles = paginate(
      this.state.rows,
      this.state.currentPage,
      this.state.pageSize
    );
    console.log(this.state.projects, " technilogies");
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
        {this.state.drawFilter && (
          <FilterWindow
            currentRows={this.state.rows}
            projects={this.state.projects}
            technologies={this.state.technologies}
            filteredRows={this.filteredRows}
          />
        )}
        {this.state.creating && <Backdrop />}
        {this.state.creating && (
          <Modal
            title="Add Candidate"
            canCancel
            canConfirm
            onCancel={this.modalCancelHandler}
            onConfirm={this.modalConfirmHandler}
            fields={[
              {
                name: "name",
                type: "text",
                label: "Name,Surname"
              },
              { name: "phone", type: "number", label: "Phone" },
              { name: "position", type: "text", label: "Position" },
              { name: "profile", type: "text", label: "Profile" },
              { name: "portfolio", type: "text", label: "Portfolio" },
              { name: "comment", type: "text", label: "Comment" },
              {
                name: "english",
                type: "dropdown",
                label: "English",
                options: [
                  { value: "no english", label: "no english" },
                  { value: "good", label: "good" },
                  { value: "fluent", label: "fluent" }
                ]
              },
              { name: "salary", type: "text", label: "Salary Expectation" },
              { name: "source", type: "dropdown", label: "Source" },
              { name: "profile", type: "text", label: "Profile" },
              {
                name: "technologies",
                type: "dropdown",
                label: "Technologies",
                options: this.state.technologies
              },
              {
                name: "projects",
                type: "dropdown",
                label: "Projects",
                options: this.state.projects
              }
            ]}
            onChange={this.handleChange}
            profile={profiles[0]}
          />
        )}
      </div>
    );
  }
}
