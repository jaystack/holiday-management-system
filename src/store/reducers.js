import { combineReducers } from 'redux';

import { reducer as app } from './app';

import { reducer as profile } from './profile';

export default combineReducers({
  app,
  profile
});
