import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 3),
  },
  fullWidth: {
    width: '100%'
  },
  buttonCentering: {
    textAlign: 'center',
    margin: theme.spacing(),
  },
  halfWidth: {
    width: '50%'
  },
  logo: {
    width: 'auto',
    height: 40,
  },
  mainGrid: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }
}));
