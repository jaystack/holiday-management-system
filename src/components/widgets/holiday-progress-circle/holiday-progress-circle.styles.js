import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  container: {
    padding: theme.spacing(2, 0),
  },
  circleContainer: {
    position: 'relative',
  },
  greyCircle: {
    position: 'absolute',
    color: theme.palette.grey['300']
  },
  numberContainer: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  remainingNumber: {
    fontWeight: 500,
  },
}));
