/*
 *
 * Combined reducers
 *
 */

import { combineReducers } from 'redux';
import ToDoReducer from './todo/reducers';

export const combinedReducers = combineReducers({
    todo: ToDoReducer
})

export default combinedReducers;
