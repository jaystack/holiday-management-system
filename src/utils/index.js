import moment from 'moment';

// Time util functions
export const getCurrentTimestamp = () => moment().valueOf();
export const getFormattedDateFromTimestamp = timestamp => moment(timestamp).format('dd/mm/yyyy');
