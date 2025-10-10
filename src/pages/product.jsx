import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectDishes,
  addToCart,
  addToWishlist,
  removeFromWishlist,
  selectWishlistItems,
} from "../Redux/Slice/roote";
import { FaHeart, FaEye, FaShoppingCart } from "react-icons/fa";
import VanillaTilt from "vanilla-tilt";
import { useNavigate } from "react-router-dom";
import PageHeader from "../component/PageHeader/PageHeader";
import "./product.css";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductGrid() {
  const dispatch = useDispatch();
 const products = useSelector(selectDishes) || [];
  const wishlist = useSelector(selectWishlistItems) || [];
  const tiltRefs = useRef([]);
  const navigate = useNavigate();

  // Navigate to product details
  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };

  // Check if product is wishlisted
  const isWishlisted = (id) => wishlist.some((item) => item.id === id);

  // Wishlist handler
  const handleWishlist = (product) => {
    if (isWishlisted(product.id)) {
      dispatch(removeFromWishlist(product.id));
      toast.info(`${product.name} removed from wishlist 💔`, { autoClose: 1500 });
    } else {
      dispatch(addToWishlist(product));
      toast.success(`${product.name} added to wishlist ❤️`, { autoClose: 1500 });
    }
  };

  // Initialize VanillaTilt
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

    return () => tiltRefs.current.forEach((el) => el && el.vanillaTilt?.destroy());
  }, [products]);

  // Add to cart handler
  const handleAddToCart = (product) => {
    dispatch(addToCart({ id: product.id, name: product.name, price: product.price }));
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Handlers to avoid recreating functions inside JSX
  const handleWishlistClick = (e, product) => {
    e.stopPropagation();
    handleWishlist(product);
  };

  const handleViewClick = (e, id) => {
    e.stopPropagation();
    handleClick(id);
  };

  return (
    <>
      <PageHeader title="Special Food" breadcrumb="Food" />

      <div className="container py-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Our Products</h2>
        </div>

        <div className="row g-5 justify-content-center">
          {products.map(({ id, name, price, oldPrice, category, image, badge }, index) => (
            <div key={id} className="col-6 col-md-4 col-lg-3">
              <div
                className="product-card shadow-sm"
                ref={(el) => (tiltRefs.current[index] = el)}
                onClick={() => handleClick(id)}
                style={{ cursor: "pointer" }}
              >
                <div className="product-img-container">
                  <img src={image} alt={name} className="product-img" />
                  <div className="product-overlay">
                    <button
                      className="icon-btn"
                      aria-label="Add to favorites"
                      onClick={(e) => handleWishlistClick(e, { id, name, price, image })}
                    >
                      <FaHeart color={isWishlisted(id) ? "red" : "gray"} />
                    </button>

                    <button
                      className="icon-btn"
                      aria-label="View product"
                      onClick={(e) => handleViewClick(e, id)}
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
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click
                      handleAddToCart({ id, name, price });
                    }}
                  >
                    <FaShoppingCart className="me-2" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
}
