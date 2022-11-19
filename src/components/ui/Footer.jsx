import React from 'react';

const Footer = ({ logo, text }) => {
    return (
        <footer>
            <img className="logo" src={logo} alt="Logo" />
            <span>{text}</span>
        </footer>
    );
};

export default Footer;