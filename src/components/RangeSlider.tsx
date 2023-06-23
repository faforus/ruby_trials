import React from 'react';

type Props = {
  min: number;
  max: number;
  step: number;
  label: string;
  value: number;
  className?: string;
  func: React.Dispatch<React.SetStateAction<number>>;
  small?: boolean;
};

const RangeSlider = (props: Props) => {
  const { value, func, label, min, max, step, className, small } = props;
  return (
    <div className={`flex flex-col space-y-2 items-center md:w-[500px] ${className}`}>
      <label className={`${small ? 'text-base' : 'text-xl'} text-center tracking-wider`}>
        {label}
      </label>
      <div
        className={`flex items-center w-full space-x-4 ${
          small ? 'py-1 px-2' : 'p-2'
        } rounded-xl bg-gray-300`}
      >
        <input
          className='rounded-full appearance-none cursor-pointer bg-gray-200 mainColor range-thumb h-6'
          value={value}
          onChange={(e) => {
            const newValue = Number(e.target.value);
            func(newValue);
          }}
          type='range'
          min={min}
          max={max}
          step={step}
        />
        <p
          className={`font-bold text-center ${
            small ? 'text-base' : 'text-xl'
          } bg-gray-100 rounded-xl w-[150px] ${small ? 'p-1' : 'p-2'}`}
        >
          {value}
        </p>
      </div>
    </div>
  );
};

export default RangeSlider;
