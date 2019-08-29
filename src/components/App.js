import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import RequestForm from './pages/request-form/request-form.container';
import ContentWrapper from './commons/content-wrapper/content-wrapper.container';
import AppBar from './navigations/app-bar/app-bar.container';
import SideBar from './navigations/side-bar/side-bar.container';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <SideBar />
      <AppBar />
      <ContentWrapper>
        <RequestForm />
      </ContentWrapper>
    </div>
  );
};

export default App;
