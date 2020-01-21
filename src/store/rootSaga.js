import { all } from 'redux-saga/effects';
import { profileSaga } from './profile';

function mainSaga() {
  console.log('Main Saga');
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    mainSaga(),
    profileSaga()
  ]);
}
