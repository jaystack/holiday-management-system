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
    }
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: {
    position: 'relative',
    ...theme.mixins.toolbar
  },
  logo: {
    maxHeight: '100%',
    maxWidth: '100%',
    width: drawerWidth - 40,
    height: 'auto',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
  }
}));
