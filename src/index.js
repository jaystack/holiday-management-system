import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './theme';
import store from './store/configureStore';
import history from './side-effects/history';

import MainRoutes from './routes/main-routes';

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <CssBaseline />
        <Router history={history}>
          <MainRoutes />
        </Router>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
