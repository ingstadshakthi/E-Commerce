import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '../utils/cartUtils';

const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : { cartItems: [] };



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existItem = state.cartItems.find(prod => prod._id === item._id);

            if (existItem) {
                state.cartItems = state.cartItems.map(prod => prod._id === existItem._id ? item : prod);
            } else {
                state.cartItems = [...state.cartItems, item]
            }

            state = updateCart(state);
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item._id !== action.payload);
            state = updateCart(state);
        },
        // NOTE: here we need to reset state for when a user logs out so the next
        // user doesn't inherit the previous users cart and shipping
        resetCart: (state) => (state = initialState),
    }
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;