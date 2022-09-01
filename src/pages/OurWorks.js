import React from 'react';
import Works from '../components/our-works/Works';
import WorkTypes from '../components/our-works/WorkTypes';
import Page from '../components/Page';
import ParallaxHeader from '../components/ParallaxHeader';

const OurWorks = () => {
    return (
        <Page title="Our Works">
            <ParallaxHeader>Our Works</ParallaxHeader>
            <WorkTypes />
            <Works />
        </Page>
    );
};

export default OurWorks;