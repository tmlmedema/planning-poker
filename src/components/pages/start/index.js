import React from 'react';
import { connect } from 'react-redux';
import PokerTemplate from 'components/templates/poker';
import Button from 'components/atoms/button';
import Modal from 'components/molecules/modal';
import { StartGame, JoinGame } from 'components/organisms/forms';
import { toggleModal } from 'library/store/ui/actions';
import 'library/styles/components/pages/start.scss';

const StartScreen = (props) => {

    const { toggleModal: modalToggle, ui: { modals } } = props;
    const { startGame, joinGame } = modals;

    return (
        <PokerTemplate>
            <section className="title">
                <h1>Planning<br />Poker</h1>
                <div className="selection">
                    <Button
                        copy='Start new'
                        action={ () => modalToggle('startGame') }
                    />
                    <Button
                        copy='Join existing'
                        action={ () => modalToggle('joinGame') }
                    />
                </div>
            </section>
            <Modal
                display={ startGame }
                size='medium'
                component={ <StartGame /> }
                onCloseModal={ () => modalToggle('startGame') }
                onSubmit={ () => console.log('Submit game') }
                key="startGameModal"
            />
            <Modal
                display={ joinGame }
                size='medium'
                component={ <JoinGame /> }
                onCloseModal={ () => modalToggle('joinGame') }
                onSubmit={ () => console.log('Join game') }
                key="joinGameModal"
            />
        </PokerTemplate >
    );

};

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    toggleModal: modalId => dispatch(toggleModal(modalId))
});

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);
