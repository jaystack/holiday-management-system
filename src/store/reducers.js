import { combineReducers } from 'redux';

import { reducer as example } from './example';
import { reducer as app } from './app';

export default combineReducers({
  example,
  app
});
