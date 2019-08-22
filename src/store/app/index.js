import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

/**
 * INITIAL STATE
 */

export const initialState = {
  isMobileDrawerOpened: false,
  appWaiting: 0
};

/**
 * ACTION TYPES
 */

export const TOGGLE_MOBILE_DRAWER = 'TOGGLE_MOBILE_DRAWER';

export const SET_APP_WAITING = 'SET_APP_WAITING';

/**
 * ACTION CREATORS
 */

export const toggleMobileDrawer = createAction(
  TOGGLE_MOBILE_DRAWER
);

export const setAppWaiting = createAction(
  SET_APP_WAITING,
  waiting => waiting
);

/**
 * SELECTORS
 */

export const getIsMobileDrawerOpened = state => state.app.isMobileDrawerOpened;
export const getAppWaitingCounter = state => state.app.appWaiting;
export const getIsAppWaiting = createSelector(
  getAppWaitingCounter,
  counter => counter > 0
);

/**
 * REDUCER
 */

export const reducer = handleActions(
  {
    [toggleMobileDrawer]: state => ({ ...state, isMobileDrawerOpened: !state.isMobileDrawerOpened }),
    [setAppWaiting]: (state, { payload: waiting }) => ({
      ...state,
      appWaiting: waiting ? state.appWaiting + 1 : state.appWaiting - 1
    }),
  },
  initialState
);
