import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/organisms/header';

const display = false;

export const Poker = ({ children, classes, background }) => {

    return (
        <div className={`template poker ${classes}`}>
            {
                display &&
                <Header>
                    <h1>Planning Poker</h1>
                </Header>
            }
            <main className='main'>
                <div className={`appWrapper ${background}`}>
                    {children}
                </div>
            </main>
        </div>
    );

};

Poker.propTypes = {
    background: PropTypes.string,
    classes: PropTypes.string
};

Poker.defaultProps = {
    background: '',
    classes: '',
    children: <h1>Poker template</h1>
};
