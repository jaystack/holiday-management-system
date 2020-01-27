import { connect } from 'react-redux';

import EditProfile from './edit-profile.component';

import { modifyUserData } from '../../../store/profile';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  modifyUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
