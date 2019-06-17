import React, { Component } from "react";
import Header from "../Header/Header";
import Sidebar from "../../containers/SidebarContainer";
import { Route } from "react-router-dom";
import ProjectsContainer from "../../containers/ProjectsContainer";
import Calendar from "../Calendar/Calendar";
import BlackList from "../BlackList/BlackList";
import UserManagement from "../UserManagement/UserManagement";
import SingleProfileContainer from "../../containers/SingleProfile";
import SingleTechnology from "../Technologies/single";
import ProfileListContainer from "../../containers/ProfileListContainer";
import TechnologyContainer from "../../containers/TechnologyContainer";
import { connect } from "react-redux";
import {
  fetchProfiles,
  fetchTechnologies,
  fetchProjects
} from "../../actions/profileListActions";
<<<<<<< HEAD
import SingleProjectContainer from "../../containers/SingleProjectContainer";
=======
import AnalyticsContainer from "../../containers/AnalyticsContainer";
>>>>>>> 880993d9ce6676d7977dfc7d714a91fb36e76c9a

class ProtectedContainer extends Component {
  state = {};
  componentWillMount() {
    let token = localStorage.getItem("token");
    this.props.getProfiles(token);
    this.props.getTechnologies(token);
    this.props.getProjects(token);
  }
  render() {
    return (
      <div>
        <Header />
        <div className="mainContent">
          <Sidebar />
          <Route
            path="/home/profile_list"
            exact
            component={ProfileListContainer}
          />
          <Route path="/home/projects" exact component={ProjectsContainer} />
          <Route path="/home/analytics" exact component={AnalyticsContainer} />
          <Route path="/home/calendar" exact component={Calendar} />
          <Route path="/home/black_list" exact component={BlackList} />
          <Route
            path="/home/technologies"
            exact
            component={TechnologyContainer}
          />
          <Route
            path="/home/projects/:id"
            exact
            component={SingleProjectContainer}
          />
          <Route
            path="/home/technologies/:id"
            exact
            component={SingleTechnology}
          />
          <Route
            path="/home/user_management"
            exact
            component={UserManagement}
          />
          <Route
            path="/home/profile/:id"
            exact
            component={SingleProfileContainer}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProfiles: token => dispatch(fetchProfiles(token)),
  getTechnologies: token => dispatch(fetchTechnologies(token)),
  getProjects: token => dispatch(fetchProjects(token))
});

export default connect(
  null,
  mapDispatchToProps
)(ProtectedContainer);
