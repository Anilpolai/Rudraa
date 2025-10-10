// src/Redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import {
  productsReducer,
  teamReducer,
  reviewReducer,
  cartReducer,
} from "../Slice/roote";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    team: teamReducer,
    reviews: reviewReducer,
    cart: cartReducer,
  },
});
export default store; 
