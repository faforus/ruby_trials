import React from 'react';

type Props = {
  totalAccountsCount: number;
};

const TotalUsers = (props: Props) => {
  const { totalAccountsCount } = props;
  return (
    <div className={`flex flex-col space-y-2 items-end w-full pt-3`}>
      <div className={`flex items-center p-2 rounded-xl w-full md:w-auto bg-gray-300`}>
        <p className='text-lg tracking-wider text-center w-full'>Razem</p>
        <p
          className={`font-bold text-center text-lg bg-gray-100 rounded-xl w-[140px] md:w-[195px] p-1`}
        >
          {totalAccountsCount}
        </p>
      </div>
    </div>
  );
};

export default TotalUsers;
