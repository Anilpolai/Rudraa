import React, { useEffect, useRef } from "react";
import "./ProductWallpaper.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import k1 from "../../img/slider/katchap1.png";
import k2 from "../../img/slider/katchap2.png";
import k3 from "../../img/slider/katchap3.png";

gsap.registerPlugin(ScrollTrigger);

export default function ProductWallpaper() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for left image
      gsap.to(".big-img", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: ".wallpaper-left",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Scroll fade-in for left side
      gsap.from(".wallpaper-left", {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".wallpaper-left",
          start: "top 85%",
        },
      });

      // Right side fade & staggered animation
      gsap.from(".right-item", {
        opacity: 0,
        x: 120,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".wallpaper-right",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="product-wallpaper" ref={sectionRef}>
      <div className="product-wallpaper-container">
        {/* Left side - tall ketchup bottle */}
        <div className="wallpaper-left">
          <img src={k1} alt="Ketchup Bottle" className="big-img" />
        </div>

        {/* Right side - info cards */}
        <div className="wallpaper-right">
          <div className="right-item1">
            <img src={k2} alt="Ketchup Product" className="small-img" />
            <div className="text-box">
              <h3>Premium Tomato Ketchup</h3>
              <p>
                Freshly crafted with the finest ingredients for a rich, tangy flavor.
              </p>
            </div>
          </div>

          <div className="right-item2">
            <img src={k3} alt="Organic Ketchup" className="small-img" />
            <div className="text-box">
              <h3>Organic Ketchup</h3>
              <p>100% natural and perfect for every delicious recipe.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
