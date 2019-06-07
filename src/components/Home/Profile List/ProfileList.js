import React, { Component } from "react";
import styles from "./ProfileList.module.css";
import searchIcon from '../../../images/searchIcon.png'

import { fetchProfiles } from "../../../actions/profileListActions";

export default class Home extends Component {
  state = {
    candidateList: ''
  }
  componentDidMount() {
    
    const { dispatch } = this.props;
    fetch("http://laravel.local/api/all-profiles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZhZTQ2ZGZhODM0MjY0NjRhODhjZDg5ZTM0YzEzY2Q5MjEyNmM3MWM3MDIxNjEyMzE1YjgxNzgxY2YwZjZjMGE2ZmY2NTg5NGJkN2ZmY2VlIn0.eyJhdWQiOiIxIiwianRpIjoiZmFlNDZkZmE4MzQyNjQ2NGE4OGNkODllMzRjMTNjZDkyMTI2YzcxYzcwMjE2MTIzMTViODE3ODFjZjBmNmMwYTZmZjY1ODk0YmQ3ZmZjZWUiLCJpYXQiOjE1NTk5MDgxNjgsIm5iZiI6MTU1OTkwODE2OCwiZXhwIjoxNTkxNTMwNTY4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.RmSC7F6zWsenMG-FUEE8TWln8Itwu-MSRNyNuOoOHhDtS1Zm1bSN-rUZS6JCmTALPW0ATntHXgKo7M5_NiiWmgfR2Xd9n7EA3_VLcSMSe4hLtfCJPIkeFADmVlX5lV6IBybLQeXj6l_CqX8QVMX2aSvrhfsY_mhiM7Zbnb1Q_cB7mWTsjB51sIqNQ7THk8rW6eHrI0NlIcSyG7gBLWcywCzPmkCw9xGW-BHFJr-SSfl-WpUf3lZiNEVo_Res09YQhPWoE4eEoOEG3oqMVdrgvZmrvv--dQdfeTBYjQ0Xkq-liV3cTtfFCABZa2Eg-REfs1sTEV-9Y9St_DQAWmSn14IB4hx4ICyDR3qotXqpZq6kQ_vSUFK4y2F5mEuEoUOzzmO3ROiqpiUKTP_9OQnMEjJ9b1R5rSiYCkh6jveNO3g_31KRcXyNlJL_aYB6eZoX3tiuCLWaeFFIoUCWwNmAjNrEtg6zNkLTuM8L5VMXCkzdqEk9WX-zYB3fZ-i5-rsVIAk79ZSqG7k3kZLgPw9aakcRu19koSg8sIVmPaNAOoZwqYLsno_9nHGBB7aby0thFrnGqNKgf-CCzxPyxhom71rCPPe8eHYaNQKUUkTJT-YbPx92djypfWuQS6owrL0v_PS4lg9AGufMdLTZSH5MHQVgkALPn3eAKB8h75bJUm0"
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
      .then(()=>{
          let candidateList = this.props.state.profileListReducer.profiles.map((candidate)=>{
          return(
            <tbody>
              <tr>
                <td>{candidate.name || '-'}</td>
                <td>{candidate.phone || '-'}</td>
                <td>{candidate.position || '-'}</td>
                <td>{candidate.profile || '-'}</td>
                <td>{candidate.portfolio || '-'}</td>
                <td>ver vipove</td>
                <td>{candidate.english || '-'}</td>
                <td>{candidate.salary || '-'}</td>
                <td>{candidate.source || '-'}</td>
                <td>{candidate.status || '-'}</td>
                <td>proeqtebi</td>
              </tr>
            </tbody>
         )}
        )
        .then(
        this.setState({...this.state, candidateList: candidateList})
        )
      })
      .catch(error => error);
  }

  render() {
    console.log( this.props.state.profileListReducer.profiles)
    console.log('helo i am guga', this.props)
    return (
      <div className={styles.container}>
        <div className={styles.search}>
          <input type='text' className={styles.searchInput} placeholder='Search...'></input>
          <button>
            <img src={searchIcon} alt='search'/>
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
          {this.state.candidateListcandidateList}
        </table>
      </div>
    );
  }
}
