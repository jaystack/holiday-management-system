import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { KeyboardDatePicker } from '@material-ui/pickers';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import useStyles from './request-form.styles';

const RequestForm = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          md={6}
        >
          <KeyboardDatePicker
            className={classes.maxWidth}
            autoOk
            variant="inline"
            label="Start Date"
            format="MM/DD/YYYY"
            value={new Date()}
            onChange={date => console.log(date)}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
        >
          <KeyboardDatePicker
            className={classes.maxWidth}
            autoOk
            variant="inline"
            label="End Date"
            format="MM/DD/YYYY"
            value={new Date()}
            onChange={date => console.log(date)}
          />
        </Grid>
        <Grid xs={12} className={classes.padding12}>
          <FormControl className={classes.maxWidth}>
            <InputLabel>Send request to</InputLabel>
            <Select
              // value={values.age}
              onChange={() => console.log('changed')}
            >
              <MenuItem value={1}>Tamás</MenuItem>
              <MenuItem value={2}>Endre</MenuItem>
              <MenuItem value={3}>Vivi</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RequestForm;
