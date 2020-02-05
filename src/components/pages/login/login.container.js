import { connect } from 'react-redux';
import {
  authenticateUser,
  setUserCredentials,
  getUserCredentials,
  getAuthError,
  validateJwtToken,
  readJwtToken
} from '../../../store/login';

import Login from './login.component';

const mapStateToProps = state => ({
  authError: getAuthError(state),
});

const mapDispatchToProps = {
  authenticateUser,
  setUserCredentials,
  getUserCredentials,
  validateJwtToken,
  readJwtToken
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
