import { connect } from "react-redux";
import ProfileList from "../components/Home/Profile List/ProfileList";
import { createProfile } from "../actions/profileListActions";

const mapStateToProps = state => {
  return {
    profiles: state.profileListReducer.profiles,
    technologies: state.profileListReducer.technologies,
    projects: state.profileListReducer.projects
  };
};

const mapDispatchToProps = dispatch => ({
  createProfile: profile => dispatch(createProfile(profile))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileList);
