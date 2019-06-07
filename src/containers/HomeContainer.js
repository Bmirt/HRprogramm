import { connect } from "react-redux";
import Home from '../components/Home/Home'

const mapStateToProps = state => ({
  state: state
});


export default connect(
  mapStateToProps
)(Home);

