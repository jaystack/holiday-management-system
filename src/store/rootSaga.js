import { all, fork } from 'redux-saga/effects';
import { watchFetchUserData, watchModifyUserData } from './profile';
import { watchAuthenticateUser, watchValidateJWTToken, watchReadJWTToken } from './login';

export default function* rootSaga() {
  yield all([
    fork(watchFetchUserData),
    fork(watchModifyUserData),
    fork(watchAuthenticateUser),
    fork(watchValidateJWTToken),
    fork(watchReadJWTToken),
  ]);
}
