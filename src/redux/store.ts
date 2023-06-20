import { configureStore } from '@reduxjs/toolkit';
import undoableFormReducer from './form-slice.js';

const store = configureStore({
  reducer: {
    form: undoableFormReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
