import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateField } from '../../redux/form-slice.js';

type FormState = {
  date1: string;
  date2: string;
  date3: string;
  date4: string;
  date5: string;
};

type RootState = {
  form: {
    present: FormState;
  };
};

const FiveDateInputs = () => {
  const data = useSelector((state: RootState) => state.form);
  const { date1, date2, date3, date4, date5 } = data.present;

  const dispatch = useDispatch();

  const handleInputChange = (field: keyof FormState, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(updateField({ field: field, value: value }));
  };

  return (
    <div className='flex flex-col space-y-2 px-5'>
      <input
        type='date'
        name='date'
        className='dateInput'
        value={date1}
        onChange={(e) => handleInputChange('date1', e)}
      />
      <input
        type='date'
        name='date'
        className='dateInput'
        value={date2}
        onChange={(e) => handleInputChange('date2', e)}
      />
      <input
        type='date'
        name='date'
        className='dateInput'
        value={date3}
        onChange={(e) => handleInputChange('date3', e)}
      />
      <input
        type='date'
        name='date'
        className='dateInput'
        value={date4}
        onChange={(e) => handleInputChange('date4', e)}
      />
      <input
        type='date'
        name='date'
        className='dateInput'
        value={date5}
        onChange={(e) => handleInputChange('date5', e)}
      />
    </div>
  );
};

export default FiveDateInputs;
