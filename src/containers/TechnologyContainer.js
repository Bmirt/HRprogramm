import { connect } from "react-redux";
import technologies from "../components/Technologies/technologies"

const mapStateToProps = state => {
  return {
    technologies: state.profileListReducer.technologies,
  };
};

export default connect(
  mapStateToProps,
)(technologies);
