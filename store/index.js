import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './reducers/basket';
import restaurantReducer from './reducers/restaurant';

export const store = configureStore({
   reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
   }
})