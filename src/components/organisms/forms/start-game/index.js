import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'components/molecules/form-elements';
import { initialState } from './helper';

class StartGame extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    render() {

        const { email, name } = this.state;

        return (
            <>
                <h1 className="padding-bottom-0">Start new</h1>
                <Input
                    name='name'
                    onHandleChange={this.onHandleChange}
                    placeholder='Your name'
                    value={name}
                />
                <Input
                    classes='margin-bottom-sm'
                    name='email'
                    onHandleChange={this.onHandleChange}
                    placeholder='Your email'
                    type='email'
                    value={email}
                />
                <Button
                    action={this.onSubmitForm}
                    copy='Start game'
                />
            </>
        );
    }

    onHandleChange = (event) => {
        const { id, value } = event;
        this.setState(previousState => ({
            ...previousState,
            [id]: value
        }));
    }

    onSubmitForm = () => {
        console.log(this.state);
    }

};

export default StartGame;
