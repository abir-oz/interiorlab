import './App.css';

import React from 'react';
import MenuDesktop from './layouts/main/MenuDesktop';
import TopBar from './layouts/main/TopBar';
import MenuMobile from './layouts/main/MenuMobile';
import MainFooter from './layouts/main/MainFooter';
import Home from './pages/Home';

const App = () => {

  return (
    <div className='selection:bg-orange-300'>
      <TopBar />
      <MenuMobile />
      <MenuDesktop />
      <Home />
      <MainFooter />
    </div>
  );
};

export default App;
