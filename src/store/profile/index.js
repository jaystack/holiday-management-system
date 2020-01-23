import { createAction, handleActions } from 'redux-actions';
import { put, takeLatest } from 'redux-saga/effects';
import { setAppWaiting, addAlert } from '../app';
/**
 * HELPERS
 */
const delay = ms => new Promise(res => setTimeout(res, ms));

/**
 * INITIAL STATE
 */

export const initialState = {
  userData: {
    fullName: '',
    jobTitle: '',
    jobLevel: '',
    skills: [''],
  }
};

/**
 * ACTION TYPES
 */


export const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
export const FETCH_USER_DATA = 'FETCH_USER_DATA';

/**
 * ACTION CREATORS
 */

export const updateUserData = createAction(
  UPDATE_USER_DATA
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
    [fetchUserData]: state => ({ ...state })
  },
  initialState
);

/**
 * SAGAS
 */

function* fetchUserDataSaga() {
  yield put(setAppWaiting(true));
  yield delay(2000);
  yield put(addAlert({ title: 'API SUCCESS', desc: 'api success desc', severity: 'success' }));
  yield put(addAlert({ title: 'API error', desc: 'api error desc', severity: 'error' }));
  yield put(updateUserData({
    fullName: 'Daniel Sábic',
    jobTitle: 'Software Developer',
    jobLevel: 'Junior',
    skills: ['nodejs', 'devops'],
  }));
  yield put(setAppWaiting(false));
}


/**
 * WATCHERS
 */

export function* watchFetchUserData() {
  yield takeLatest(FETCH_USER_DATA, fetchUserDataSaga);
}
