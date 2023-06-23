import React from 'react';

type Props = {
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
  yes?: string;
  no?: string;
  yesColor?: string;
  noColor?: string;
  yesBackgroundColor?: string;
  noBackgroundColor?: string;
  htmlFor: string;
  disabled?: boolean;
};

const YesNoRadio = (props: Props) => {
  const {
    value,
    setValue,
    yes = 'Tak',
    no = 'Nie',
    yesColor = 'text-white',
    noColor = 'text-white',
    yesBackgroundColor = 'bg-[#002f6c]',
    noBackgroundColor = 'bg-[#002f6c]',
    htmlFor,
    disabled,
  } = props;
  return (
    <div className='relative grid grid-cols-2 rounded-xl bg-gray-200 p-1 w-[124px]'>
      <div
        className={`absolute w-[3.6rem] h-10 rounded-xl  m-1 yes_no ${
          !value && 'translate-x-full'
        } ${
          value ? `${yesBackgroundColor} transition-colors duration-300` : `${noBackgroundColor}`
        } z-10`}
      />
      <label
        htmlFor={`${htmlFor}_yes`}
        className={`block ${
          !disabled && 'cursor-pointer'
        } select-none rounded-xl py-2 px-3 text-center z-20 ${value && `font-bold ${yesColor}`}`}
      >
        <input
          name={`${htmlFor}_yes`}
          id={`${htmlFor}_yes`}
          type='radio'
          value='yes'
          checked={value ? true : false}
          onChange={() => {
            if (disabled) return;
            setValue((prev) => !prev);
          }}
          className='hidden'
        />
        {yes}
      </label>
      <label
        htmlFor={`${htmlFor}_no`}
        className={`block ${
          !disabled && 'cursor-pointer'
        } select-none rounded-xl py-2 px-3 text-center z-20 ${!value && `font-bold ${noColor}`}`}
      >
        <input
          name={`${htmlFor}_no`}
          id={`${htmlFor}_no`}
          type='radio'
          value='no'
          checked={!value ? true : false}
          onChange={() => {
            if (disabled) return;
            setValue((prev) => !prev);
          }}
          className='hidden'
        />
        {no}
      </label>
    </div>
  );
};

export default YesNoRadio;
