import { createAction, handleActions } from 'redux-actions';
// import { put, takeEvery } from 'redux-saga/effects';

/**
 * INITIAL STATE
 */

export const initialState = {
  userData: {
    fullName: 'Daniel Sábic',
    jobTitle: 'Software Developer',
    jobLevel: 'Junior',
    skills: ['nodejs', 'devops'],
  }
};

/**
 * ACTION TYPES
 */


export const UPDATE_USER_DATA = 'UPDATE_USER_DATA';

/**
 * ACTION CREATORS
 */

export const updateUserData = createAction(
  UPDATE_USER_DATA
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
      userData
    })
  },
  initialState
);

/**
 * SAGAS
 */

export function profileSaga() {
  console.log('Profile Saga');
}
