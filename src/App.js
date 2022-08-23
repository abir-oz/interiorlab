import './App.css';

import React from 'react';
import Home from './pages/Home';
import MainLayout from './layouts/main/Index';

const App = () => {

  return (
    <div className='selection:bg-orange-300'>
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  );
};

export default App;
