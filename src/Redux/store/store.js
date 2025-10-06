// src/Redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import {
  productsReducer,
  teamReducer,
  reviewReducer,
} from "../Slice/roote";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    team: teamReducer,
    reviews: reviewReducer,
  },
});
export default store; 
