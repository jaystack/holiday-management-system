import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HolidayProgressCircle from '../../../widgets/holiday-progress-circle/holiday-progress-circle.container';

import {
  PRIMARY_MENU_ITEMS,
  SECONDARY_MENU_ITEMS
} from '../../../../constants';

import useStyles from './drawer.styles';

const Drawer = ({ location: { pathname } }) => {
  const classes = useStyles();

  const isMenuSelected = ({ path, exact }) => (exact ? path === pathname : pathname.includes(path));

  return (
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
        {PRIMARY_MENU_ITEMS.map(menu => (
          <ListItem
            key={menu.key}
            component={Link}
            to={menu.path}
            selected={isMenuSelected(menu)}
            button
          >
            <ListItemIcon>
              <menu.icon />
            </ListItemIcon>
            <ListItemText primary={menu.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {SECONDARY_MENU_ITEMS.map(menu => (
          <ListItem
            key={menu.key}
            component={Link}
            to={menu.path}
            selected={isMenuSelected(menu)}
            button
          >
            <ListItemIcon>
              <menu.icon />
            </ListItemIcon>
            <ListItemText primary={menu.title} />
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
};

Drawer.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(Drawer);
