/*
 *
 * Combined reducers
 *
 */

import { combineReducers } from 'redux';
import UIReducer from './ui/reducers';

export const combinedReducers = combineReducers({
    ui: UIReducer
})

export default combinedReducers;
