import { connect } from "react-redux";
import ProfileList from "../components/Home/Profile List/ProfileList";

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
)(ProfileList);
