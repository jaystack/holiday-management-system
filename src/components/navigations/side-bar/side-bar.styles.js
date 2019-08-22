import { makeStyles } from '@material-ui/styles';

const drawerWidth = 250; // TODO USE CONSTANTS

export default makeStyles(theme => ({
  grow: {
    flex: 1
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar
}));
