import { connect } from 'react-redux';

import SideBar from './side-bar.component';
import { getIsMobileDrawerOpened, toggleMobileDrawer } from '../../../store/app';

const mapStateToProps = state => ({
  isMobileDrawerOpened: getIsMobileDrawerOpened(state)
});

const mapDispatchToProps = {
  toggleMobileDrawer
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
