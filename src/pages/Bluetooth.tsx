import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, toggleState, resetState } from '../redux/form-slice.js';
import Checkbox from '../components/form/Checkbox';
import UndoRedo from '../components/form/UndoRedo.js';

type FormState = {
  checkbox1: boolean;
  checkbox2: boolean;
  checkbox3: boolean;
  checkbox4: boolean;
  checkbox5: boolean;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
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

const Bluetooth = () => {
  const data = useSelector((state: RootState) => state.form);
  const {
    checkbox1,
    checkbox2,
    checkbox3,
    checkbox4,
    checkbox5,
    text1,
    text2,
    text3,
    text4,
    text5,
    date1,
    date2,
    date3,
    date4,
    date5,
  } = data.present;
  const dispatch = useDispatch();

  const handleInputChange = (field: keyof FormState, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(updateField({ field: field, value: value }));
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Bluetooth</title>
      </Helmet>
      <div className='md:h-screen flex flex-col md:flex-row items-center justify-center space-x-4 space-y-4 p-10'>
        <div className='flex flex-col'>
          <Checkbox
            id='checkbox1'
            func={() => {
              dispatch(toggleState({ stateName: 'checkbox1' }));
            }}
            checked={checkbox1}
          />
          <Checkbox
            id='checkbox2'
            func={() => {
              dispatch(toggleState({ stateName: 'checkbox2' }));
            }}
            checked={checkbox2}
          />
          <Checkbox
            id='checkbox3'
            func={() => {
              dispatch(toggleState({ stateName: 'checkbox3' }));
            }}
            checked={checkbox3}
          />
          <Checkbox
            id='checkbox4'
            func={() => {
              dispatch(toggleState({ stateName: 'checkbox4' }));
            }}
            checked={checkbox4}
          />
          <Checkbox
            id='checkbox5'
            func={() => {
              dispatch(toggleState({ stateName: 'checkbox5' }));
            }}
            checked={checkbox5}
          />
        </div>
        <div className='flex flex-col space-y-2'>
          <div className='flex flex-col items-center text-orange-700 font-semibold'>
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
          <div className='flex flex-col items-center text-orange-700 font-semibold'>
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

          <div className='flex flex-col items-center text-orange-700 font-semibold'>
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

          <div className='flex flex-col items-center text-orange-700 font-semibold'>
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

          <div className='flex flex-col items-center text-orange-700 font-semibold'>
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
        <div className='flex flex-col space-y-2'>
          <button
            className='p-4 bg-orange-400 hover:bg-orange-500 rounded-xl shadow-md text-white font-semibold'
            onClick={() => {
              console.log(data);
            }}
          >
            console.log
          </button>
          <button
            className='p-4 bg-orange-400 hover:bg-orange-500 rounded-xl shadow-md text-white font-semibold'
            onClick={() => {
              dispatch(resetState());
            }}
          >
            reset
          </button>
          <UndoRedo />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Bluetooth;
