import { createSlice } from '@reduxjs/toolkit';
import undoable from 'redux-undo';

const initialState = {
  checkbox1: false,
  checkbox2: false,
  checkbox3: false,
  checkbox4: false,
  checkbox5: false,
  text1: '',
  text2: '',
  text3: '',
  text4: '',
  text5: '',
  date1: '',
  date2: '',
  date3: '',
  date4: '',
  date5: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    toggleState: (state, action) => {
      const { stateName } = action.payload;
      state[stateName] = !state[stateName];
    },
    resetState: () => initialState,
  },
});

const undoableFormReducer = undoable(formSlice.reducer);

export const { updateField, toggleState, resetState } = formSlice.actions;
export default undoableFormReducer;
