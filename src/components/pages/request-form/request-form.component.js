import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { KeyboardDatePicker } from '@material-ui/pickers';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
            className={classes.fullWidth}
            autoOk
            variant="inline"
            label="Start Date"
            format="MM/DD/YYYY"
            value={new Date()}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
        >
          <KeyboardDatePicker
            className={classes.fullWidth}
            autoOk
            variant="inline"
            label="End Date"
            format="MM/DD/YYYY"
            value={new Date()}
          />
        </Grid>
        <Grid
          item
          xs={12}
          className={classes.padding12}
        >
          <FormControl fullWidth>
            <InputLabel>Send request to</InputLabel>
            <Select
              multiple
              value={[]}
              input={<Input id="select-multiple-chip" />}
              renderValue={() => (
                <div>
                  {['almafa', 'körtefa'].map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {['asd', 'asd2'].map(name => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          className={classes.padding12}
        >
          <FormControl className={classes.fullWidth}>
            <InputLabel>Holiday Type</InputLabel>
            <Select value="">
              <MenuItem value={1}>Normal holiday</MenuItem>
              <MenuItem value={2}>With payment</MenuItem>
              <MenuItem value={3}>Without payment</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          className={classes.padding12}
        >
          <TextField
            id="outlined-textarea"
            label="Description"
            placeholder="Description"
            multiline
            className={classes.fullWidth}
            rows={1}
          />
        </Grid>
        <Grid
          item
          xs={12}
          className={classes.buttonFix}
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RequestForm;
