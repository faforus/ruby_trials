import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateField } from '../../redux/form-slice.js';
type FormState = {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
};

type RootState = {
  form: {
    present: FormState;
  };
};

const FiveTextInputs = () => {
  const data = useSelector((state: RootState) => state.form);
  const { text1, text2, text3, text4, text5 } = data.present;

  const dispatch = useDispatch();

  const handleInputChange = (field: keyof FormState, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(updateField({ field: field, value: value }));
  };

  return (
    <div className='flex flex-col space-y-2'>
      <div className='flex flex-col items-center text-orange-700 font-semibold tracking-widest'>
        <input
          className='textInput'
          id='text1'
          name='text1'
          type='text'
          value={text1}
          onChange={(e) => handleInputChange('text1', e)}
        />
        <label htmlFor='text1'>Text 1</label>
      </div>
      <div className='flex flex-col items-center text-orange-700 font-semibold tracking-widest'>
        <input
          className='textInput'
          id='text2'
          name='text2'
          type='text'
          value={text2}
          onChange={(e) => handleInputChange('text2', e)}
        />
        <label htmlFor='text2'>Text 2</label>
      </div>

      <div className='flex flex-col items-center text-orange-700 font-semibold tracking-widest'>
        <input
          className='textInput'
          id='text3'
          name='text3'
          type='text'
          value={text3}
          onChange={(e) => handleInputChange('text3', e)}
        />
        <label htmlFor='text3'>Text 3</label>
      </div>

      <div className='flex flex-col items-center text-orange-700 font-semibold tracking-widest'>
        <input
          className='textInput'
          id='text4'
          name='text4'
          type='text'
          value={text4}
          onChange={(e) => handleInputChange('text4', e)}
        />
        <label htmlFor='text4'>Text 4</label>
      </div>

      <div className='flex flex-col items-center text-orange-700 font-semibold tracking-widest'>
        <input
          className='textInput'
          id='text5'
          name='text5'
          type='text'
          value={text5}
          onChange={(e) => handleInputChange('text5', e)}
        />
        <label htmlFor='text5'>Text 5</label>
      </div>
    </div>
  );
};

export default FiveTextInputs;
