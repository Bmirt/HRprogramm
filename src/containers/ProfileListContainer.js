import { connect } from "react-redux";
import ProfileList from "../components/Home/Profile List/ProfileList";
import { filteredProfiles } from "../actions/profileListActions";

const mapStateToProps = state => {
  console.log(state.profileListReducer.profiles, "redux state");
  return {
    profiles: state.profileListReducer.profiles
  };
};

const mapDispatchToProps = dispatch => ({
  filteredProfiles: profiles => dispatch(filteredProfiles(profiles)),
  dispatch: dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileList);
