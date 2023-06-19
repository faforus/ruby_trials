import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Error = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Error</title>
      </Helmet>
      <div className='h-screen flex items-center justify-center'>Error</div>
    </HelmetProvider>
  );
};

export default Error;
