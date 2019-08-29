import React, { useEffect } from 'react';
import moment from 'moment';

import { KeyboardDatePicker } from '@material-ui/pickers';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';

import useStyles from './request-holiday.styles';

const names = [
  'Tom',
  'Anna',
  'Daniel',
  'Cailey',
];
const RequestHoliday = () => {
  const classes = useStyles();
  const [holidayType, setHolidayType] = React.useState(1);
  const [sendRequestTo, setSendRequestTo] = React.useState({ value: [], isValid: true });
  const [selectedDateFrom, handleDateChangeFrom] = React.useState(moment().valueOf());
  const [selectedDateTo, handleDateChangeTo] = React.useState(moment().valueOf());
  const [note, handleNotesChange] = React.useState('');
  useEffect(() => {
    if (selectedDateFrom > selectedDateTo) handleDateChangeTo(selectedDateFrom);
  }, [selectedDateFrom]);
  const shouldDisableDate = day => (day.isoWeekday() === 6 || day.isoWeekday() === 7);
  const handleSendClick = () => {
    if (sendRequestTo.value.length === 0) return setSendRequestTo({ value: sendRequestTo.value, isValid: false });
    // console.log({
    //   selectedDateFrom,
    //   selectedDateTo,
    //   holidayType,
    //   note,
    //   sendRequestTo: sendRequestTo.value
    // });
  };
  return (
    <Container maxWidth="sm">
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
              shouldDisableDate={shouldDisableDate}
              minDate={moment().valueOf()}
              variant="inline"
              label="Start Date"
              format="MM/DD/YYYY"
              value={selectedDateFrom}
              onChange={date => handleDateChangeFrom(date)}
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
              shouldDisableDate={shouldDisableDate}
              minDate={selectedDateFrom}
              variant="inline"
              label="End Date"
              format="MM/DD/YYYY"
              value={selectedDateTo}
              onChange={date => handleDateChangeTo(date)}
            />
          </Grid>
          <Grid
            item
            xs={12}
            className={classes.padding12}
          >
            <FormControl fullWidth error={!sendRequestTo.isValid}>
              <InputLabel>Send request to</InputLabel>
              <Select
                multiple
                required
                value={sendRequestTo.value}
                onChange={event => setSendRequestTo({ value: event.target.value, isValid: true })}
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
              {!sendRequestTo.isValid && <FormHelperText>You must select at least one person</FormHelperText>}
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
                value={holidayType}
                required
                onChange={event => setHolidayType(event.target.value)}
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
              label="Notes"
              multiline
              value={note}
              className={classes.fullWidth}
              rowsMax={10}
              onChange={event => handleNotesChange(event.target.value)}
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
              onClick={handleSendClick}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default RequestHoliday;
