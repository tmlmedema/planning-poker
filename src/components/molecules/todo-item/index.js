import React from 'react';
import PropTypes from 'prop-types';

const ToDoItem = ({ id, status, text }) => {

    return (
        <div className={`todo ${status}`} aria-describedby={id}>
            <button type='button' className='todo-toggle'>
                <span>T</span>
            </button>
            <div id={id} className='todo-name'>{text}</div>
            <button type='button' className='todo-delete'>
                <span>X</span>
            </button>
        </div>
    );

};

ToDoItem.propTypes = {
    id: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};


export default ToDoItem;
