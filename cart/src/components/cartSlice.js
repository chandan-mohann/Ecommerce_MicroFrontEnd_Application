// cart/src/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const currentQuantity = state[product.id]?.quantity || 0;
      state[product.id] = { quantity: currentQuantity + 1, product };
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      const currentQuantity = state[productId]?.quantity || 0;
      if (currentQuantity <= 1) {
        delete state[productId];
      } else {
        state[productId].quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
