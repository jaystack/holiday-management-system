import { makeStyles } from '@material-ui/styles';
import { amber, green } from '@material-ui/core/colors';

export default makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
  },
  headerPaper: {
    boxShadow: '0px 1px 3px 0px, 0px 1px 1px 0px, 0px 2px 1px -1px',
  },
  normalHeader: {
    minHeight: theme.spacing(10),
    marginTop: theme.spacing(5),
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
