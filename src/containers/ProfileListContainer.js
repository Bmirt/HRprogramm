import { connect } from "react-redux";
import ProfileList from "../components/Home/Profile List/ProfileList";
import {
  filteredProfiles,
  fetchProfiles,
  fetchTechnologies,
  fetchProjects,
  createProfile
} from "../actions/profileListActions";

const mapStateToProps = state => {
  console.log(state.profileListReducer.profiles, "redux state");
  return {
    profiles: state.profileListReducer.profiles,
    technologies: state.profileListReducer.technologies,
    projects: state.profileListReducer.projects
  };
};

const mapDispatchToProps = dispatch => ({
  getProfiles: () => dispatch(fetchProfiles()),
  createProfile: profile => dispatch(createProfile(profile)),
  getTechnologies: () => dispatch(fetchTechnologies()),
  getProjects: () => dispatch(fetchProjects()),
  filteredProfiles: profiles => dispatch(filteredProfiles(profiles)),
  dispatch: dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileList);
