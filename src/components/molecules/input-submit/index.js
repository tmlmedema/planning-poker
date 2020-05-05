import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'components/molecules/form-elements';
import { initialState } from './helper';

class InputSubmit extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    onHandleChange = (event) => {
        this.setState(previousState => ({
            ...previousState,
            input: event.value
        }));
    };

    onSubmit = (event) => {
        const { input } = this.state;
        if (input === '') {
            alert('You forgot the name of your new item');
            return false;
        }
        const { onSubmit } = this.props;
        this.setState(initialState);
        onSubmit(input);
    };

    render() {

        const { input } = this.state;

        return (
            <div className='input-submit'>
                <Input
                    name='inputField'
                    onHandleChange={this.onHandleChange}
                    placeholder='New item'
                    value={input}
                />
                <Button
                    action={this.onSubmit}
                    copy='Add item'
                    action={this.onSubmit}
                />
            </div>
        );
    }

};

InputSubmit.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default InputSubmit;
