import React from 'react';
import { Link } from 'react-router-dom';
import './button.css';

const Button = ({ Href, children }) => {
    return (
        <>
            <Link to={Href} className="button-52">{children}</Link>
        </>
    );
};

export default Button;