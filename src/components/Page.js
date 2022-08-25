import React from 'react';
import { Helmet } from 'react-helmet';

const Page = ({ title, children }) => {
    return (
        <>
            <Helmet>
                <title>{title} | Set Square  </title>
                <meta name="description" content="Set Square is an Architectural Company" />
                <link rel="canonical" href="https://setsquare.vercel.app/" />
            </Helmet>
            {children}
        </>
    );
};

export default Page;