import { connect } from 'react-redux';
import {
  getIsAuthenticated
} from '../../../store/login';

import ProtectedRoute from './protected-route.component';

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
