import React, { Component } from "react";
import styles from "./ProfileList.module.css";
import searchIcon from "../../../images/searchIcon.png";
import Modal from "../../Modal/Modal";
import Backdrop from "../../Backdrop/Backdrop";
import SmartTable from "../SmartTable/SmartTable";
import FilterIcon from "../../../images/filterIcon.png";
import Pagination from "../../pagination/Pagination";
import { paginate } from "../../../utils/paginate";
import ExportFile from "../../ExportFile/ExportFile";
import FilterWindow from "../FilterWindow/filterWindow";
export default class ProfileList extends Component {
  state = {
    filtered: "",
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
    pageSize: 10,
    currentPage: 1,
    columnHeaders: [
      { title: "Name", name: "name" },
      { title: "Phone", name: "phone" },
      { title: "Current Position", name: "position" },
      { title: "Profile", name: "profile" },
      { title: "Portfolio", name: "portfolio" },
      { title: "Technologies", name: "technologies" },
      { title: "English", name: "english" },
      { title: "Salary Expectation", name: "salary" },
      { title: "Source", name: "source" },
      { title: "Status", name: "status" },
      { title: "Projects", name: "projects" },
      { title: "Comment", name: "comment" },
      { title: "Date", name: "created_at" }
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
    this.setState({ filtered: a });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  createPrfile = () => {
    const {
      name,
      phone,
      position,
      portfolio,
      profile,
      comment,
      english,
      salary,
      source,
      chosenProjects: projects,
      chosenTechnologies: technologies
    } = this.state;
    const userprofile = {
      author_id: 1,
      status: "interested",
      name,
      phone,
      position,
      portfolio,
      profile,
      comment,
      english,
      salary,
      source,
      projects,
      technologies
    };
    this.props.createProfile(userprofile);
  };

  render() {
    console.log(this.props);
    const profiles = paginate(
      this.props.profiles,
      this.state.currentPage,
      this.state.pageSize
    );
    console.log(this.state);
    return (
      <div className={styles.container}>
        <div className={styles.content}>
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
                disabled={!this.props.profiles.length}
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
            itemsCount={this.props.profiles.length}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
        {this.state.drawFilter && (
          <FilterWindow
            currentRows={this.props.profiles}
            projects={this.state.projects}
            technologies={this.state.technologies}
            // filteredRows={this.filteredRows}
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
                options: this.props.technologies.map(item => {
                  return { value: item.id, label: item.title };
                })
              },
              {
                name: "projects",
                type: "multiSelect",
                label: "Projects",
                options: this.props.projects.map(item => {
                  return { value: item.id, label: item.title };
                })
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
