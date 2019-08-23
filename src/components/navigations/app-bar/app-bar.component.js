import React from 'react';
import PropTypes from 'prop-types';
import MaterialAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuItem from '@material-ui/core/MenuItem';
import LoguoutIcon from '@material-ui/icons/ExitToApp';

import useStyles from './app-bar.styles';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const AppBar = ({ toggleMobileDrawer }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
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
          onClick={handleClick}
        >
          <AccountCircle />
        </IconButton>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <LoguoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </StyledMenuItem>
          </StyledMenu>
      </Toolbar>
    </MaterialAppBar>
  );
};

AppBar.propTypes = {
  toggleMobileDrawer: PropTypes.func.isRequired,
};

export default AppBar;
