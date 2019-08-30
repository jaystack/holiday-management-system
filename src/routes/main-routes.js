import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from '../components/App';
import LoginPage from '../components/pages/login/login.container';

const MainRoutes = () => (
  <Switch>
    <Route path="/login" component={LoginPage} />
    {/* TODO: Add Login page route */}
    <Route component={App} />
  </Switch>
);

export default MainRoutes;
