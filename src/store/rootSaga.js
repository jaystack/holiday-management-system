import { all, fork } from 'redux-saga/effects';
import { watchFetchUserData, watchModifyUserData } from './profile';

export default function* rootSaga() {
  yield all([
    fork(watchFetchUserData),
    fork(watchModifyUserData),
  ]);
}
