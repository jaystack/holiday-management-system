import { connect } from 'react-redux';

import { getIsAppWaiting } from '../../../store/app';
import AppProgress from './app-progress.component';


const mapStateToProps = state => ({
  isAppWaiting: getIsAppWaiting(state)
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppProgress);
