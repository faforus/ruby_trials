import React from 'react';

const Spinner = () => {
  return (
    <div className='w-full h-full'>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-solid border-white border-t-gray-800 rounded-full w-20 h-20 animate-spin duration-1000 infinite z-50'></div>
    </div>
  );
};

export default Spinner;
