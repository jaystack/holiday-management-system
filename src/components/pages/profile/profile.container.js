import { connect } from 'react-redux';
import { getUserData, fetchUserData } from '../../../store/profile';

import Profile from './profile.component';

const mapStateToProps = state => ({
  userData: getUserData(state),
});

const mapDispatchToProps = {
  fetchUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
