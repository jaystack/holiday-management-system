import { combineReducers } from 'redux';

import { reducer as app } from './app';

import { reducer as profile } from './profile';

import { reducer as login } from './login';


export default combineReducers({
  app,
  profile,
  login,
});
