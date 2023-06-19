import React from 'react';

type Props = {
  id: string;
  checked: boolean;
  func: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Checkbox(props: Props) {
  const { id, checked, func } = props;
  return (
    <div className='flex items-center p-4 space-x-2'>
      <input className='checkbox' id={id} type='checkbox' checked={checked} onChange={func} />
      <label htmlFor={id} className='tracking-wider text-orange-700'>
        Checkbox 1
      </label>
    </div>
  );
}

export default Checkbox;
