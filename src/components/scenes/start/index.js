import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Poker as Template } from 'components/templates/poker/';
import Button from 'components/atoms/button';

import 'library/styles/components/organisms/poker.scss';

const Poker = (props) => {

    return (
        <Template>
            <section className="title">
                <h1>Planning<br />Poker</h1>
                <div className="selection">
                    <Button
                        copy='Start'
                        action={() => console.log('Start a session')}
                    />
                    <Button
                        copy='Join'
                        action={() => console.log('Join a session')}
                    />
                </div>
            </section>
        </Template >
    );

};

Poker.propTypes = {};


export default Poker;
