import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Dashboard from '../components/pages/dashboard/dashboard.container';
import RequestHoliday from '../components/pages/request-holiday/request-holiday.container';

const AppRoutes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={Dashboard}
    />
    <Route
      exact
      path="/request-holiday"
      component={RequestHoliday}
    />
    <Redirect to="/" />
  </Switch>
);

export default AppRoutes;
