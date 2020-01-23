import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { takeLatest } from 'redux-saga/effects';

/**
 * INITIAL STATE
 */

export const initialState = {
  isMobileDrawerOpened: false,
  appWaiting: 0,
  alerts: [],
};

/**
 * ACTION TYPES
 */

export const TOGGLE_MOBILE_DRAWER = 'TOGGLE_MOBILE_DRAWER';

export const SET_APP_WAITING = 'SET_APP_WAITING';

export const ADD_ALERT = 'ADD_ALERT';

export const REMOVE_ALERT = 'REMOVE_ALERT';


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

export const addAlert = createAction(
  ADD_ALERT,
  alert => alert
);

export const removeAlert = createAction(
  REMOVE_ALERT,
  alertId => alertId
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
export const isThereAlert = state => state.app.alerts.length > 0;
export const getAlerts = state => state.app.alerts;

export const getLastAlert = createSelector(
  getAlerts,
  alerts => {
    const alert = alerts[alerts.length - 1] || {};
    alert.id = alerts.length - 1;
    return alert;
  }
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
    [addAlert]: (state, { payload: alert }) => ({
      ...state,
      alerts: [...state.alerts, alert]
    }),
    [removeAlert]: (state, { payload: alertId }) => ({
      ...state,
      alerts: [...state.alerts.filter((value, index) => (index !== alertId))]
    }),
  },
  initialState
);

/**
 * SAGAS
 */

/**
 * WATCHERS
 */

export function* watchAddAlert() {
  yield takeLatest(ADD_ALERT, addAlert);
}
