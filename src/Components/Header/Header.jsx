import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div>
            <h1>This is Header</h1>
            <Link to={"/"}>Home</Link>
            <Link to={"about"}>About Me</Link>
            <Link to={"contact"}>Contact Me</Link>
            <Link to={"app"}>App</Link>
            <Link to={"user"}>User</Link>
            <Link to={"user2"}>User2</Link>
        </div>
    );
};

export default Header;