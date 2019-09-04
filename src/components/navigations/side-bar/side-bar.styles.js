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
  }
}));
