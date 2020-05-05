import React from 'react';
import Hamburger from 'components/atoms/hamburger';
import 'library/styles/components/organisms/header.scss';

const Header = ({ children, classes = '' }) => {

    return (
        <header className={`header ${classes}`}>
            {children}
            <Hamburger />
        </header>
    );

};

export default Header;
