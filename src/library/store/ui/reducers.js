/*
 *
 * Reducers
 *
 */
import { initialState } from './constants';
import { TOGGLE_MODAL } from './action-types';

const toggleModal = (previousState, modalId = '') => {
    return ({
        ...previousState,
        modals: {
            ...previousState.modals,
            [modalId]: !previousState.modals[modalId]
        }
    })
};

const functionMapping = {
    [TOGGLE_MODAL]: toggleModal
};

export const UIReducer = (state = initialState, action) => {

    const { type, payload } = action;

    if (!functionMapping[type]) return state;

    const newState = functionMapping[type](state, payload);

    return ({
        ...state,
        ...newState
    });

};

export default UIReducer;
