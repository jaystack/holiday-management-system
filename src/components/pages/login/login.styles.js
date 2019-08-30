import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  buttonContainer: {
    textAlign: 'center',
    margin: theme.spacing(2),
  },
  halfWidth: {
    width: '50%',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    width: 'auto',
    height: 40,
  },
  mainGrid: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}));
