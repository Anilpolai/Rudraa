import React, { useEffect, useState } from "react";
import "./KetchupOffer.css";
import ketchupImg from "../../img/ketchup/ketchup2.png"; // ketchup image
import bgImg from "../../img/back6.jpg"; // textured background

export default function KetchupOffer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 3); // 3-day countdown

    const timer = setInterval(() => {
      const now = new Date();
      const diff = endDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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
            {["days", "hours", "minutes", "seconds"].map((unit) => (
              <div key={unit} className="timer-box">
                <h3>{timeLeft[unit].toString().padStart(2, "0")}</h3>
                <p>{unit.toUpperCase()}</p>
              </div>
            ))}
          </div>

          <button className="buy-btn">Buy Now</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="ketchup-right1">
          <img src={ketchupImg} alt="Premium Ketchup" className="ketchup-img1" />
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
