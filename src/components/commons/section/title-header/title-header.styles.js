import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  paper: {
    width: '100%',
    minHeight: theme.spacing(10),
    marginTop: -theme.spacing(4),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2),
  },
  title: {
    color: theme.palette.common.white,
  },
}));
