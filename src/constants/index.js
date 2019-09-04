import BeachAccess from '@material-ui/icons/BeachAccessOutlined';
import Dashboard from '@material-ui/icons/DashboardOutlined';
import Settings from '@material-ui/icons/SettingsApplicationsOutlined';
import Person from '@material-ui/icons/PersonOutlineOutlined';
import Mail from '@material-ui/icons/MailOutline';

export const DRAWER_WITDH = 250;

export const PRIMARY_MENU_ITEMS = [
  {
    key: 'dashboard-menu-item',
    title: 'Dashboard',
    path: '/',
    exact: true,
    icon: Dashboard
  },
  {
    key: 'request-holiday-menu-item',
    title: 'Request Holiday',
    path: '/request-holiday',
    exact: true,
    icon: BeachAccess
  },
  {
    key: 'profile-menu-item',
    title: 'Profile',
    path: '/profile',
    exact: true,
    icon: Person
  },
  {
    key: 'settings-menu-item',
    title: 'Settings',
    path: '/settings',
    exact: true,
    icon: Settings
  },
];

export const SECONDARY_MENU_ITEMS = [
  {
    key: 'contact-us-menu-item',
    title: 'Contact us',
    path: '/contact-us',
    icon: Mail
  }
];

export default {
  DRAWER_WITDH,
  PRIMARY_MENU_ITEMS,
  SECONDARY_MENU_ITEMS
};
