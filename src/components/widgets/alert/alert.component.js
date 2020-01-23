import React from 'react';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

import PropTypes from 'prop-types';

const AlertTile = ({ alert, removeAlert }) => {
  if (!alert || !alert.title) {
    return null;
  }
  return (
    <Alert onClose={() => (removeAlert(alert.id))} severity="error">
      <AlertTitle>{alert.title}</AlertTitle>
      {alert.desc}
    </Alert>
  );
};

AlertTile.propTypes = {
  alert: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  removeAlert: PropTypes.func.isRequired,
};


export default AlertTile;
