import React from 'react';
import 'library/styles/components/atoms/hamburger.scss';

const Hamburger = ( props ) => {

    const { active } = props;

    const classes = active ? 'hamburger active' : 'hamburger';

    return (
        <button className={ classes }>
            <div className='wrapper'>
                <div className='bun'></div>
                <div className='patty'></div>
                <div className='bun'></div>
            </div>
        </button>

    );

};

export default Hamburger;
