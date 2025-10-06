import React from "react";
import "./BestDeal.css";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const bestDeals = [
  {
    id: 1,
    name: "Tomato Ketchup",
    price: 149,
    rating: 4.8,
    img: "/img/ketchup.jpg",
  },
  {
    id: 2,
    name: "Spicy Schezwan Sauce",
    price: 199,
    rating: 4.6,
    img: "/img/schezwan.jpg",
  },
  {
    id: 3,
    name: "Classic Mayonnaise",
    price: 179,
    rating: 4.7,
    img: "/img/mayo.jpg",
  },
  {
    id: 4,
    name: "Green Chilli Sauce",
    price: 159,
    rating: 4.5,
    img: "/img/greenchilli.jpg",
  },
];

export default function BestDeal() {
  return (
    <section className="bestdeal-section">
      <div className="container">
        <h2 className="section-title">🔥 Best Deals / Popular Dishes</h2>
        <div className="deal-grid">
          {bestDeals.map((item) => (
            <div key={item.id} className="deal-card">
              <div className="deal-img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="deal-info">
                <h3>{item.name}</h3>
                <div className="deal-rating">
                  <FaStar className="star" /> {item.rating}
                </div>
                <p className="deal-price">₹{item.price}</p>
                <button className="deal-btn">
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
