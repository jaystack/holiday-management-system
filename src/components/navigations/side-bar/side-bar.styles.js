import { makeStyles } from '@material-ui/styles';
import { DRAWER_WITDH } from '../../../constants';

export default makeStyles(theme => ({
  grow: {
    flex: 1
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: DRAWER_WITDH,
      flexShrink: 0,
    }
  },
  drawerPaper: {
    width: DRAWER_WITDH,
  },
  toolbar: {
    position: 'relative',
    ...theme.mixins.toolbar
  },
  logo: {
    maxHeight: '100%',
    maxWidth: '100%',
    width: DRAWER_WITDH - 40,
    height: 'auto',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
  }
}));
