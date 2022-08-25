import React from 'react';
import AboutUs from '../components/about/AboutUs';
import Accordion from '../components/Accordion/Accordion';
import { MediaFeature, OurAccreditation, WhatWeDo } from '../components/home';
import Page from '../components/Page';
import PagesHeader from '../components/PagesHeader';

const About = () => {
    return (
        <Page title="About Us">
            <PagesHeader>About</PagesHeader>
            <AboutUs />
            <WhatWeDo />
            <Accordion />
            <MediaFeature />
            <OurAccreditation />
        </Page>
    );
};

export default About;