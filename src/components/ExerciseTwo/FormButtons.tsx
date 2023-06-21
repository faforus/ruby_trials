import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetState } from '../../redux/form-slice.js';
import UndoRedo from '../form_components/UndoRedo.js';
type FormState = {};

type RootState = {
  form: {
    present: FormState;
  };
};

const FormButtons = () => {
  const data = useSelector((state: RootState) => state.form);

  const dispatch = useDispatch();
  return (
    <div className='flex flex-col space-y-2'>
      <button
        className='p-4 bg-orange-400 hover:bg-orange-500 rounded-xl shadow-md text-white font-semibold tracking-widest'
        onClick={() => {
          console.log(data.present);
        }}
      >
        console.log
      </button>
      <button
        className='p-4 bg-orange-400 hover:bg-orange-500 rounded-xl shadow-md text-white font-semibold tracking-widest'
        onClick={() => {
          dispatch(resetState());
        }}
      >
        reset
      </button>
      <UndoRedo />
    </div>
  );
};

export default FormButtons;
