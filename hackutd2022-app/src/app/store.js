import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import previousDataReducer from '../features/previousdata/previousDataSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    previousData: previousDataReducer
  },
});
