import { createMuiTheme } from '@material-ui/core/styles';
import 'source-sans-pro/source-sans-pro.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#5496d3',
      main: '#2A7CC9',
      dark: '#1d568c',
      contrastText: '#FFF'
    },
    secondary: {
      light: '#40b0b6',
      main: '#119DA4',
      dark: '#0b6d72',
      contrastText: '#FFF'
    },
    background: {
      default: '#eceff1'
    },
  },
  typography: {
    fontFamily: 'Source Sans Pro',
  },
});

export default theme;
