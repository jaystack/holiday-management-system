import React from 'react';
import MaterialAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Hidden from '@material-ui/core/Hidden';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';

import useStyles from './app-bar.styles';

const AppBar = ({ toggleMobileDrawer }) => {
  const classes = useStyles();
  return (
    <MaterialAppBar
      position="fixed"
      className={classes.appBar}
    >
      <Toolbar>
        <Hidden smUp implementation="css">
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => toggleMobileDrawer()}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Typography
          variant="h6"
          noWrap
        >
          Dashboard
        </Typography>
        <div
          className={classes.grow}
        />
        <IconButton
          color="inherit"
        >
          <Badge
            badgeContent={3}
            color="secondary"
          >
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          edge="end"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </MaterialAppBar>
  );
};

export default AppBar;
