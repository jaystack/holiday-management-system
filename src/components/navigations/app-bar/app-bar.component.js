import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MaterialAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Hidden from '@material-ui/core/Hidden';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LoguoutIcon from '@material-ui/icons/ExitToApp';

import useStyles from './app-bar.styles';

const AppBar = ({ toggleMobileDrawer }) => {
  const [userAnchorEl, setUserAnchorEl] = React.useState(null);
  const classes = useStyles();
  const handleUserClick = e => setUserAnchorEl(e.currentTarget);
  const handleUserClose = () => setUserAnchorEl(null);
  return (
    <MaterialAppBar position="fixed" className={classes.appBar}>
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
        <Typography variant="h6" noWrap>
          Dashboard
        </Typography>
        <div className={classes.grow} />
        <IconButton color="inherit">
          <Badge badgeContent={3} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          edge="end"
          aria-haspopup="true"
          color="inherit"
          onClick={handleUserClick}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="user-menu"
          anchorEl={userAnchorEl}
          keepMounted
          open={Boolean(userAnchorEl)}
          onClose={handleUserClose}
        >
          <MenuItem>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <LoguoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </MenuItem>
        </Menu>
      </Toolbar>
    </MaterialAppBar>
  );
};

AppBar.propTypes = {
  toggleMobileDrawer: PropTypes.func.isRequired,
};

export default AppBar;
