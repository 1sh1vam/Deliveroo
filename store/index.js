import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './reducers/basket';

export const store = configureStore({
   reducer: {
    basket: basketReducer,
   }
})