import React, { Component } from "react";
import styles from "./ProfileList.module.css";
import searchIcon from "../../../images/searchIcon.png";
import Modal from "../../Modal/Modal";
import Backdrop from "../../Backdrop/Backdrop"

import { fetchProfiles } from "../../../actions/profileListActions";
// import { ClientHttp2Session } from "http2";

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
    technologies:[]
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
        console.log("this is me", res.profiles);
        dispatch(fetchProfiles(res.profiles));
        return res.products;
      })
      .then(() => {})
      .catch(error => error);
  }

  render() {
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
          {this.props.state.profileListReducer.profiles.map(candidate => {
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
        </Modal>}
      </div>
    );
  }
}
