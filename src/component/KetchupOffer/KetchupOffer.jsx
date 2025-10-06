import React, { useEffect, useState } from "react";
import "./KetchupOffer.css";
import ketchupImg from "../../img/ketchup/ketchup2.jpeg"; // your ketchup image
import bgImg from "../../img/back6.jpg"; // your red textured background

export default function KetchupOffer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 3); // 3-day promo countdown

    const timer = setInterval(() => {
      const now = new Date();
      const diff = endDate - now;

      if (diff <= 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="ketchup-offer"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="ketchup-container">
        {/* LEFT CONTENT */}
        <div className="ketchup-left">
          <div className="offer-label">LIMITED OFFER</div>
          <h1 className="offer-title">
            PREMIUM <br /> TOMATO KETCHUP
          </h1>
          <p className="offer-desc">
            Made from fresh sun-ripened tomatoes for rich, tangy flavor. 
            Perfect for restaurants, retailers, and bulk buyers.
          </p>

          <div className="timer">
            <div className="timer-box">
              <h3>{timeLeft.days.toString().padStart(2, "0")}</h3>
              <p>DAYS</p>
            </div>
            <div className="timer-box">
              <h3>{timeLeft.hours.toString().padStart(2, "0")}</h3>
              <p>HOURS</p>
            </div>
            <div className="timer-box">
              <h3>{timeLeft.minutes.toString().padStart(2, "0")}</h3>
              <p>MINUTES</p>
            </div>
            <div className="timer-box">
              <h3>{timeLeft.seconds.toString().padStart(2, "0")}</h3>
              <p>SECONDS</p>
            </div>
          </div>

          <button className="buy-btn">Buy Now</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="ketchup-right">
          <img src={ketchupImg} alt="Premium Tomato Ketchup" className="ketchup-img" />
          <div className="discount-circle">
            <p>UP TO</p>
            <h2>30%</h2>
            <span>OFF</span>
          </div>
        </div>
      </div>
    </section>
  );
}
