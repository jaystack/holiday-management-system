import { connect } from 'react-redux';
import { getUserData, updateUserData } from '../../../store/profile';

import Profile from './profile.component';

const mapStateToProps = state => ({ userData: getUserData(state) });

const mapDispatchToProps = {
  updateUserData
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
