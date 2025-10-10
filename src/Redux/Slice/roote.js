import { createSlice } from "@reduxjs/toolkit";
import product from "../../jsfile/product";
import review from "../../jsfile/review";

/* =============================
🧂 PRODUCT SLICE
============================= */
const productsSlice = createSlice({
  name: "products",
  initialState: product, // <-- product is an object { dishes: [...] }
  reducers: {},
});

/* =============================
⭐ REVIEW SLICE
============================= */
const reviewSlice = createSlice({
  name: "reviews",
  initialState: review,
  reducers: {
    nextReview: (state) => {
      state.currentIndex = (state.currentIndex + 1) % state.reviews.length;
    },
    prevReview: (state) => {
      state.currentIndex =
        (state.currentIndex - 1 + state.reviews.length) % state.reviews.length;
    },
  },
});

/* =============================
🧱 ROOT SLICE (Cart + Wishlist)
============================= */
const initialState = {
  cart: [],
  wishlist: [],
};

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.cart.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity += action.payload.quantity || 1;
      } else {
        state.cart.push({ ...action.payload, quantity: action.payload.quantity || 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    addToWishlist: (state, action) => {
      const exists = state.wishlist.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.wishlist.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((item) => item.id !== action.payload);
    },
  },
});

/* =============================
🚀 EXPORT ACTIONS
============================= */
export const { addToCart, removeFromCart, addToWishlist, removeFromWishlist } = rootSlice.actions;
export const { nextReview, prevReview } = reviewSlice.actions;

/* =============================
🔍 SELECTORS
============================= */
export const selectDishes = (state) => state.products.dishes;
export const selectWishlistItems = (state) => state.root.wishlist;
export const selectCartItems = (state) => state.root.cart;
export const selectReviews = (state) => state.reviews.reviews;
export const selectCurrentReviewIndex = (state) => state.reviews.currentIndex;

/* =============================
🧱 EXPORT REDUCERS
============================= */
export const productsReducer = productsSlice.reducer;
export const reviewReducer = reviewSlice.reducer;
export const rootReducer = rootSlice.reducer;
