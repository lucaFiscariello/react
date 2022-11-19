import React from 'react';

const Header = ({ title, logo }) => {
    return (
        <header>
            <div className="container flex">
                <img className="logo" src={logo} alt="Logo" />
                <h1>{title}</h1>
            </div>
        </header>
    );
};

export default Header;