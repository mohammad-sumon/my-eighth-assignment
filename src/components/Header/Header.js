import React from 'react';
import './Header.css';
import logo from '../../gym-logo.jpg';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <img className='logo' src={logo} alt="" />
                <h1>Body Fit Gym</h1>
            </div>
            <h3 className='subtitle'>Choose Your Exercise</h3>
        </div>
        
    );
};

export default Header;