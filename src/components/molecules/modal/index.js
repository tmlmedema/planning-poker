import React from 'react';
import PropTypes from 'prop-types';
import 'library/styles/components/molecules/modal.scss';

const Modal = ( { children, size } ) => {

    return(
        <div className="modal">
            <div className={ `modal-viewport ${ size }` }>
                { children }
            </div>
        </div>
    );

};

Modal.propTypes = {
    children: PropTypes.array,
    size: PropTypes.string
};

Modal.defaultProps = {
    children: <h1>This is an empty modal</h1>,
    size: 'small'
};

export default Modal;
