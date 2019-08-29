import { connect } from 'react-redux';
import HolidayProgressCircle from './holiday-progress-circle.component';

const mapStateToProps = () => ({
  maxHolidays: 21,
  availableHolidays: 11,
  nextHolidayStart: null
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HolidayProgressCircle);
