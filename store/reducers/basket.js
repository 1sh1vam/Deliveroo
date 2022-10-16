import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const basket = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket(state, action) {
      state.items.push(action.payload);
    },
    removeFromBasket(state, action) {
      const { id } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      const items = [...state.items];
      if (index >= 0) {
        items.splice(index, 1);
      }
      state.items = [...items];
    },
  },
});

export const { addToBasket, removeFromBasket } = basket.actions;

export const selecteBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = (id, state) =>
  state.basket.items.filter((item) => item.id === id);

export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);

export default basket.reducer;
