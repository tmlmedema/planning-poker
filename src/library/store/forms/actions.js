/*
 *
 * Actions
 *
 */

import { createAction } from '../actions';

import {
    INITIAL_REQUEST,
    ADD_ITEMS
} from './action-types';

export const initialRequest = payload => createAction(INITIAL_REQUEST, {});

export const addItems = payload => createAction(ADD_ITEMS, payload);

