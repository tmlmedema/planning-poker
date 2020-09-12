import React from 'react';
import PropTypes from 'prop-types';

const PokerTemplate = ({ children, classes, background }) => {
    return (
        <div className={`template poker ${classes}`}>
            <main className='main'>
                <div className={`appWrapper ${background}`}>
                    {children}
                </div>
            </main>
        </div>
    );
};

PokerTemplate.propTypes = {
    background: PropTypes.string,
    classes: PropTypes.string
};

PokerTemplate.defaultProps = {
    background: '',
    classes: '',
    children: <h1>Poker template</h1>
};

export default PokerTemplate;
