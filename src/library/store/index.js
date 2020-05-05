/*
 *
 * Root Store
 *
 */

import { createStore, applyMiddleware } from 'redux';
import { combinedReducers } from './reducers';
import { combinedSagas } from '../saga';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    combinedReducers,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(combinedSagas);

export default store;
