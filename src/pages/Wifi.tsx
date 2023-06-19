import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Wifi = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>WiFi</title>
      </Helmet>
      <div className='h-screen flex items-center justify-center'>WiFi</div>
    </HelmetProvider>
  );
};

export default Wifi;
