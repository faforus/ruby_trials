import React from 'react';

type Props = {
  monthly: number | undefined;
  yearly: number | undefined;
  currency: boolean;
};

const Pricing = (props: Props) => {
  const { monthly, yearly, currency } = props;

  return (
    <div className='flex flex-col space-y-2 items-center md:w-[540px]'>
      <div className='flex flex-col md:flex-row items-center justify-center w-full md:space-x-4 space-y-2 md:space-y-0 p-4 rounded-xl bg-[#002f6c]'>
        <p className='text-white font-semibold tracking-wider'>Miesięcznie</p>
        <p className='font-bold fontColor text-center text-xl bg-gray-100 rounded-xl w-[150px] p-2'>
          <span className='formatted-number'>{monthly?.toLocaleString()}</span>
          {currency ? ' PLN' : 'EUR'}
        </p>
        <p className='text-white font-semibold tracking-wider'>Rocznie</p>
        <p className='font-bold fontColor text-center text-xl bg-gray-100 rounded-xl w-[150px] p-2'>
          <span className='formatted-number'>{yearly?.toLocaleString()}</span>
          {currency ? ' PLN' : 'EUR'}
        </p>
      </div>
    </div>
  );
};

export default Pricing;
