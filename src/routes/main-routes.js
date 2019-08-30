import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from '../components/App';
import Login from '../components/pages/login/login.container';

const MainRoutes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route component={App} />
  </Switch>
);

export default MainRoutes;
