/*
 *
 * Actions
 *
 */

import { createAction } from '../actions';

import {
    TOGGLE_MODAL
} from './action-types';

export const toggleModal = modalId => createAction(TOGGLE_MODAL, modalId);


