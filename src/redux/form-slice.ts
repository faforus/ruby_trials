import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

type Payload = {
  field: keyof FormState;
  value: string | number | boolean | string[];
};

type FieldName = keyof FormState;

const formSlice = createSlice({
  name: 'form',
  initialState: {
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
  } as FormState,
  reducers: {
    updateField: (state, action: PayloadAction<Payload>) => {
      const { field, value } = action.payload;

      if (typeof value === 'string') {
        (state as any)[field] = value;
      } else if (typeof value === 'number') {
        (state as any)[field] = value;
      } else if (typeof value === 'boolean') {
        (state as any)[field] = value;
      } else {
        (state as any)[field] = value;
      }
    },
    toggleState: (state, action: PayloadAction<{ stateName: FieldName }>) => {
      const { stateName } = action.payload;
      (state as any)[stateName] = !(state as any)[stateName];
    },
    resetState: (state) => {
      state.checkbox1 = false;
      state.checkbox2 = false;
      state.checkbox3 = false;
      state.checkbox4 = false;
      state.checkbox5 = false;
      state.text1 = '';
      state.text2 = '';
      state.text3 = '';
      state.text4 = '';
      state.text5 = '';
      state.date1 = '';
      state.date2 = '';
      state.date3 = '';
      state.date4 = '';
      state.date5 = '';
    },
  },
});

export const { updateField, toggleState, resetState } = formSlice.actions;
export default formSlice.reducer;

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import undoable from 'redux-undo';

// type FormState = {
//   checkbox1: boolean;
//   checkbox2: boolean;
//   checkbox3: boolean;
//   checkbox4: boolean;
//   checkbox5: boolean;
//   text1: string;
//   text2: string;
//   text3: string;
//   text4: string;
//   text5: string;
//   date1: string;
//   date2: string;
//   date3: string;
//   date4: string;
//   date5: string;
// };

// type Payload = {
//   field: keyof FormState;
//   value: string | number | boolean | string[];
// };

// type FieldName = keyof FormState;

// const formSlice = createSlice({
//   name: 'form',
//   initialState: {
//     checkbox1: false,
//     checkbox2: false,
//     checkbox3: false,
//     checkbox4: false,
//     checkbox5: false,
//     text1: '',
//     text2: '',
//     text3: '',
//     text4: '',
//     text5: '',
//     date1: '',
//     date2: '',
//     date3: '',
//     date4: '',
//     date5: '',
//   } as FormState,
//   reducers: {
//     updateField: (state, action: PayloadAction<Payload>) => {
//       const { field, value } = action.payload;

//       if (typeof value === 'string') {
//         (state as any)[field] = value;
//       } else if (typeof value === 'number') {
//         (state as any)[field] = value;
//       } else if (typeof value === 'boolean') {
//         (state as any)[field] = value;
//       } else {
//         (state as any)[field] = value;
//       }
//     },
//     toggleState: (state, action: PayloadAction<{ stateName: FieldName }>) => {
//       const { stateName } = action.payload;
//       (state as any)[stateName] = !(state as any)[stateName];
//     },
//     resetState: (state) => {
//       state.checkbox1 = false;
//       state.checkbox2 = false;
//       state.checkbox3 = false;
//       state.checkbox4 = false;
//       state.checkbox5 = false;
//       state.text1 = '';
//       state.text2 = '';
//       state.text3 = '';
//       state.text4 = '';
//       state.text5 = '';
//       state.date1 = '';
//       state.date2 = '';
//       state.date3 = '';
//       state.date4 = '';
//       state.date5 = '';
//     },
//   },
// });

// export const { updateField, toggleState, resetState } = formSlice.actions;
// export default formSlice.reducer;
