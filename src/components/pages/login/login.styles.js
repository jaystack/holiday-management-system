import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 3),
  },
  fullWidth: {
    width: '100%'
  },
  paddingFix: {
    padding: 12
  },
  heading: {
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 'bold',
    fontFamily: 'Manjari, sans-serif',
    color: '#2A7CC9',
    margin: 0,
  },
  buttonFix: {
    textAlign: 'center',
    margin: 10
  },
  halfWidth: {
    width: '50%'
  },
  logo: {
    width: 'auto',
    height: 40,
  },
  imageFix: {
    textAlign: 'center',
  }
}));
