import { makeStyles } from '@material-ui/styles';
import { amber, green } from '@material-ui/core/colors';

export default makeStyles(theme => ({
  iconPaper: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -theme.spacing(4),
    boxShadow: '0px 1px 3px 0px, 0px 1px 1px 0px, 0px 2px 1px -1px'
  },
  icon: {
    color: theme.palette.common.white
  },
  divider: {
    margin: theme.spacing(1, 0),
  },
  warning: {
    backgroundColor: amber[700],
    color: amber[700],
  },
  success: {
    backgroundColor: green[600],
    color: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
    color: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
  },
}));
