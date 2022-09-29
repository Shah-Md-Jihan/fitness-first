import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='logo'>
                <h1>logo</h1>
            </div>
            <div className='nav'>
                <a href="/home">Home</a>
                <a href="/service">Services</a>
                <a href="/about">About Us</a>
                <a href="blog">Blog</a>
                <a href="contact">Contact Us</a>
            </div>
        </div>
    );
};

export default Header;