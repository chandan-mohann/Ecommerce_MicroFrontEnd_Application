// shared/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../product/src/actions/store';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
