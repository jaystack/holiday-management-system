import { all, fork } from 'redux-saga/effects';
import { watchFetchUserData } from './profile';
import { watchAddAlert } from './app';
// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    fork(watchFetchUserData),
    fork(watchAddAlert),
  ]);
}
