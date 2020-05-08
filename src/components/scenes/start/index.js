import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Poker as Template } from 'components/templates/poker/';
import Button from 'components/atoms/button';
import Modal from 'components/molecules/modal';
import { StartGame, JoinGame } from 'components/organisms/forms';
import { toggleModal } from 'library/store/ui/actions';
import 'library/styles/components/organisms/poker.scss';

const Poker = (props) => {

    const { toggleModal, ui: { modals } } = props;
    const { startGame, joinGame } = modals;

    return (
        <Template>
            <section className="title">
                <h1>Planning<br />Poker</h1>
                <div className="selection">
                    <Button
                        copy='Start new'
                        action={() => toggleModal('startGame')}
                    />
                    <Button
                        copy='Join existing'
                        action={() => toggleModal('joinGame')}
                    />
                </div>
            </section>
            <Modal
                display={startGame}
                size='small'
                component={<StartGame />}
                onCloseModal={() => toggleModal('startGame')}
                onSubmit={() => console.log('Submit game')}
                key="startGameModal"
            />
            <Modal
                display={joinGame}
                size='small'
                component={<JoinGame />}
                onCloseModal={() => toggleModal('joinGame')}
                onSubmit={() => console.log('Join game')}
                key="joinGameModal"
            />
        </Template >
    );

};

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    toggleModal: modalId => dispatch(toggleModal(modalId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Poker);

