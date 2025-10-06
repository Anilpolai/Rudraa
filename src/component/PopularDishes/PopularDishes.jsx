import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { selectDishes } from "../../Redux/Slice/roote";
import "./PopularDishes.css";

gsap.registerPlugin(ScrollTrigger);

export default function PopularDishes() {
  const containerRef = useRef(null);
  const dishes = useSelector(selectDishes);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll(".dish-card");
    elements.forEach((el, i) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 50 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.2,
        }
      );
    });
  }, [dishes]); // run effect on dishes change

  return (
    <section className="popular-dishes py-5">
      <div className="container text-center">
        <p className="badge-text text-danger mb-2">BEST DEAL</p>
        <h2 className="section-title mb-5">Our Popular Dishes</h2>

        <div className="row" ref={containerRef}>
          {dishes.map(({ id, name, category, price, oldPrice, badge, image }) => (
            <div key={id} className="col-md-3 mb-4">
              <div className="card dish-card shadow-sm border-0">
                <div className="position-relative">
                  <img src={image} alt={name} className="card-img-top" />
                  {badge && (
                    <span className="badge bg-danger position-absolute badge-sale">
                      {badge}
                    </span>
                  )}
                </div>
                <div className="card-body">
                  <small className="text-muted text-uppercase">{category}</small>
                  <h5 className="card-title mt-2">{name}</h5>
                  <p className="price">
                    {oldPrice && (
                      <del className="text-muted me-2" style={{ fontSize: "0.9rem" }}>
                        {oldPrice}
                      </del>
                    )}
                    <span className="text-danger fw-bold">{price}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
