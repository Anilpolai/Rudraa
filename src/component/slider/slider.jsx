import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./slider.css";
import bg from "../../img/back1.jpg";
import k1 from "../../img/slider/katchap1.png";
import k2 from "../../img/slider/katchap2.png";
import k3 from "../../img/slider/katchap3.png";

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: "Delicious Food, Delivered To You",
      desc: "Experience the best meals from the comfort of your home. Fast delivery, fresh ingredients, and mouth-watering flavors await you!",
      img: k1,
    },
    {
      id: 2,
      title: "Fresh Ingredients, Great Taste",
      desc: "Our chefs use only the finest ingredients to prepare your favorite dishes, ensuring every bite is packed with flavor.",
      img: k2,
    },
    {
      id: 3,
      title: "Fast & Reliable Delivery",
      desc: "Get your food delivered quickly and enjoy hot, fresh meals right at your doorstep.",
      img: k3,
    },
  ];

  const [current, setCurrent] = useState(0);

  const titleRef = useRef(null);
  const descRef = useRef(null);
  const imgRef = useRef(null);
  const buttonRef = useRef(null);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // GSAP animation for slide changes
  useEffect(() => {
    const tl = gsap.timeline();

    // Reset
    gsap.set([titleRef.current, descRef.current, buttonRef.current], {
      opacity: 0,
      y: 30,
    });
    gsap.set(imgRef.current, {
      opacity: 0,
      y: -200,
    });

    // Animate image first
    tl.to(imgRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    })
      .to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .to(
        descRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );
  }, [current]);

  // Button hover animation
  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      scale: 1.1,
      backgroundColor: "#ffffff",
      color: "#de1d1d",
      boxShadow: "0px 0px 20px rgba(255, 87, 51, 0.8)",
      duration: 0.3,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      backgroundColor: "#de1d1d",
      color: "#ffffff",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
      duration: 0.3,
    });
  };

  return (
    <div className="slider" style={{ backgroundImage: `url(${bg})` }}>
      <div className="slider-content container">
        <div className="slider-text">
          <h1 ref={titleRef}>{slides[current].title}</h1>
          <p ref={descRef}>{slides[current].desc}</p>
          <button
            ref={buttonRef}
            className="order-button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Order Now
          </button>
        </div>
        <div className="slider-img" ref={imgRef}>
          <img src={slides[current].img} alt={slides[current].title} />
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
