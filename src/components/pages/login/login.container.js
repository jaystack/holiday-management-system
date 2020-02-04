import { connect } from 'react-redux';
import {
  authenticateUser, setUserCredentials, getUserCredentials, getAuthError
} from '../../../store/login';

import Login from './login.component';

const mapStateToProps = state => ({
  authError: getAuthError(state),

});

const mapDispatchToProps = {
  authenticateUser,
  setUserCredentials,
  getUserCredentials
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
