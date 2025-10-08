// src/components/ProductGrid.jsx
import React, { useEffect, useRef } from "react";
import { FaHeart, FaEye, FaShoppingCart } from "react-icons/fa";
import VanillaTilt from "vanilla-tilt";
import "bootstrap/dist/css/bootstrap.min.css";
import "./product.css";

const products = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 12.0,
    category: "Cheese, Pizza",
    image:
      "https://i.pinimg.com/736x/82/56/85/8256851bfe0aa17f09bd165a03dba509.jpg",
  },
  {
    id: 2,
    name: "Beef Burger",
    price: 5.0,
    oldPrice: 8.0,
    category: "Creamy, Burger",
    image:
      "https://i.pinimg.com/736x/86/c0/34/86c0347ad1c359fa624500c34deba60a.jpg",
  },
  {
    id: 3,
    name: "Grilled Flank Steak",
    price: 14.0,
    category: "Beef, Steak",
    image:
      "https://i.pinimg.com/1200x/f5/9e/ec/f59eec78e5831b66852cf1e2e213b9d5.jpg",
  },
  {
    id: 4,
    name: "Barbecue Chicken",
    price: 8.0,
    category: "BBQ, Meat",
    image:
      "https://i.pinimg.com/736x/32/df/6f/32df6fe5f2ef2b0ea84afafdcc6fac8e.jpg",
  },
];

export default function ProductGrid() {
  const tiltRefs = useRef([]);

  useEffect(() => {
    tiltRefs.current.forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 20, // how much tilt
          speed: 400, // speed of tilt
          scale: 1.1, // zoom effect
          glare: true, // light reflection
          "max-glare": 0.3,
          gyroscope: true, // enable for mobile motion sensor
        });
      }
    });
  }, []);

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">🍕 Our Products 🍔</h2>
        <p className="text-muted">Real 3D Motion & Zoom Effect</p>
      </div>

      <div className="row g-4 justify-content-center">
        {products.map((p, index) => (
          <div className="col-md-3 col-sm-6" key={p.id}>
            <div
              className="product-card shadow-sm"
              ref={(el) => (tiltRefs.current[index] = el)}
            >
              <div className="product-img-container">
                <img src={p.image} alt={p.name} className="product-img" />
                <div className="product-overlay">
                  <button className="icon-btn"><FaHeart /></button>
                  <button className="icon-btn"><FaEye /></button>
                </div>
              </div>

              <div className="product-info text-center mt-3">
                <small className="text-uppercase text-muted">{p.category}</small>
                <h5 className="mt-1 fw-semibold">{p.name}</h5>
                <p className="price">
                  {p.oldPrice && (
                    <span className="text-decoration-line-through text-muted me-2">
                      ${p.oldPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-danger fw-bold">${p.price.toFixed(2)}</span>
                </p>
                <button className="btn btn-outline-dark btn-sm rounded-pill px-3">
                  <FaShoppingCart className="me-2" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
