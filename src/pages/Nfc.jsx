import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import TenInputs from '../components/form_components/NumberInputs';

const Nfc = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>NFC</title>
      </Helmet>
      <div className=' py-16 md:px-10 flex flex-col md:flex-row space-y-2 md:space-y-0 space-x0 md:space-x-2 items-center justify-center'>
        <TenInputs num={1} />
        {/* <TenInputs num={11} />
        <TenInputs num={21} />
        <TenInputs num={31} />
        <TenInputs num={41} />
        <TenInputs num={51} />
        <TenInputs num={61} />
        <TenInputs num={71} />
        <TenInputs num={81} />
        <TenInputs num={91} /> */}
      </div>
    </HelmetProvider>
  );
};

export default Nfc;

// h-auto md:h-screen
