import React, { Component } from "react";
import styles from "./ProfileList.module.css";
import searchIcon from "../../../images/searchIcon.png";
import Modal from "../../Modal/Modal";
import Backdrop from "../../Backdrop/Backdrop"
import SmartTable from "../SmartTable/SmartTable";

import { fetchProfiles } from "../../../actions/profileListActions";
import Pagination from "../../pagination/Pagination";
import { paginate } from "../../../utils/paginate";

export default class Home extends Component {
  state={
    creating:false,
    name:'',
    phone:'',
    position:'',
    profile:'',
    portfolio:'',
    comment:'',
    english:'',
    salary:'',
    status:'',
    projects:[],
    technologies:[],
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
  handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
    console.log(this.state)
  }

  startCreateEventHandler =()=>{
    this.setState({creating:true});
  }
  modalConfirmHandler =()=>{
    this.setState({creating:false});
  }
  modalCancelHandler =()=>{
    this.setState({creating:false});
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
        console.log(this.state.rows);
      })
      .catch(error => error);
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
    console.log(this.props.state.profileListReducer.profiles);
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
        <button 
        className={styles.addcandidate} 
        onClick={this.startCreateEventHandler}
        >
          Add a Candidate
        </button>
  
    if (this.state.rows.length)
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
         
        {this.state.creating && <Backdrop />}
        {this.state.creating && <Modal title="Add Candidate" 
        canCancel 
        canConfirm
        onCancel={this.modalCancelHandler}
        onConfirm={this.modalConfirmHandler}
        >
          <form>
            <div className="form-control">
              <label htmlFor="name">Name,Surname</label>
              <input type="text" 
              name="name"
              onChange={this.handleChange}
              ></input>
            </div>
            {/* <div className="form-control">
              <label htmlFor="phone">Phone</label>
              <input type="number" name="phone" onChange={this.handleChange}></input>
            </div>
            <div className="form-control">
              <label htmlFor="Current_position">Current Position</label>
              <input type="text" name="position" onChange={this.handleChange}></input>
            </div>
            <div className="form-control">
              <label htmlFor="profile">Profile</label>
              <input type="email" name="profile" onChange={this.handleChange}></input>
            </div>
            <div className="form-control">
              <label htmlFor="portfolio">Portfolio</label>
              <input type="text" name="portfolio" onChange={this.handleChange}></input>
            </div>
            <div className="form-control">
              <label htmlFor="Comment">Comment</label>
              <input type="text" name="Comment" onChange={this.handleChange}></input>
            </div>
            <div className="form-control">
              <label htmlFor="English">English</label>
              <input type="text" name="English"></input>
            </div>
            <div className="form-control">
              <label htmlFor="Salary_Expectation">Salary Expectation</label>
              <input type="text" name="title" onChange={this.handleChange}></input>
            </div>
            <div className="form-control">
              <label htmlFor="source">Source</label>
              <input type="text" name="source" onChange={this.handleChange}></input>
            </div>
            <div className="form-control">
              <label htmlFor="status">Status</label>
              <input type="text" name="status" onChange={this.handleChange}></input>
            </div>
            <div className="form-control">
              <label htmlFor="projects">Projects</label>
              <input type="text" name="projects" onChange={this.handleChange}></input>
            </div>
            <div className="form-control">
              <label htmlFor="Technologies">Technologies</label>
              <input type="text" name="Technologies" onChange={this.handleChange}></input>
            </div> */}
          </form>
     
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
    return <div />;
  }
}
