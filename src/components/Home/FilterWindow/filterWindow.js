import React, { Component } from "react";
import styles from "./filterWindow.module.css";
import { connect } from "react-redux";
import { filteredProfiles } from "../../../actions/profileListActions";

class filterWindow extends Component {
  state = {
    project: "",
    profile: "",
    phone: "",
    technicalSkills: "react",
    englishSkills: "none",
    minSalary: "",
    maxSalary: "",
    status: "blacklisted",
    source: "linkedin",
    minData: "",
    maxData: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  profilesFilterer = e => {
    e.preventDefault();
    console.log("i was here", this.state);
    // if (!e.target.value) {
    //   this.fetchingProfiles();
    // } else {
    //   const filtered = this.props.state.profileListReducer.profiles.filter(
    //     profile => {
    //       return profile.name
    // .trim()
    // .toLowerCase()
    // .includes(e.target.value.toLowerCase().trim())
    //     }
    //   );
    const filtered = this.props.state.profileListReducer.profiles.filter(
      profile => {
        if (
          profile.project === this.state.project &&
          profile.profile === this.state.profile &&
          profile.phone === this.state.phone &&
          profile.technicalSkills === this.state.technicalSkills &&
          profile.englishSkills === this.state.englishSkills &&
          profile.salary >= this.state.minSalary &&
          profile.salary <= this.state.maxSalary &&
          profile.status === this.state.blacklisted &&
          profile.source === this.state.source
        ) {
        }
      }
    );

    // this.props.filteredProfiles(filtered);
    // let myrows = [];
    // filtered.map(candidate => {
    //   myrows.push({
    //     "Name, Surname": candidate.name || "-",
    //     Phone: candidate.phone || "-",
    //     "Current Position": candidate.phone || "-",
    //     Profile: candidate.profile || "-",
    //     Portfolio: candidate.portfolio || "-",
    //     Technologies: "ver vipove",
    //     English: candidate.english || "-",
    //     "Salary Expectation": candidate.salary || "-",
    //     Source: candidate.source || "-",
    //     Status: candidate.status || "-",
    //     Projects: "proeqtebi"
    //   });
    // });
    // this.setState({ rows: myrows, currentPage: 1 });
    // }
  };

  render() {
    return (
      <form onSubmit={e => this.profilesFilterer(e)}>
        <div
          className={styles.container}
          style={{ display: this.props.display }}
        >
          <div className={styles.secondaryContainer}>
            <div className={styles.inputContainer}>
              <span>Project</span>
              <input
                name="project"
                onChange={e => this.handleChange(e)}
                type="text"
              />
            </div>
            <div className={styles.inputContainer}>
              <span>Profile</span>
              <input
                name="profile"
                onChange={e => this.handleChange(e)}
                type="text"
              />
            </div>
            <div className={styles.inputContainer}>
              <span>Phone</span>
              <input
                name="phone"
                onChange={e => this.handleChange(e)}
                type="text"
              />
            </div>
            <div className={styles.inputContainer}>
              <span>Technical Skills</span>
              <select
                name="technicalSkills"
                onChange={e => this.handleChange(e)}
              >
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="node">Node.js</option>
                <option value="php">Php</option>
              </select>
            </div>
            <div className={styles.inputContainer}>
              <span>English</span>
              <select name="englishSkills" onChange={e => this.handleChange(e)}>
                <option value="none">none</option>
                <option value="basic">Basic</option>
                <option value="fluent">Fluent</option>
              </select>
            </div>
            <div className={styles.inputContainer}>
              <span>Salary Range</span>
              <div>
                <input
                  type="text"
                  name="minSalary"
                  onChange={e => this.handleChange(e)}
                  placeholder="min"
                />
                <input
                  type="text"
                  name="maxSalary"
                  onChange={e => this.handleChange(e)}
                  placeholder="max"
                />
              </div>
            </div>
            <div className={styles.inputContainer}>
              <span>Status</span>
              <select name="status" onChange={e => this.handleChange(e)}>
                <option value="blacklisted">Blacklisted</option>
                <option value="white">White</option>
              </select>
            </div>
            <div className={styles.inputContainer}>
              <span>Source</span>
              <select name="source" onChange={e => this.handleChange(e)}>
                <option value="linkedin">Linkedin</option>
                <option value="referee">Referee</option>
              </select>
            </div>
            <div className={styles.inputContainer}>
              <span>Date Range</span>
              <div>
                <input
                  name="minData"
                  onChange={e => this.handleChange(e)}
                  type="date"
                />
                <input
                  name="maxData"
                  onChange={e => this.handleChange(e)}
                  type="date"
                />
              </div>
            </div>
          </div>
          <button type="submit">submit</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  filteredProfiles: profiles => dispatch(filteredProfiles(profiles))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(filterWindow);
