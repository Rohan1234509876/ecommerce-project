import { createSlice } from '@reduxjs/toolkit'

const initialState = localStorage.getItem('cart') && localStorage.getItem('cart') !== "undefined"
    ? JSON.parse(localStorage.getItem('cart'))
    : [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
        },
        deleteFromCart(state, action) {
            return state.filter(item => item.id !== action.payload.id);
        },
        incrementQuantity(state, action) {
            return state.map(item => 
                item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
            );
        },
        decrementQuantity(state, action) {
            return state.map(item => 
                item.id === action.payload && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
        },
    },
})

// Action creators
export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions

export default cartSlice.reducer
