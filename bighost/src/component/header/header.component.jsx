import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/code.svg';
import './header.styles.css';

const Header = () => (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo' />
        </Link>

        <div className='options'>
            <Link to="/home" className='option'>Home</Link>
            <Link to="/features" className='option'>Features</Link>
            <Link to="/contact" className='option'>Contact</Link>
        </div>

        <div className='sign-in-and-sign-up'>
            <Link to="/signin" className='sign'>Sign in</Link>
            <Link to="/signup" className='sign'>Register</Link>
        </div>
    </div>
);

export default Header;