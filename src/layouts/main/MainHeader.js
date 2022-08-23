import React from 'react';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';

const MainHeader = () => {
    return (
        <>
            <MenuDesktop />
            <MenuMobile />
        </>
    );
};

export default MainHeader;