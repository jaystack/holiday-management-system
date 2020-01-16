import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
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

const initialDateState = { dateFrom: { value: moment(), isValid: true }, dateTo: { value: moment(), isValid: true } };
const dateReducer = (state, action) => {
  switch (action.type) {
    case 'DATE_FROM':
      return { ...state, dateFrom: { value: action.value, isValid: action.isValid } };
    case 'DATE_TO':

      return { ...state, dateTo: { value: action.value, isValid: action.isValid } };
    default:
      throw new Error('no case matched');
  }
};
const RequestHoliday = ({ supervisors }) => {
  const classes = useStyles();
  const [holidayType, setHolidayType] = React.useState(1);
  const [sendRequestTo, setSendRequestTo] = React.useState({ value: [], isValid: true });
  const [note, setNote] = React.useState('');
  const [dateState, dispatchDateModification] = useReducer(dateReducer, initialDateState);
  useEffect(() => {
    if (dateState.dateFrom.value > dateState.dateTo.value) dispatchDateModification({ ...dateState.dateFrom, type: 'DATE_TO' });
  }, [dateState.dateFrom]);

  const shouldDisableDate = day => (day.isoWeekday() === 6 || day.isoWeekday() === 7);
  const handleOnChangeSendRequestTo = event => setSendRequestTo({ value: event.target.value, isValid: true });
  const handleChangeHolidayType = event => setHolidayType(event.target.value);
  const handleChangeNote = event => setNote(event.target.value);
  const handleDateChange = name => date => {
    dispatchDateModification({ type: name, value: date, isValid: true });
  };

  const handleSendClick = () => {
    if (sendRequestTo.value.length === 0) return setSendRequestTo({ value: sendRequestTo.value, isValid: false });
    if (!dateState.dateFrom.value) return dispatchDateModification({ type: 'DATE_FROM', value: '', isValid: false });
    if (!dateState.dateTo.value) return dispatchDateModification({ type: 'DATE_TO', value: '', isValid: false });
    console.log({
      dateFrom: dateState.dateFrom.value,
      dateTo: dateState.dateTo.value,
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
              id="DATE_FROM"
              className={classes.fullWidth}
              required
              autoOk
              shouldDisableDate={shouldDisableDate}
              minDate={moment().valueOf()}
              variant="inline"
              label="Start Date"
              format="MM/DD/YYYY"
              value={dateState.dateFrom.value}
              onChange={handleDateChange('DATE_FROM')}
              invalidDateMessage="You must select a correct date"
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <KeyboardDatePicker
              id="DATE_TO"
              className={classes.fullWidth}
              autoOk
              required
              shouldDisableDate={shouldDisableDate}
              minDate={dateState.dateFrom.value}
              variant="inline"
              label="End Date"
              format="MM/DD/YYYY"
              value={dateState.dateTo.value}
              onChange={handleDateChange('DATE_TO')}
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
RequestHoliday.propTypes = {
  supervisors: PropTypes.arrayOf(PropTypes.number)
};
RequestHoliday.defaultProps = {
  supervisors: []
};
export default RequestHoliday;
