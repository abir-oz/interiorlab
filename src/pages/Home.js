import { CarouselVideo, HomeHero, MediaFeature, OurAccreditation, Projects, Testimonial, Text, WhatWeDo } from "../components/home/index";

import React from 'react';
import Page from "../components/Page";

const Home = () => {
    return (
        <Page title="Home">
            <HomeHero />
            <Projects />
            <WhatWeDo />
            <CarouselVideo />
            <Testimonial />
            <Text />
            <MediaFeature />
            <OurAccreditation />
        </Page>
    );
};

export default Home;