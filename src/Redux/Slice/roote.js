import { createSlice } from "@reduxjs/toolkit";
import product from "../../jsfile/product";
import team from "../../jsfile/team";
import review from "../../jsfile/review"; // ✅ imported review data

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
        (state.currentIndex - 1 + state.reviews.length) % state.reviews.length;
    },
  },
});

/* =============================
 🔍 SELECTORS
============================= */
export const selectDishes = (state) => state.products.dishes;
export const selectTeamMembers = (state) => state.team.members;
export const selectReviews = (state) => state.reviews.reviews;
export const selectCurrentReviewIndex = (state) => state.reviews.currentIndex;
export const selectCurrentIndex = (state) => state.reviews.currentIndex; // 👈 optional alias for easy import

/* =============================
 🧱 EXPORT REDUCERS FOR STORE
============================= */
export const productsReducer = productsSlice.reducer;
export const teamReducer = teamSlice.reducer;
export const reviewReducer = reviewSlice.reducer;

/* =============================
 🚀 EXPORT ACTIONS
============================= */
export const { addMember } = teamSlice.actions;
export const { nextReview, prevReview } = reviewSlice.actions;
