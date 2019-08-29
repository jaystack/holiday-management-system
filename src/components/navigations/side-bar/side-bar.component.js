import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BeachAccess from '@material-ui/icons/BeachAccessOutlined';
import Dashboard from '@material-ui/icons/DashboardOutlined';
import Settings from '@material-ui/icons/SettingsApplicationsOutlined';
import Person from '@material-ui/icons/PersonOutlineOutlined';
import Mail from '@material-ui/icons/MailOutline';

import HolidayProgressCircle from '../../widgets/holiday-progress-circle/holiday-progress-circle.container';

import useStyles from './side-bar.styles';

const SideBar = ({ isMobileDrawerOpened, toggleMobileDrawer }) => {
  const classes = useStyles();

  const drawer = (
    <Fragment>
      <div className={classes.toolbar}>
        <img
          src="/images/js-logo-b.png"
          alt="JayStack logo"
          className={classes.logo}
          draggable={false}
        />
      </div>
      <Divider />
      <HolidayProgressCircle />
      <Divider />
      <List className={classes.mainList}>
        <ListItem button>
          <ListItemIcon><Dashboard /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button selected>
          <ListItemIcon><BeachAccess /></ListItemIcon>
          <ListItemText primary="Request Holiday" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Person /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Settings /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon><Mail /></ListItemIcon>
          <ListItemText primary="Contact us" />
        </ListItem>
      </List>
    </Fragment>
  );

  return (
    <nav className={classes.drawer}>
      <Hidden smUp>
        <Drawer
          variant="temporary"
          open={isMobileDrawerOpened}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={toggleMobileDrawer}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown>
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

SideBar.propTypes = {
  isMobileDrawerOpened: PropTypes.bool.isRequired,
  toggleMobileDrawer: PropTypes.func.isRequired,
};

export default SideBar;
