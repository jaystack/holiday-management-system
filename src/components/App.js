import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';

import SignUpExample from './signup-example/signup-example.container';

import icons from '../side-effects/font-awesome';

library.add(...icons);

const App = () => (
  <SignUpExample />
);

export default App;
