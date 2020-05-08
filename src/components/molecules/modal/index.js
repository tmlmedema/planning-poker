import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'library/styles/components/molecules/modal.scss';
import { initialState } from './helper';

class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidUpdate() {
        const { active } = this.state;
        this.setState(previousState => ({
            ...previousState,
            active: !active
        }));
    }

    render() {

        const { component, display, onCloseModal, size } = this.props;
        const { active } = this.state;

        if (!display) return (null);

        const displayModal = active ? 'active' : '';

        return (
            <div className={`modal ${displayModal}`}>
                <button className='modal-close' onClick={onCloseModal}>X</button>
                <div className={`modal-viewport ${size}`}>
                    {component}
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    component: PropTypes.object.isRequired,
    display: PropTypes.bool,
    size: PropTypes.string
};

Modal.defaultProps = {
    display: false,
    size: 'small'
};

export default Modal;
