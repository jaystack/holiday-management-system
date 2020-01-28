import React from 'react';

import ContentWrapper from './commons/content-wrapper/content-wrapper.container';
import AppBar from './navigations/app-bar/app-bar.container';
import SideBar from './navigations/side-bar/side-bar.container';

import AppRoutes from '../routes/app-routes';
import AlertTile from './widgets/alert/alert.container';
import useStyles from './styles';
import AppProgress from './widgets/app-progress/app-progress.container';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SideBar />
      <AppBar />
      <ContentWrapper>
        <AppProgress />
        <AlertTile />
        <AppRoutes />
      </ContentWrapper>
    </div>
  );
};

export default App;
