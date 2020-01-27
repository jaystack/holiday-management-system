import React from 'react';
import PropTypes from 'prop-types';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

import Dialog from '@material-ui/core/Dialog';
import CircularProgress from '@material-ui/core/CircularProgress';

const AppProfile = ({ isAppWaiting }) => (
  <Dialog
    aria-labelledby="simple-dialog-title"
    open={isAppWaiting}
  >
    <DialogActions>
      <DialogTitle>Loading</DialogTitle>
      <DialogContent>
        <CircularProgress />
      </DialogContent>
    </DialogActions>
  </Dialog>
);

export default AppProfile;

AppProfile.propTypes = {
  isAppWaiting: PropTypes.bool.isRequired
};
