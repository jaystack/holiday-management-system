import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from '../components/App';
import Login from '../components/pages/login/login.container';
import ProtectedRoute from '../components/commons/protected-route/protected-route.container';

const MainRoutes = () => (
  <Switch>
    <Route
      path="/login"
      component={Login}
    />
    <ProtectedRoute component={App} />

  </Switch>
);

export default MainRoutes;
