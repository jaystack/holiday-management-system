import { makeStyles } from '@material-ui/styles';
import { DRAWER_WITDH } from '../../../constants';

export default makeStyles(theme => ({
  appBar: {
    marginLeft: DRAWER_WITDH,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${DRAWER_WITDH}px)`,
    },
  },
  grow: {
    flex: 1
  },
}));
