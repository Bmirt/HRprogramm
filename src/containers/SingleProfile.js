import { connect } from "react-redux";
import UserProfile from "../components/UserProfile/Userprofile";

const mapStateToProps = (state, ownProps) => ({
  state: state.profileListReducer.profiles
    ? state.profileListReducer.profiles.filter(
        profile => profile.id == ownProps.match.params.id
      )
    : []
});

const SingleProfileContainer = connect(mapStateToProps)(UserProfile);

export default SingleProfileContainer;
