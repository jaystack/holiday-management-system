import { connect } from 'react-redux';

import AppBar from './app-bar.component';
import { toggleMobileDrawer } from '../../../store/app';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  toggleMobileDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
