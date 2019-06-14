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
import { throwStatement } from "@babel/types";
export default class Home extends Component {
  state = {
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
    source: "",
    black_list: false,
    pageSize: 20,
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
    projects: [],
    chosenTechnologies: [],
    chosenProjects: []
  };
  handleMultiSelect = (category, data) => {
    if (category === "technologies") {
      this.setState({ chosenTechnologies: data });
    }
    if (category === "projects") {
      this.setState({ chosenProjects: data });
    }
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
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
  filteredRows = a => {
    this.setState({ rows: a });
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
        // console.log(
        //   this.props.state.profileListReducer.profiles[0].technologies
        // );
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
            return { value: item.id, label: item.title };
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
            return { value: item.id, label: item.title };
          })
        })
      );
  }
  profilesFilterer = e => {
    // console.log(e.target.value);
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

  createPrfile = () => {
    const token = localStorage.getItem("token");
    fetch("http://laravel.local/api/store-profile", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({
        author_id: 1,
        status: "interested",
        name: this.state.name,
        phone: this.state.phone,
        position: this.state.position,
        profile: this.state.profile,
        portfolio: this.state.portfolio,
        comment: this.state.comment,
        english: this.state.english,
        salary: this.state.salary,
        // status: this.state.status,
        source: this.state.source,
        projects: this.state.chosenProjects,
        technologies: this.state.chosenTechnologies
      })
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.props.state.profileListReducer.profiles);
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
                label: "Name,Surname",
                value: this.state.name
              },
              {
                name: "phone",
                type: "number",
                label: "Phone",
                value: this.state.phone
              },
              {
                name: "position",
                type: "text",
                label: "Position",
                value: this.state.position
              },
              {
                name: "profile",
                type: "text",
                label: "Profile",
                value: this.state.profile
              },
              {
                name: "portfolio",
                type: "text",
                label: "Portfolio",
                value: this.state.portfolio
              },
              {
                name: "comment",
                type: "text",
                label: "Comment",
                value: this.state.comment
              },
              {
                name: "english",
                type: "select",
                label: "English",
                options: [
                  { value: "no english", label: "no english" },
                  { value: "good", label: "good" },
                  { value: "fluent", label: "fluent" }
                ]
              },
              {
                name: "salary",
                type: "text",
                label: "Salary Expectation",
                value: this.state.salary
              },
              {
                name: "source",
                type: "select",
                label: "Source",
                options: [
                  { value: "LinkedIn", label: "LinkedIn" },
                  { value: "Refference", label: "Refference" },
                  { value: "Job Post", label: "Job Post" }
                ]
              },
              {
                name: "profile",
                type: "text",
                label: "Profile",
                value: this.state.profile
              },
              {
                name: "technologies",
                type: "multiSelect",
                label: "Technologies",
                options: this.state.technologies
              },
              {
                name: "projects",
                type: "multiSelect",
                label: "Projects",
                options: this.state.projects
              }
            ]}
            onChange={this.handleChange}
            handleMultiSelect={this.handleMultiSelect}
            createProfile={this.createPrfile}
          />
        )}
      </div>
    );
  }
}
