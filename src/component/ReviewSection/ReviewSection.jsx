import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectReviews,
  selectCurrentIndex,
  nextReview,
  prevReview,
} from "../../Redux/Slice/roote";
import { FaStar } from "react-icons/fa";
import "./ReviewSection.css";

export default function ReviewSection() {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);
  const currentIndex = useSelector(selectCurrentIndex);
  const review = reviews[currentIndex];

  return (
    <section className="review-section">
      <div className="review-container">
        {/* Stars */}
        <div className="review-stars">
          {[...Array(review.stars)].map((_, i) => (
            <FaStar key={i} color="#ff9f43" />
          ))}
        </div>

        <h3 className="review-title">{review.title}</h3>
        <p className="review-text">"{review.text}"</p>

        <div className="review-images">
          <img src={review.foodImg} alt="food" className="food-img" />
          <img src={review.userImg} alt={review.name} className="user-img" />
        </div>

        <h4 className="review-name">{review.name}</h4>
        <p className="review-role">{review.role}</p>

        <div className="review-buttons">
          <button onClick={() => dispatch(prevReview())}>⟵</button>
          <button onClick={() => dispatch(nextReview())}>⟶</button>
        </div>
      </div>
    </section>
  );
}
