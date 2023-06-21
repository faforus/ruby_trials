import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import FiveCheckboxes from '../components/ExerciseTwo/FiveCheckboxes';
import FiveTextInputs from '../components/ExerciseTwo/FiveTextInputs';
import FiveDateInputs from '../components/ExerciseTwo/FiveDateInputs';
import FormButtons from '../components/ExerciseTwo/FormButtons';

const Bluetooth = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Bluetooth</title>
      </Helmet>
      <div className='md:h-screen flex flex-col md:flex-row items-center justify-center space-x-4 space-y-4 p-10 min-h-[400px]'>
        <FiveCheckboxes />
        <FiveTextInputs />
        <FiveDateInputs />
        <FormButtons />
      </div>
    </HelmetProvider>
  );
};

export default Bluetooth;
