import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleState } from '../../redux/form-slice';
import Checkbox from '../form_components/Checkbox';

type FormState = {
  checkbox1: boolean;
  checkbox2: boolean;
  checkbox3: boolean;
  checkbox4: boolean;
  checkbox5: boolean;
};

type RootState = {
  form: {
    present: FormState;
  };
};

const FiveCheckboxes = () => {
  const data = useSelector((state: RootState) => state.form);
  const { checkbox1, checkbox2, checkbox3, checkbox4, checkbox5 } = data.present;
  const dispatch = useDispatch();

  return (
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
  );
};

export default FiveCheckboxes;
