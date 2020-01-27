import { createAction, handleActions } from 'redux-actions';
import { put, takeLatest } from 'redux-saga/effects';
import { setAppWaiting, addAlert } from '../app';

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
export const HANDLE_USER_DATA_CHANGE = 'HANDLE_USER_DATA_CHANGE';

export const FETCH_USER_DATA = 'FETCH_USER_DATA';

/**
 * ACTION CREATORS
 */

export const updateUserData = createAction(
  UPDATE_USER_DATA
);

export const handleUserDataChange = createAction(
  HANDLE_USER_DATA_CHANGE
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

function* fetchUserDataSaga() {
  yield put(setAppWaiting(true));
  try {
    yield delay(1000);
    yield put(addAlert({ title: 'API SUCCESS', desc: 'api success desc', severity: 'success' }));
    yield put(updateUserData({
      fullName: 'Daniel Sábic',
      jobTitle: 'Software Developer',
      jobLevel: 'Junior',
      skills: ['nodejs', 'devops'],
    }));
  } catch (err) {
    yield put(addAlert({ title: 'API ERROR', desc: 'api success desc', severity: 'error' }));
  } finally { yield put(setAppWaiting(false)); }
}

function* handleUserDataChangeSaga({ payload: userData }) {
  try {
    yield put(setAppWaiting(true));
    yield put(updateUserData(userData));
    yield put(addAlert({ title: 'profile updated', desc: 'profile updated', severity: 'info' }));
  } catch (err) {
    yield put(addAlert({ title: 'API ERROR', desc: 'api success desc', severity: 'error' }));
  } finally { yield put(setAppWaiting(false)); }
}
/**
 * WATCHERS
 */

export function* watchFetchUserData() {
  yield takeLatest(FETCH_USER_DATA, fetchUserDataSaga);
}
export function* watchHandleUserDataChange() {
  yield takeLatest(handleUserDataChange, handleUserDataChangeSaga);
}


/**
 * HELPERS
 */
const delay = ms => new Promise(res => setTimeout(res, ms));
