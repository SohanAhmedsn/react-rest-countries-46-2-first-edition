import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
          
            <nav>
                <a href="/home">Home</a>
                <a href="/products">Products</a>
                <a href="/country">Country</a>
                <a href="/place">Place</a>
                <a href="/about">About</a>
             
            </nav>
            
        </div>
    );
};

export default Header;