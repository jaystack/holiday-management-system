import { connect } from 'react-redux';

import AlertTile from './alert.component';

import { getLastAlert, removeAlert } from '../../../store/app';

const mapStateToProps = state => ({ alert: getLastAlert(state) });

const mapDispatchToProps = { removeAlert };

export default connect(mapStateToProps, mapDispatchToProps)(AlertTile);
