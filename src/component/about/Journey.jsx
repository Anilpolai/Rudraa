import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./journey.css";

gsap.registerPlugin(ScrollTrigger);

const Journey = () => {
  const sectionsRef = useRef([]);
  const countersRef = useRef([]);
  const imagesRef = useRef([]);

  const journeyData = [
    {
      year: 2019,
      title: "The Beginning",
      text: "Rudraa Foods was founded with a mission to create authentic and quality food that connects hearts through taste.",
      img: "https://i.pinimg.com/1200x/f1/eb/e6/f1ebe623957062ba296cd607a7a7eabb.jpg",
    },
    {
      year: 2020,
      title: "Innovation & Growth",
      text: "With innovation at our core, we expanded our product line and introduced modern packaging and eco-friendly practices.",
      img: "https://i.pinimg.com/1200x/5f/54/4b/5f544b25dcefe2c39f003be4eb0d21f4.jpg",
    },
    {
      year: 2022,
      title: "Recognition & Expansion",
      text: "Rudraa Foods gained national recognition, winning hearts across India for quality, freshness, and taste.",
      img: "https://i.pinimg.com/736x/24/3e/f0/243ef0cb5b70a2dfec7a270a51e0225d.jpg",
    },
    {
      year: 2024,
      title: "Future Forward",
      text: "With cutting-edge technology and global ambitions, we continue to expand into new cities and countries.",
      img: "https://i.pinimg.com/736x/4c/80/4d/4c804de8b9cf8ddbf7f407be654c9f61.jpg",
    },
  ];

  useEffect(() => {
    // Timeline animations
    sectionsRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 100, rotateY: 45 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Image parallax
    imagesRef.current.forEach((img) => {
      gsap.to(img, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Counters
    countersRef.current.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 60;
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };

      ScrollTrigger.create({
        trigger: counter,
        start: "top 90%",
        onEnter: updateCount,
      });
    });
  }, []);

  return (
    <div className="journey-page">
      {/* Hero Section */}
      <div className="hero-overlay text-center">
        <h1>Our Journey Since 2019</h1>
        <p>Passion • Innovation • Excellence</p>
      </div>

      {/* Timeline Section */}
      <section className="journey-timeline container">
        <div className="timeline-line"></div>

        {journeyData.map((item, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            key={item.year}
            ref={(el) => (sectionsRef.current[index] = el)}
          >
            <div
              className="timeline-img"
              ref={(el) => (imagesRef.current[index] = el)}
            >
              <img src={item.img} alt={item.title} />
            </div>
            <div className="timeline-content">
              <h2>{item.year}</h2>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Counters Section */}
      <section className="journey-counter">
        {[
          { target: 300, label: "Delicious Dishes" },
          { target: 1200, label: "Happy Customers" },
          { target: 25, label: "City Branches" },
        ].map((c, i) => (
          <div className="counter-item" key={i}>
            <h2 ref={(el) => (countersRef.current[i] = el)} data-target={c.target}>
              0
            </h2>
            <p>{c.label}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Journey;
