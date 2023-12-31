import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg';


const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt='logo' />
            <nav className='nav'>
                <a href="">Order</a>
                <a href="">Order Review</a>
                <a href="">Manage Inventory</a>
                <a href="">Login</a>
            </nav>
        </div>
    )
};

export default Header;