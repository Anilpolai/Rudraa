import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDishes, addToCart, addToWishlist, removeFromWishlist, selectWishlistItems } from "../../Redux/Slice/roote";
import { FaHeart, FaEye, FaShoppingCart } from "react-icons/fa";
import VanillaTilt from "vanilla-tilt";
import "./PopularDishes.css";
import { useNavigate } from "react-router-dom";

export default function PopularDishes() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dishes = useSelector(selectDishes) || [];
  const wishlist = useSelector(selectWishlistItems) || [];
  const tiltRefs = useRef([]);

  // Track main image for each product
  const [mainImages, setMainImages] = useState({});

  useEffect(() => {
    dishes.forEach((dish) => {
      if (Array.isArray(dish.image)) {
        setMainImages((prev) => ({ ...prev, [dish.id]: dish.image[0] }));
      }
    });
  }, [dishes]);

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

  const handleAddToCart = (dish) => {
    dispatch(addToCart({ ...dish, quantity: 1 }));
  };

  const handleWishlist = (dish) => {
    if (wishlist.some((item) => item.id === dish.id)) {
      dispatch(removeFromWishlist(dish.id));
    } else {
      dispatch(addToWishlist(dish));
    }
  };

  return (
    <section className="popular-dishes py-5">
      <div className="container text-center">
        <p className="badge-text text-danger mb-2">BEST DEAL</p>
        <h2 className="section-title mb-5">Our Popular Dishes</h2>

        <div className="row g-4 justify-content-center">
          {dishes.map(({ id, name, category, price, oldPrice, badge, image }) => {
            const mainImage = Array.isArray(image) ? mainImages[id] || image[0] : image;
            const isWishlisted = wishlist.some((item) => item.id === id);

            return (
              <div key={id} className="col-6 col-md-4 col-lg-3">
                <div
                  className="product-card shadow-sm"
                  ref={(el) => (tiltRefs.current[id] = el)}
                >
                  <div className="product-img-container">
                    <img src={mainImage} alt={name} className="product-img" />

                    {/* Thumbnails if multiple images */}
                    {Array.isArray(image) && image.length > 1 && (
                      <div className="thumbnails d-flex justify-content-center gap-2 mt-2">
                        {image.map((img, index) => (
                          <img
                            key={index}
                            src={img}
                            alt={`thumb-${index}`}
                            className={`thumbnail-img ${mainImage === img ? "active" : ""}`}
                            onClick={() => setMainImages((prev) => ({ ...prev, [id]: img }))}
                          />
                        ))}
                      </div>
                    )}

                    <div className="product-overlay">
                      <button
                        className="icon-btn"
                        aria-label="Add to favorites"
                        onClick={() => handleWishlist({ id, name, category, price, image })}
                      >
                        <FaHeart color={isWishlisted ? "red" : "gray"} />
                      </button>
                      <button
                        className="icon-btn"
                        aria-label="View product"
                        onClick={() => navigate(`/products/${id}`)}
                      >
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
                      onClick={() => handleAddToCart({ id, name, price, image })}
                    >
                      <FaShoppingCart className="me-2" /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
