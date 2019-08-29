import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import useStyles from './holiday-progress-circle.styles';
import { DRAWER_WITDH } from '../../../constants';
import { getFormattedDateFromTimestamp } from '../../../utils';

const HolidayProgressCircle = ({ maxHolidays, availableHolidays, nextHolidayStart }) => {
  const classes = useStyles();
  const circleValue = -Math.ceil((availableHolidays / maxHolidays) * 100);

  return (
    <Grid
      container
      justify="center"
      spacing={0}
      className={classes.container}
    >
      <Grid
        container
        item
        justify="center"
        className={classes.circleContainer}
      >
        <Box className={classes.numberContainer}>
          <Typography
            component="span"
            variant="h2"
            color="textPrimary"
            className={classes.remainingNumber}
          >
            {availableHolidays}
          </Typography>
          <Typography
            component="span"
            color="textSecondary"
          >
            /
            {maxHolidays}
          </Typography>
        </Box>
        <CircularProgress
          variant="static"
          size={DRAWER_WITDH - 60}
          thickness={3}
          value={100}
          className={classes.greyCircle}
        />
        <CircularProgress
          color="primary"
          variant="static"
          size={DRAWER_WITDH - 60}
          thickness={3}
          value={circleValue}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography align="center" variant="body2">
          Your next holiday will start at:
        </Typography>
        <Typography align="center" variant="body2">
          {nextHolidayStart ? (
            getFormattedDateFromTimestamp(nextHolidayStart)
          ) : (
            'not booked yet'
          )}
        </Typography>
      </Grid>
    </Grid>
  );
};

HolidayProgressCircle.propTypes = {
  maxHolidays: PropTypes.number,
  availableHolidays: PropTypes.number,
  nextHolidayStart: PropTypes.number
};

HolidayProgressCircle.defaultProps = {
  maxHolidays: 0,
  availableHolidays: 0,
  nextHolidayStart: null
};

export default HolidayProgressCircle;
