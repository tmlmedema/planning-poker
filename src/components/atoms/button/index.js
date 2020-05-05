import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ copy, action, type }) => {

    return (
        <button type="button" className={`button ${type}`} onClick={action}>{copy}</button>
    );

};

Button.propTypes = {
    copy: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    type: PropTypes.string
}

export default Button;
