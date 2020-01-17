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

const initialState = {
  holidayType: { value: 1, isValid: true },
  note: { value: '', isValid: true },
  dateFrom: { value: moment(), isValid: true },
  dateTo: { value: moment(), isValid: true },
  sendRequestTo: { value: [], isValid: true }
};
const dateReducer = (state, action) => {
  switch (action.type) {
    case 'DATE_FROM':
      return { ...state, dateFrom: { value: action.value, isValid: action.isValid } };
    case 'DATE_TO':
      return { ...state, dateTo: { value: action.value, isValid: action.isValid } };
    case 'CHANGE_STATE':
      return { ...state, [action.stateToChange]: action.value };
    default:
      return { ...state };
  }
};
const RequestHoliday = ({ supervisors }) => {
  const classes = useStyles();

  const [state, dispatchModification] = useReducer(dateReducer, initialState);
  useEffect(() => {
    if (state.dateFrom.value > state.dateTo.value) dispatchModification({ ...state.dateFrom, type: 'DATE_TO' });
  }, [state.dateFrom]);

  const shouldDisableDate = day => (day.isoWeekday() === 6 || day.isoWeekday() === 7);
  const handleOnChangeSendRequestTo = event => dispatchModification(
    {
      type: 'CHANGE_STATE',
      stateToChange: 'sendRequestTo',
      value: { value: event.target.value, isValid: true }
    }
  );
  const handleChangeHolidayType = event => dispatchModification({ type: 'CHANGE_STATE', stateToChange: 'holidayType', value: { value: event.target.value, isValid: true } });
  const handleChangeNote = event => dispatchModification({ type: 'CHANGE_STATE', stateToChange: 'note', value: { value: event.target.value, isValid: true } });
  const handleDateChange = name => date => {
    dispatchModification({ type: name, value: date, isValid: true });
  };
  const validateForm = formData => {
    let isFormValid = true;
    if (formData.sendRequestTo.value.length === 0) {
      isFormValid = false;
      dispatchModification({
        type: 'CHANGE_STATE',
        stateToChange: 'sendRequestTo',
        value: { value: state.sendRequestTo.value, isValid: false }
      });
    }
    if (!formData.dateFrom.value) {
      dispatchModification({ type: 'DATE_FROM', value: '', isValid: false });
      isFormValid = false;
    }
    if (!formData.dateTo.value) {
      dispatchModification({ type: 'DATE_TO', value: '', isValid: false });
      isFormValid = false;
    }
    return isFormValid;
  };

  const handleSendClick = () => {
    if (!validateForm(state)) { return; }
    console.log({
      dateFrom: state.dateFrom.value,
      dateTo: state.dateTo.value,
      holidayType: state.holidayType,
      note: state.note,
      sendRequestTo: state.sendRequestTo.value
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
              value={state.dateFrom.value}
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
              minDate={state.dateFrom.value}
              variant="inline"
              label="End Date"
              format="MM/DD/YYYY"
              value={state.dateTo.value}
              onChange={handleDateChange('DATE_TO')}
              invalidDateMessage="You must select a correct date"
            />
          </Grid>
          <Grid
            item
            xs={12}
            className={classes.padding12}
          >
            <FormControl fullWidth error={!state.sendRequestTo.isValid}>
              <InputLabel>Send request to</InputLabel>
              <Select
                multiple
                required
                value={state.sendRequestTo.value}
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
              {!state.sendRequestTo.isValid && <FormHelperText>You must select at least one person</FormHelperText>}
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
                value={state.holidayType.value}
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
              value={state.note.value}
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
