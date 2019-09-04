import { makeStyles } from '@material-ui/styles';
import { amber, green } from '@material-ui/core/colors';

export default makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
  },
  header: {
    color: theme.palette.common.white,
  },
  normalHeader: {
    minHeight: theme.spacing(10),
    marginTop: theme.spacing(5),
  },
  warning: {
    backgroundColor: amber[700],
  },
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
}));
