import { createAction, handleActions } from 'redux-actions';
import {
  put, takeLatest, call, select
} from 'redux-saga/effects';
import { setAppWaiting, addAlert } from '../app';
import { getJwtToken } from '../login';
import { getUser, updateUser } from '../../api/users';

/**
 * INITIAL STATE
 */

export const initialState = {
  userData: {
    fullName: '',
    jobTitle: '',
    jobLevel: '',
    skills: [],
  }
};

/**
 * ACTION TYPES
 */

export const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
export const MODIFY_USER_DATA = 'MODIFY_USER_DATA';
export const FETCH_USER_DATA = 'FETCH_USER_DATA';

/**
 * ACTION CREATORS
 */

export const updateUserData = createAction(
  UPDATE_USER_DATA
);

export const modifyUserData = createAction(
  MODIFY_USER_DATA
);

export const fetchUserData = createAction(
  FETCH_USER_DATA
);

/**
 * SELECTORS
 */

export const getUserData = state => state.profile.userData;

/**
 * REDUCER
 */

export const reducer = handleActions(
  {
    [updateUserData]: (state, { payload: userData }) => ({
      ...state,
      userData,
    }),
  },
  initialState
);

/**
 * SAGAS
 */

export function* fetchUserDataSaga() {
  yield put(setAppWaiting(true));
  try {
    const jwtToken = yield select(getJwtToken);
    const { data: userData } = yield call(getUser, jwtToken);
    yield put(updateUserData(userData));
  } catch (err) {
    console.log(err);
    yield put(addAlert({ title: 'API ERROR', desc: 'api success desc', severity: 'error' }));
  } finally {
    yield put(setAppWaiting(false));
  }
}

export function* modifyUserDataSaga({ payload: userData }) {
  try {
    yield put(setAppWaiting(true));
    const jwtToken = yield select(getJwtToken);
    yield call(updateUser, jwtToken, userData);
    yield put(updateUserData(userData));
    yield put(addAlert({ title: 'profile updated', desc: 'profile updated', severity: 'info' }));
  } catch (err) {
    yield put(addAlert({ title: 'API ERROR', desc: `api error: ${err.message}`, severity: 'error' }));
  } finally {
    yield put(setAppWaiting(false));
  }
}
/**
 * WATCHERS
 */

export function* watchFetchUserData() {
  yield takeLatest(FETCH_USER_DATA, fetchUserDataSaga);
}
export function* watchModifyUserData() {
  yield takeLatest(MODIFY_USER_DATA, modifyUserDataSaga);
}

/**
 * HELPERS
 */
export const delay = ms => new Promise(res => setTimeout(res, ms));
