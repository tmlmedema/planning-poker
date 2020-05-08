import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'components/molecules/form-elements';
import { initialState } from './helper';

class JoinGame extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    render() {

        const { gameId, email, name } = this.state;

        return (
            <>
                <h1 className="padding-bottom-0">Join game</h1>
                <Input
                    name='gameId'
                    onHandleChange={this.onHandleChange}
                    placeholder='Poker game'
                    required={true}
                    value={gameId}
                />
                <Input
                    name='name'
                    onHandleChange={this.onHandleChange}
                    placeholder='Your name'
                    required={true}
                    value={name}
                />
                <Input
                    classes='margin-bottom-sm'
                    name='email'
                    onHandleChange={this.onHandleChange}
                    placeholder='Your email'
                    required={true}
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

export default JoinGame;
