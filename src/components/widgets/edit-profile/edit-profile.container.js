import { connect } from 'react-redux';

import EditProfile from './edit-profile.component';

import { handleUserDataChange } from '../../../store/profile';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  handleUserDataChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
