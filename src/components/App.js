import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';

import TextWithButton from './text-with-button/text-with-button.container';

import icons from '../side-effects/font-awesome';

library.add(...icons);

const App = () => (
  <TextWithButton />
);

export default App;
