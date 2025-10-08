import React, { useEffect, useState } from "react";
import "./ProductSection.css";
import ketchup1 from "../../img/ketchup/ketchup1.jpg";
import { FaFire } from "react-icons/fa"; // Replaced with a more relevant icon (heat/energy)

export default function ProductSection() {
  const [count, setCount] = useState(0);

  // Animated count up to 500
  useEffect(() => {
    let start = 0;
    const end = 500;
    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 5;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="product-section">
      <div className="container">
        <div className="product-grid">
          {/* LEFT SIDE - IMAGE + LABEL */}
          <div className="product-left">
            <div className="image-label">
              <FaFire className="label-icon" />
              <span className="label-count">+{count}</span>
              <span className="label-text">Basic</span>
            </div>

            <img
              src={ketchup1}
              alt="Premium Tomato Ketchup Bottle"
              className="product-img1"
              loading="lazy"
            />
          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div className="product-right">
            <h2 className="product-title">Premium Tomato Ketchup</h2>
            <p className="product-subtitle">
              Crafted from the finest tomatoes, our ketchup is perfect for
              restaurants, retailers, and bulk supply. Get reliable B2B delivery
              and premium taste for your business.
            </p>

            {/* Features */}
            <ul className="product-features">
              <li>✔ Bulk B2B Supply Available</li>
              <li>✔ 100% Natural & Organic Ingredients</li>
              <li>✔ Fast & Reliable Global Delivery</li>
              <li>✔ Export Quality Packaging</li>
            </ul>

            {/* Services Section */}
            <div className="product-services">
              <h4>Our Services</h4>
              <div className="services-grid">
                <div className="service-box">Wholesale Supply</div>
                <div className="service-box">Private Labeling</div>
                <div className="service-box">Custom Packaging</div>
                <div className="service-box">Logistics Support</div>
              </div>
            </div>

            <button className="product-btn">Get a Quote</button>
          </div>
        </div>
      </div>
    </section>
  );
}
