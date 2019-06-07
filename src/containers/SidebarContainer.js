import { connect } from "react-redux";
import {changeActive} from '../actions/navigationActions'
import Sidebar from '../components/Sidebar/Sidebar'

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  changeActive: (button) => dispatch(changeActive(button))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
