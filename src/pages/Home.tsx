import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className='h-screen flex items-center justify-center'>Home</div>
    </HelmetProvider>
  );
};

export default Home;
