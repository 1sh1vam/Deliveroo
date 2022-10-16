import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
}

const basket = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket(state, action) {
            state.items.push(action.payload)
        },
        removeFromBasket(state, action) {
            const { id } = action.payload;
            state.items = state.items.filter((item) => item.id !== id);
        }
    }
});

export const { addToBasket, removeFromBasket } = basket.actions;

export const selecteBasketItems = (state) => state.items;

export default basket.reducer;