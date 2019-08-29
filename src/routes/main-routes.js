import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from '../components/App';

const MainRoutes = () => (
  <Switch>
    {/* TODO: Add Login page route */}
    <Route component={App} />
  </Switch>
);

export default MainRoutes;
