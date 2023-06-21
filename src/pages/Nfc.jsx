import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import HundredInputs from '../components/form_components/HundredInputs';

const Nfc = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>NFC</title>
      </Helmet>
      <div className='h-auto md:h-screen min-h-[800px] py-16 md:px-10 flex flex-col md:flex-row space-y-2 md:space-y-0 space-x0 md:space-x-2 items-center justify-center'>
        <HundredInputs />
      </div>
    </HelmetProvider>
  );
};

export default Nfc;
