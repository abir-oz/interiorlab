import React from 'react';
import './App.css';
import MainLayout from './layouts/main/MainLayout';
import Home from './pages/Home';

const App = () => {

  return (
    <div className='selection:bg-ss-red-500'>
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  );
};

export default App;
