import { createSlice } from "@reduxjs/toolkit";
import product from "../../jsfile/product";
import team from "../../jsfile/team";
import review from "../../jsfile/review";

/* =============================
 🧂 PRODUCT SLICE
============================= */
const productsSlice = createSlice({
  name: "products",
  initialState: product,
  reducers: {},
});

/* =============================
 👨‍🍳 TEAM SLICE
============================= */
const teamSlice = createSlice({
  name: "team",
  initialState: team,
  reducers: {
    addMember: (state, action) => {
      state.members.push(action.payload);
    },
  },
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
        (state.currentIndex - 1 + state.reviews.length) %
        state.reviews.length;
    },
  },
});

/* =============================
 🛒 CART SLICE
============================= */
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // { id, name, price, quantity }
  },
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

/* =============================
 🚀 EXPORT ACTIONS
============================= */
export const { addMember } = teamSlice.actions;
export const { nextReview, prevReview } = reviewSlice.actions;
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

/* =============================
🔍 SELECTORS
============================= */
export const selectDishes = (state) => state.products.dishes;
export const selectTeamMembers = (state) => state.team.members;
export const selectReviews = (state) => state.reviews.reviews;
export const selectCurrentReviewIndex = (state) => state.reviews.currentIndex;
export const selectCurrentIndex = (state) => state.reviews.currentIndex; // ✅ now explicitly exported
export const selectCartItems = (state) => state.cart.items;


/* =============================
 🧱 EXPORT REDUCERS FOR STORE
============================= */
export const productsReducer = productsSlice.reducer;
export const teamReducer = teamSlice.reducer;
export const reviewReducer = reviewSlice.reducer;
export const cartReducer = cartSlice.reducer;
