import { HomeHero, Projects, WhatWeDo, Testimonial, Text, MediaFeature, CarouselVideo, OurAccreditation } from "../components/home";

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