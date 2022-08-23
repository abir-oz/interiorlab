import { CarouselVideo, HomeHero, MediaFeature, OurAccreditation, Projects, Testimonial, Text, WhatWeDo } from "../components/home/index";

import React from 'react';

const Home = () => {
    return (
        <>
            <HomeHero />
            <Projects />
            <WhatWeDo />
            <CarouselVideo />
            <Testimonial />
            <Text />
            <MediaFeature />
            <OurAccreditation />
        </>
    );
};

export default Home;