import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDishes, addToCart } from "../../Redux/Slice/roote";
import { FaHeart, FaEye, FaShoppingCart } from "react-icons/fa";
import VanillaTilt from "vanilla-tilt";
import "./PopularDishes.css";

export default function PopularDishes() {
  const dispatch = useDispatch();
  const dishes = useSelector(selectDishes);
  const tiltRefs = useRef([]);

  useEffect(() => {
    tiltRefs.current.forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 25,
          perspective: 800,
          scale: 1.05,
          speed: 500,
          glare: true,
          "max-glare": 0.3,
          easing: "cubic-bezier(.03,.98,.52,.99)",
        });
      }
    });

    return () =>
      tiltRefs.current.forEach((el) => el && el.vanillaTilt?.destroy());
  }, [dishes]);

  return (
    <section className="popular-dishes py-5">
      <div className="container text-center">
        <p className="badge-text text-danger mb-2">BEST DEAL</p>
        <h2 className="section-title mb-5">Our Popular Dishes</h2>

        <div className="row g-4 justify-content-center">
          {dishes.map(({ id, name, category, price, oldPrice, badge, image }, index) => (
            <div key={id} className="col-6 col-md-4 col-lg-3">
              <div
                className="product-card shadow-sm"
                ref={(el) => (tiltRefs.current[index] = el)}
              >
                <div className="product-img-container">
                  <img src={image} alt={name} className="product-img" />
                  <div className="product-overlay">
                    <button className="icon-btn" aria-label="Add to favorites">
                      <FaHeart />
                    </button>
                    <button className="icon-btn" aria-label="View product">
                      <FaEye />
                    </button>
                  </div>
                  {badge && <span className="badge bg-danger badge-top">{badge}</span>}
                </div>

                <div className="product-info text-center mt-3">
                  <small className="text-uppercase text-muted">{category}</small>
                  <h5 className="mt-1 fw-semibold">{name}</h5>
                  <p className="price">
                    {oldPrice && (
                      <span className="text-decoration-line-through text-muted me-2">
                        {typeof oldPrice === "number" ? `$${oldPrice.toFixed(2)}` : oldPrice}
                      </span>
                    )}
                    <span className="text-danger fw-bold">
                      {typeof price === "number" ? `$${price.toFixed(2)}` : price}
                    </span>
                  </p>
                  <button
                    className="btn btn-outline-dark btn-sm rounded-pill px-3"
                    onClick={() => dispatch(addToCart({ id, name, price }))}
                  >
                    <FaShoppingCart className="me-2" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
