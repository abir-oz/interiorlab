import './App.css';

import React from 'react';
import MenuDesktop from './layouts/main/MenuDesktop';
import TopBar from './layouts/main/TopBar';
import MenuMobile from './layouts/main/MenuMobile';
import HomeHero from './components/home/HomeHero';
import Projects from './components/home/Projects';
import WhatWeDo from './components/home/WhatWeDo';

const App = () => {

  return (
    <>
      <TopBar />
      <MenuMobile />
      <MenuDesktop />
      <HomeHero />
      <Projects />
      <WhatWeDo />
    </>
  );
};

export default App;
