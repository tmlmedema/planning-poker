import React, { Component } from 'react'
import Modal from 'components/molecules/modal';
import { Button, Input } from 'components/molecules/form-elements';
import Logo from 'components/atoms/logo';
import { initialState } from './helper';

class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    onHandleChange = (target) => {

        const { value, id } = target;
        this.setState(previousState => ({
            ...previousState,
            [id]: value
        }))

    };

    onSubmit = () => { };

    render() {

        const { email, password } = this.state;

        return (
            <Modal size='small'>
                <Logo
                    classes='padding-bottom-md'
                    type='icononly'
                    size='xlarge'
                    property='tml'
                />
                <Input
                    label='Email address'
                    name='email'
                    onHandleChange={this.onHandleChange}
                    placeholder='Email address'
                    value={email}
                />
                <Input
                    label='Password'
                    name='password'
                    onHandleChange={this.onHandleChange}
                    placeholder='Password'
                    type='password'
                    value={password}
                />
                <Button
                    copy='Submit'
                    action={this.onSubmit}
                />
            </Modal>
        );
    }

};

export default LogIn;
