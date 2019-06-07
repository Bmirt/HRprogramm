import { connect } from "react-redux";
import Projects from "../components/Home/Projects/Projects";

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
