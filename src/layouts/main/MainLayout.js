import React from 'react';
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';
import TopBar from './TopBar';

const MainLayout = ({ children }) => {
    console.log(children);
    return (
        <>
            <TopBar />
            <MainHeader />
            {children}
            <MainFooter />
        </>
    );
};

export default MainLayout; 