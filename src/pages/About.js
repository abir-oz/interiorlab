import React from 'react';
import AboutUs from '../components/about/AboutUs';
import Accordion from '../components/accordion/Accordion';
import { MediaFeature, OurAccreditation, WhatWeDo } from '../components/home';
import Page from '../components/Page';
import ParallaxHeader from '../components/ParallaxHeader';

const About = () => {
    return (
        <Page title="About Us">
            <ParallaxHeader>About</ParallaxHeader>
            <AboutUs />
            <WhatWeDo />
            <Accordion />
            <MediaFeature />
            <OurAccreditation />
        </Page>
    );
};

export default About;