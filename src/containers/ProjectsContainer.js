import { connect } from "react-redux";
import Projects from "../components/Home/Projects/Projects";


const mapStateToProps = state => {
  return {
    projects: state.profileListReducer.projects
  };
};

export default connect(
  mapStateToProps,
)(Projects);
