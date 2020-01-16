import React, { useEffect } from 'react';
import moment from 'moment';

import { KeyboardDatePicker } from '@material-ui/pickers';
import Container from '@material-ui/core/Container';
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

import Section from '../../commons/section/section.component';

import useStyles from './request-holiday.styles';


const RequestHoliday = () => {
  const classes = useStyles();
  const [supervisors] = React.useState([
    'Tom',
    'Anna',
    'Daniel',
    'Cailey',
  ]);
  const [holidayType, setHolidayType] = React.useState(1);
  const [sendRequestTo, setSendRequestTo] = React.useState({ value: [], isValid: true });
  const [selectedDateFrom, setDateFrom] = React.useState({ value: moment(), isValid: true });
  const [selectedDateTo, setDateTo] = React.useState({ value: moment(), isValid: true });
  const [note, setNote] = React.useState('');

  useEffect(() => {
    if (selectedDateFrom.value > selectedDateTo.value) setDateTo(selectedDateFrom);
  }, [selectedDateFrom]);

  const shouldDisableDate = day => (day.isoWeekday() === 6 || day.isoWeekday() === 7);
  const handleOnChangeSendRequestTo = event => setSendRequestTo({ value: event.target.value, isValid: true });
  const handleChangeHolidayType = event => setHolidayType(event.target.value);
  const handleChangeNote = event => setNote(event.target.value);
  const handleDateFromChange = date => setDateFrom({ value: date, isValid: true });
  const handleDateToChange = date => setDateTo({ value: date, isValid: true });

  const handleSendClick = () => {
    if (sendRequestTo.value.length === 0) return setSendRequestTo({ value: sendRequestTo.value, isValid: false });
    if (!selectedDateFrom.value) return setDateFrom({ value: '', isValid: false });
    if (!selectedDateTo.value) return setDateTo({ value: '', isValid: false });
    console.log({
      selectedDateFrom: selectedDateFrom.value,
      selectedDateTo: selectedDateTo.value,
      holidayType,
      note,
      sendRequestTo: sendRequestTo.value
    });
  };
  return (
    <Container maxWidth="sm">
      <Section>
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
              value={selectedDateFrom.value}
              onChange={handleDateFromChange}
              invalidDateMessage="You must select a correct date"
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
              minDate={selectedDateFrom.value}
              variant="inline"
              label="End Date"
              format="MM/DD/YYYY"
              value={selectedDateTo.value}
              onChange={handleDateToChange}
              invalidDateMessage="You must select a correct date"
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
                onChange={handleOnChangeSendRequestTo}
                input={<Input id="select-multiple-chip" />}
                renderValue={selected => (
                  <div>
                    {selected.map(value => (
                      <Chip key={value} label={value} />
                    ))}
                  </div>
                )}
              >
                {supervisors.map(supervisor => (
                  <MenuItem key={supervisor} value={supervisor}>
                    {supervisor}
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
                onChange={handleChangeHolidayType}
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
              onChange={handleChangeNote}
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
      </Section>
    </Container>
  );
};

export default RequestHoliday;
