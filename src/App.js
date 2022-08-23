import React, { lazy, Suspense } from 'react';
import './App.css';
import Loading from './components/Loading';
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
          <Home />
        </Layout>
      </Suspense>
    </div>
  );
};

export default App;
