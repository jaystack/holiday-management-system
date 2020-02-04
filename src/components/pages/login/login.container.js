import { connect } from 'react-redux';
import {
  authenticateUser, setUserCredentials, getUserCredentials, getAuthError, validateJwtToken, getJwtToken
} from '../../../store/login';

import Login from './login.component';

const mapStateToProps = state => ({
  authError: getAuthError(state),
  jwtToken: getJwtToken(state),

});

const mapDispatchToProps = {
  authenticateUser,
  setUserCredentials,
  getUserCredentials,
  validateJwtToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
