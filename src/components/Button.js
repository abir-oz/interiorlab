import React from 'react';
import './button.css';

const Button = ({ Href, children }) => {
    return (
        <>
            <a href={Href} className="button-52">{children}</a>
        </>
    );
};

export default Button;