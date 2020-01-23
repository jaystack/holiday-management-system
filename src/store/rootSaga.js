import { all, fork } from 'redux-saga/effects';
import { watchFetchUserData } from './profile';

export default function* rootSaga() {
  yield all([
    fork(watchFetchUserData),
  ]);
}
