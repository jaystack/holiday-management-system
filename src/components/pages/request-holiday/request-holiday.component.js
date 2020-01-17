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
  notes: { value: '', isValid: true },
  dateFrom: { value: moment(), isValid: true },
  dateTo: { value: moment(), isValid: true },
  requestedSupervisors: { value: [], isValid: true }
};
const reducer = (state, {
  type, payload
}) => {
  console.log(type, payload);
  switch (type) {
    case 'DATE_FROM':
      return { ...state, dateFrom: payload };
    case 'DATE_TO':
      return { ...state, dateTo: payload };
    default:
      return { ...state, [payload.name]: payload };
  }
};
const RequestHoliday = ({ supervisors }) => {
  const classes = useStyles();

  const [state, dispatchModification] = useReducer(reducer, initialState);
  useEffect(() => {
    if (state.dateFrom.value > state.dateTo.value) dispatchModification({ ...state.dateFrom, type: 'DATE_TO' });
  }, [state.dateFrom]);

  const shouldDisableDate = day => (day.isoWeekday() === 6 || day.isoWeekday() === 7);
  const handleChange = ({ target }) => { dispatchModification({ payload: target, isValid: true }); };
  const handleDateChange = name => date => {
    dispatchModification({ type: name, value: date, isValid: true });
  };
  const validateForm = formData => {
    let isFormValid = true;
    if (formData.requestedSupervisors.value.length === 0) {
      isFormValid = false;
      dispatchModification({
        type: 'CHANGE_STATE',
        stateToChange: 'requestedSupervisors',
        value: { value: state.requestedSupervisors.value, isValid: false }
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
      notes: state.notes,
      requestedSupervisors: state.requestedSupervisors.value
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
              name="DATE_TO"
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
            <FormControl fullWidth error={!state.requestedSupervisors.isValid}>
              <InputLabel>Send request to</InputLabel>
              <Select
                name="requestedSupervisors"
                multiple
                required
                value={state.requestedSupervisors.value}
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
                {supervisors.map(supervisor => (
                  <MenuItem key={supervisor} value={supervisor}>
                    {supervisor}
                  </MenuItem>
                ))}
              </Select>
              {!state.requestedSupervisors.isValid && <FormHelperText>You must select at least one person</FormHelperText>}
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
                name="holidayType"
                value={state.holidayType.value}
                required
                onChange={handleChange}
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
              name="notes"
              type="text"
              label="Notes"
              multiline
              value={state.notes.value}
              className={classes.fullWidth}
              rowsMax={10}
              onChange={handleChange}
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
