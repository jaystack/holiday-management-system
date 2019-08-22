import { makeStyles } from '@material-ui/styles';

const drawerWidth = 250; // TODO USE CONSTANTS

export default makeStyles(theme => ({
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  grow: {
    flex: 1
  },
}));
