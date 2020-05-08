/*
 *
 * Constants
 *
 */

export const NAME = 'ToDo Lists';
export const NAMESPACE = 'TODO';
export const KEY = 'todo';

export const initialState = {
    entries: [],
    newItemState: {
        dueDate: '',
        assignedTo: '',
        id: '',
        status: 'active',
        text: '',
        comments: []
    }
};

