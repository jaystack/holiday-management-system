import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';

import rootSaga from './rootSaga';

const isDevelopment = process.env.NODE_ENV === 'development';

const sagaMiddleware = createSagaMiddleware();
const store = isDevelopment
  ? createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
  : createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
