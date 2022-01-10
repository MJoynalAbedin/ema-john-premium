import React from 'react';
import Logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header-logo'>
            <img src={Logo} alt="" />
        </div>
    );
};

export default Header;