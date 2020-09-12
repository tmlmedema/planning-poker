import React, { useState } from 'react';
import { Input, Button } from 'components/molecules/form-elements';
import { initialState } from './helper';

const JoinGame = () => {

    const [ formState, updateFormState ] = useState( initialState );
    const { gameId, email, name } = formState;

    const onHandleChange = target => updateFormState({
        ...formState,
        [target.id]: target.value
    });

    const onSubmitForm = event => {
        console.log(formState);
        event.preventDefault();
    };

    return (
        <form onSubmit={ event => onSubmitForm( event ) }>
            <h1 className="padding-bottom-0">Join game</h1>
            <Input
                name='gameId'
                onHandleChange={ target => onHandleChange( target ) }
                placeholder='Poker game'
                required={ true }
                value={ gameId }
            />
            <Input
                name='name'
                onHandleChange={ target => onHandleChange( target ) }
                placeholder='Your name'
                required={ true }
                value={ name }
            />
            <Input
                classes='margin-bottom-sm'
                name='email'
                onHandleChange={ target => onHandleChange( target ) }
                placeholder='Your email'
                required={ true }
                type='email'
                value={ email }
            />
            <Button type='submit' copy='Start game' />
        </form>
    );

};

export default JoinGame;
