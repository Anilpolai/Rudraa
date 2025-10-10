import { configureStore } from "@reduxjs/toolkit";
import { productsReducer, reviewReducer, rootReducer } from "../Slice/roote";

const store = configureStore({
  reducer: {
    products: productsReducer,
    reviews: reviewReducer,
    root: rootReducer, // ✅ matches selector state.root.wishlist
  },
});

export default store;
