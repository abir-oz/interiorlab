import React from 'react';

const CommonHeader = ({ children }) => {
    return (
        <h3 className='uppercase m-0 font-bold font-display text-lg tracking-wide'>{children}</h3>
    );
};

export default CommonHeader;