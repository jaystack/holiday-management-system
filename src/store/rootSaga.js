import { all, fork } from 'redux-saga/effects';
import { watchFetchUserData, watchHandleUserDataChange } from './profile';

export default function* rootSaga() {
  yield all([
    fork(watchFetchUserData),
    fork(watchHandleUserDataChange),
  ]);
}
