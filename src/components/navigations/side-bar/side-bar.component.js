import React from 'react';
import PropTypes from 'prop-types';

import Hidden from '@material-ui/core/Hidden';
import MaterialDrawer from '@material-ui/core/Drawer';

import Drawer from './drawer/drawer.container';

import useStyles from './side-bar.styles';

const SideBar = ({ isMobileDrawerOpened, toggleMobileDrawer }) => {
  const classes = useStyles();

  return (
    <nav className={classes.drawer}>
      <Hidden smUp>
        <MaterialDrawer
          variant="temporary"
          open={isMobileDrawerOpened}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={toggleMobileDrawer}
        >
          <Drawer />
        </MaterialDrawer>
      </Hidden>
      <Hidden xsDown>
        <MaterialDrawer
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Drawer />
        </MaterialDrawer>
      </Hidden>
    </nav>
  );
};

SideBar.propTypes = {
  isMobileDrawerOpened: PropTypes.bool.isRequired,
  toggleMobileDrawer: PropTypes.func.isRequired,
};

export default SideBar;
