import React, { Fragment } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';

import SignUpExample from './signup-example/signup-example.container';
import AppBar from './navigations/app-bar/app-bar.container';
import SideBar from './navigations/side-bar/side-bar.container';

import icons from '../side-effects/font-awesome';

library.add(...icons);

const App = () => (
  <Fragment>
    <SideBar />
    <AppBar />
    <SignUpExample />
  </Fragment>
);

export default App;
