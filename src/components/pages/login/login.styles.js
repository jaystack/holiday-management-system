import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  grid: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    width: 'auto',
    height: 40,
  },
  buttonContainer: {
    textAlign: 'center',
    margin: theme.spacing(2),
  },
  button: {
    width: '50%',
  },
}));
