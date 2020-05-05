/*
 *
 * Reducers
 *
 */
import { initialState } from './constants';
import { ADD_ITEMS } from './action-types';

const { newItemState } = initialState;

const addItems = (state, payload = {}) => {

    const { items } = state;
    const newItem = {
        ...newItemState,
        id: Date.now(),
        text: payload
    };
    items.push(newItem);

    return ({
        ...state,
        items: items
    })

};

const functionMapping = {
    [ADD_ITEMS]: addItems
};

export const ToDoReducer = (state = initialState, action) => {

    const { type, payload } = action;

    if (!functionMapping[type]) return state;

    const newState = functionMapping[type](state, payload);

    return ({
        ...state,
        ...newState
    });

};

export default ToDoReducer;
