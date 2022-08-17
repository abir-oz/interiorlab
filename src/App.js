import './App.css';

import React from 'react';
import MenuDesktop from './layouts/main/MenuDesktop';
import TopBar from './layouts/main/TopBar';
import MenuMobile from './layouts/main/MenuMobile';
import HomeHero from './components/home/HomeHero';
import Projects from './components/home/Projects';
import WhatWeDo from './components/home/WhatWeDo';
import CarouselVideo from './components/home/CarouselVideo';
import Testimonial from './components/home/Testimonial';
import Text from './components/home/Text';
import MediaFeature from './components/home/MediaFeature';
import OurAccreditation from './components/home/OurAccreditation';
import MainFooter from './layouts/main/MainFooter';

const App = () => {

  return (
    <div className='selection:bg-orange-300'>
      <TopBar />
      <MenuMobile />
      <MenuDesktop />
      <HomeHero />
      <Projects />
      <WhatWeDo />
      <CarouselVideo />
      <Testimonial />
      <Text />
      <MediaFeature />
      <OurAccreditation />
      <MainFooter />
    </div>
  );
};

export default App;
