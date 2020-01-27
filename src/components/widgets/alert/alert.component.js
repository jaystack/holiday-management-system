import React from 'react';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Snackbar from '@material-ui/core/Snackbar';
import PropTypes from 'prop-types';


const AlertTile = ({ alert, removeAlert }) => (
  alert && alert.title ? (
    <Snackbar
      open
      key={alert.id}
      autoHideDuration={6000}
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
      onClose={() => removeAlert(alert.id)}
    >
      <Alert
        onClose={() => removeAlert(alert.id)}
        severity={alert.severity || 'info'}
      >
        <AlertTitle>{alert.title}</AlertTitle>
        {alert.desc}
      </Alert>
    </Snackbar>
  ) : null
);

AlertTile.propTypes = {
  alert: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    id: PropTypes.number,
    severity: PropTypes.string,
  }).isRequired,
  removeAlert: PropTypes.func.isRequired,
};


export default AlertTile;
