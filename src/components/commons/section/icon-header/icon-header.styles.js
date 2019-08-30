import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  iconPaper: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -theme.spacing(4),
  },
  icon: {
    color: theme.palette.common.white
  },
  divider: {
    margin: theme.spacing(1, 0),
  },
}));
