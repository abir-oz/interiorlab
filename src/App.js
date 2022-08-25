import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Loading from './components/Loading';
import About from './pages/About';
const Home = lazy(() => import('./pages/Home'));
const Layout = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./layouts/main/MainLayout')), 700);
  });
});
const App = () => {

  return (
    <div className='selection:bg-ss-red-500'>
      <Suspense fallback={<Loading />}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Suspense>
    </div>
  );
};

export default App;
