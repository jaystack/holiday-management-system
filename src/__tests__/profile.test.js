import { put, call } from 'redux-saga/effects';
import * as profile from '../store/profile';
import * as app from '../store/app';
/**
 * MOCK DATA
 */
const hasUserDataState = {
  profile: {
    userData: {
      fullName: 'Daniel Sábic',
      jobTitle: 'Software Developer',
      jobLevel: 'Junior',
      skills: ['nodejs', 'devops'],
    }
  }
};

const userData = {
  fullName: 'Daniel Sábic',
  jobTitle: 'Software Developer',
  jobLevel: 'Junior',
  skills: ['nodejs', 'devops'],
};

const modifiedUserData = {
  fullName: 'Daniel Sábic',
  jobTitle: 'Software Developer',
  jobLevel: 'Junior',
  skills: ['nodejs', 'devops', 'newSkill'],
};

const apiErrorAlert = {
  title: 'API ERROR',
  desc: 'api success desc',
  severity: 'error'
};

const profileUpdatedAlert = {
  title: 'profile updated',
  desc: 'profile updated',
  severity: 'info'
};
const dummyError = Error('Something went wrong');

/**
 * ACTION CREATORS
 */
describe('actions', () => {
  it('fetchUserData', () => {
    const expectedAction = {
      type: profile.FETCH_USER_DATA,
    };
    expect(profile.fetchUserData()).toEqual(expectedAction);
  });
  it('modifyUserData', () => {
    const expectedAction = {
      type: profile.MODIFY_USER_DATA,
    };
    expect(profile.modifyUserData()).toEqual(expectedAction);
  });
  it('updateUserData', () => {
    const expectedAction = {
      type: profile.UPDATE_USER_DATA,
    };
    expect(profile.updateUserData()).toEqual(expectedAction);
  });
});
/**
 * SELECTORS
 */
describe('selectors', () => {
  it('getUserData', () => {
    expect(profile.getUserData(hasUserDataState)).toEqual(userData);
  });
});
/**
 * REDUCER
 */
describe('profile reducer', () => {
  it('should return the initial state', () => {
    expect(profile.reducer(undefined, {})).toEqual(profile.initialState);
  });

  it(profile.UPDATE_USER_DATA, () => {
    expect(
      profile.reducer(hasUserDataState, {
        type: profile.UPDATE_USER_DATA,
        payload: modifiedUserData
      })
    ).toHaveProperty('userData', modifiedUserData);
  });
});

/**
 * SAGAS
 */
describe('fetchUserDataSaga', () => {
  it('fetchUserDataSaga happy path', () => {
    const gen = profile.fetchUserDataSaga();
    expect(gen.next().value).toEqual(put(app.setAppWaiting(true)));
    expect(gen.next().value).toEqual(call(profile.delay, 2000));
    expect(gen.next().value).toEqual(put(app.addAlert({ title: 'API SUCCESS', desc: 'api success desc', severity: 'success' })));
    expect(gen.next().value).toEqual(put(profile.updateUserData({
      fullName: 'Daniel Sábic',
      jobTitle: 'Software Developer',
      jobLevel: 'Junior',
      skills: ['nodejs', 'devops'],
    })));
    expect(gen.next().value).toEqual(put(app.setAppWaiting(false)));
    expect(gen.next().done).toEqual(true);
  });

  it('fetchUserDataSaga unhappy path', () => {
    const gen = profile.fetchUserDataSaga();
    expect(gen.next().value).toEqual(put(app.setAppWaiting(true)));
    expect(gen.next().value).toEqual(call(profile.delay, 2000));
    expect(gen.throw(dummyError).value).toEqual(put(app.addAlert(apiErrorAlert)));
    expect(gen.next().value).toEqual(put(app.setAppWaiting(false)));
    expect(gen.next().done).toEqual(true);
  });
});
describe('modifyUserDataSaga', () => {
  it('modifyUserDataSaga happy path', () => {
    const gen = profile.modifyUserDataSaga({ payload: userData });
    expect(gen.next().value).toEqual(put(app.setAppWaiting(true)));
    expect(gen.next().value).toEqual(put(profile.updateUserData(userData)));
    expect(gen.next().value).toEqual(call(profile.delay, 2000));
    expect(gen.next().value).toEqual(put(app.addAlert(profileUpdatedAlert)));
    expect(gen.next().value).toEqual(put(app.setAppWaiting(false)));
    expect(gen.next().done).toEqual(true);
  });
  it('modifyUserDataSaga unhappy path', () => {
    const gen = profile.modifyUserDataSaga({ payload: userData });
    expect(gen.next().value).toEqual(put(app.setAppWaiting(true)));
    expect(gen.throw(dummyError).value).toEqual(put(app.addAlert(apiErrorAlert)));
    expect(gen.next().value).toEqual(put(app.setAppWaiting(false)));
    expect(gen.next().done).toEqual(true);
  });
});
