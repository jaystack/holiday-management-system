import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import SignUpExample from './signup-example/signup-example.container';
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
        <SignUpExample />
      </ContentWrapper>
    </div>
  );
};

export default App;
