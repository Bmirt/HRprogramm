import React, { Component } from "react";
import Header from "../Header/Header";
import Sidebar from "../../containers/SidebarContainer";
import ProfileList from "../../containers/ProfileListContainer";
import { Route } from "react-router-dom";
import Projects from "../Home/Projects/Projects";
import Analytics from "../Analytics/Analytics";
import Calendar from "../Calendar/Calendar";
import BlackList from "../BlackList/BlackList";
import UserManagement from "../UserManagement/UserManagement";
<<<<<<< HEAD
import Technologies from "../Technologies/technologies";
=======
import UserProfile from "../UserProfile/Userprofile";
import SingleProfileContainer from "../../containers/SingleProfile";
>>>>>>> 56015cff500344119c098ed7bc73fb269fccf82d

class ProtectedContainer extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <div className="mainContent">
          <Sidebar />
          <Route path="/home/profile_list" exact component={ProfileList} />
          <Route path="/home/projects" exact component={Projects} />
          <Route path="/home/analytics" exact component={Analytics} />
          <Route path="/home/calendar" exact component={Calendar} />
          <Route path="/home/black_list" exact component={BlackList} />
          <Route path="/home/technologies" exact component={Technologies} />
          <Route
            path="/home/user_management"
            exact
            component={UserManagement}
          />
          <Route path="/home/:id" exact component={SingleProfileContainer} />
        </div>
      </div>
    );
  }
}

export default ProtectedContainer;
