import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = ({ links = [] }) => {

    const linkItems = links.map(l => <NavLink key={l.link} to={l.link}>{l.label}</NavLink>);

    return (
        <nav className="navbar">
            <div className="container">{linkItems}</div>
        </nav>
    );
};

export default Navbar;