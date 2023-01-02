import { configureStore } from '@reduxjs/toolkit';
import domReducer from './domSlice';

const store = configureStore({
  reducer: {
    dom: domReducer,
  },
});
export default store;
