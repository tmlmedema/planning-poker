import React from "react";
import PropTypes from 'prop-types';

const Input = ({ help, label, name, onHandleChange, placeholder, type, value }) => {

    const describedBy = help ? `${name}Help` : `${name}Label`;

    const onUpdateInput = (event) => onHandleChange(event.target);

    return (
        <div className='form-element'>
            {
                label && <label id={`${name}Label`} htmlFor={name}>{label}</label>
            }
            <div className='input-container'>
                <input
                    aria-describedby={describedBy}
                    id={name}
                    onChange={onUpdateInput}
                    placeholder={placeholder}
                    value={value}
                    type={type}
                />
                {
                    value !== '' ? <div className='underline'>{value}</div> : ''
                }
            </div>
            {
                help && <small id={`${name}Help`}>{help}</small>
            }
        </div>
    );

}

Input.propTypes = {
    help: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    onHandleChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string
};

Input.defaultProps = {
    type: 'text',
    value: ''
};

export default Input;
