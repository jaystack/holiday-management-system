import { createAction, handleActions } from 'redux-actions';
import {
  put, takeLatest, call, select
} from 'redux-saga/effects';
import { createSelector } from 'reselect';
import history from '../../side-effects/history';
import { setAppWaiting } from '../app';
import authenticate from '../../api/auth';
import getUserData from '../../api/users';

/**
 * INITIAL STATE
 */

export const initialState = {
  jwtToken: localStorage.getItem('jwtToken') || '',
  user: {
    email: '',
    password: '',
  },
  isAuthSuccessful: false,
  authError: {},
};

/**
 * ACTION TYPES
 */
export const SET_USER_CREDENTIALS = 'SET_USER_CREDENTIALS';

export const SET_JWT_TOKEN = 'SET_JWT_TOKEN';


export const SET_AUTH_ERROR = 'SET_AUTH_ERROR';

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';

export const VALIDATE_JWT_TOKEN = 'VALIDATE_JWT_TOKEN';

export const AUTHENTICATION_SUCCESSFUL = 'AUTHENTICATION_SUCCESSFUL';

export const AUTHENTICATION_UNSUCCESSFUL = 'AUTHENTICATION_UNSUCCESSFUL';

/**
 * ACTION CREATORS
 */


export const setUserCredentials = createAction(
  SET_USER_CREDENTIALS,
  payload => payload
);

export const setJwtToken = createAction(
  SET_JWT_TOKEN,
  jwtToken => jwtToken
);

export const setAuthError = createAction(
  SET_AUTH_ERROR,
  error => error
);

export const authenticateUser = createAction(
  AUTHENTICATE_USER
);

export const validateJwtToken = createAction(
  VALIDATE_JWT_TOKEN,
  jwtToken => jwtToken
);
export const authenticationSuccessful = createAction(
  AUTHENTICATION_SUCCESSFUL,
);

export const authenticationUnsuccessful = createAction(
  AUTHENTICATION_UNSUCCESSFUL,
);

/**
 * SELECTORS
 */

export const getIsAuthSuccessful = state => state.login.isAuthSuccessful;
export const getUserCredentials = state => state.login.user;
export const getAuthError = state => state.login.authError;
export const getJwtToken = state => state.login.jwtToken;
export const getIsAuthenticated = createSelector(getIsAuthSuccessful,
  getJwtToken,
  (isAuthSuccessful,
    jwtToken) => jwtToken && isAuthSuccessful === true);
/**
 * REDUCER
 */

export const reducer = handleActions(
  {
    [setAuthError]: (state, { payload: error }) => (
      {
        ...state,
        authError: error
      }
    ),
    [setUserCredentials]: (state, { payload: { id, value } }) => (
      {
        ...state,
        user: {
          ...state.user,
          [id]: value
        }
      }
    ),
    [setJwtToken]: (state, { payload: jwtToken }) => (
      {
        ...state,
        jwtToken
      }
    ),
    [authenticationSuccessful]: state => ({
      ...state,
      isAuthSuccessful: true,
    }),
    [authenticationUnsuccessful]: state => ({
      ...state,
      isAuthSuccessful: false,
    }),
  },
  initialState
);

/**
 * SAGAS
 */

export function* authenticateUserSaga() {
  try {
    const { email, password } = yield select(getUserCredentials);
    yield put(setAppWaiting(true));
    const response = yield call(authenticate, email, password);
    const { token: jwtToken } = response.data;
    yield call(validateJWTTokenSaga, { payload: jwtToken });
  } catch (err) {
    const { message } = err;
    yield put(authenticationUnsuccessful());
    yield put(setAuthError({ message }));
  } finally {
    yield put(setAppWaiting(false));
  }
}

export function* validateJWTTokenSaga({ payload: jwtToken }) {
  try {
    yield put(setAppWaiting(true));
    yield call(getUserData, jwtToken);
    yield put(setJwtToken(jwtToken));
    yield put(authenticationSuccessful());
    yield put(setAuthError({}));
    localStorage.setItem('jwtToken', jwtToken);
    history.push('');
  } catch (err) {
    const { message } = err;
    yield put(authenticationUnsuccessful());
    yield put(setAuthError({ message }));
    localStorage.removeItem('jwtToken');
  } finally {
    yield put(setAppWaiting(false));
  }
}
/**
 * WATCHERS
 */

export function* watchAuthenticateUser() {
  yield takeLatest(AUTHENTICATE_USER, authenticateUserSaga);
}

export function* watchValidateJWTToken() {
  yield takeLatest(VALIDATE_JWT_TOKEN, validateJWTTokenSaga);
}
