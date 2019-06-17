import { connect } from "react-redux";
import Analytics from "../components/Analytics/Analytics";

const mapStateToProps = state => {
  return {
    profiles: state.profileListReducer.profiles,
    technologies: state.profileListReducer.technologies,
    projects: state.profileListReducer.projects
  };
};

export default connect(mapStateToProps)(Analytics);
