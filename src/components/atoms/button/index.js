import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ copy, action, type }) => {

    if(type === 'submit'){

        return (
            <button type="submit" className={`button ${type}`}>{copy}</button>
        );

    }

    return (
        <button type="button" className={`button ${type}`} onClick={action}>{copy}</button>
    );

};

Button.propTypes = {
    copy: PropTypes.string.isRequired,
    action: PropTypes.func,
    type: PropTypes.string
}

export default Button;
