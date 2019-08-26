import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  toolbar: theme.mixins.toolbar
}));
