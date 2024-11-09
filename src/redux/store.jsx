import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'  // Import the reducer from cartSlice

export const store = configureStore({
  reducer: {
    cart: cartReducer  // Ensure you're passing the actual reducer, not the whole slice object
  },
})
