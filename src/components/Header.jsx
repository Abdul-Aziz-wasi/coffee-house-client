import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <NavLink to={"/addcoffee"}>Add Coffee</NavLink>
        </div>
    );
};

export default Header;