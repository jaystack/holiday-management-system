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
  const [values, setValues] = React.useState({
    age: '',
    name: 'hai',
  });
  function handleChangeB(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }
  const names = [
    'Tom',
    'Anna',
    'Daniel',
    'Cailey',
  ];
  const [personName, setPersonName] = React.useState([]);

  function handleChange(event) {
    setPersonName(event.target.value);
  }
  const [selectedDate, handleDateChange] = React.useState(new Date());
  const [selectedDateB, handleDateChangeB] = React.useState(new Date());

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
            required
            autoOk
            variant="inline"
            label="Start Date"
            format="MM/DD/YYYY"
            value={selectedDate}
            onChange={date => handleDateChange(date)}
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
            required
            variant="inline"
            label="End Date"
            format="MM/DD/YYYY"
            value={selectedDateB}
            onChange={date => handleDateChangeB(date)}
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
              required
              value={personName}
              onChange={handleChange}
              input={<Input id="select-multiple-chip" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {names.map(name => (
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
            <Select
              value={values.age}
              required
              onChange={handleChangeB}
              inputProps={{
                name: 'age',
                id: 'age-simple',
              }}
            >
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
            rows={5}
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
