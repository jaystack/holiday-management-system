import { all, fork } from 'redux-saga/effects';
import { watchFetchUserData, modifyUserData } from './profile';

export default function* rootSaga() {
  yield all([
    fork(watchFetchUserData),
    fork(modifyUserData),
  ]);
}
