import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import OwlCarousel from "react-owl-carousel";
import VanillaTilt from "vanilla-tilt";
import {
  selectDishes,
  addToCart,
  addToWishlist,
  removeFromWishlist,
  selectWishlistItems,
} from "../../Redux/Slice/roote";
import { FaHeart, FaEye, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./RelatedProducts.css";

export default function RelatedProductsCarousel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(selectDishes) || [];
  const wishlist = useSelector(selectWishlistItems) || [];
  const tiltRefs = useRef([]);

  const isWishlisted = (id) => wishlist.some((item) => item.id === id);

  const handleWishlist = (product) => {
    if (isWishlisted(product.id)) {
      dispatch(removeFromWishlist(product.id));
      toast.info(`${product.name} removed from wishlist 💔`, { autoClose: 1500 });
    } else {
      dispatch(addToWishlist(product));
      toast.success(`${product.name} added to wishlist ❤️`, { autoClose: 1500 });
    }
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({ id: product.id, name: product.name, price: product.price }));
    toast.success(`${product.name} added to cart!`, { autoClose: 1500 });
  };

  const handleClick = (id) => navigate(`/products/${id}`);

  // Initialize VanillaTilt for each product card
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
        });
      }
    });

    return () => tiltRefs.current.forEach((el) => el?.vanillaTilt?.destroy());
  }, [products]);

  const carouselOptions = {
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 2 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 4 },
      1200: { items: 4 },
    },
  };

  return (
    <div className="related-products-carousel py-5">
      <div className="container">
        <h3 className="text-center mb-4">Related Products</h3>

        <OwlCarousel className="owl-theme" {...carouselOptions}>
          {products.map(({ id, name, price, oldPrice, category, image, badge }, index) => (
            <div key={id} className="item">
              <div
                className="product-card shadow-sm"
                ref={(el) => (tiltRefs.current[index] = el)}
                onClick={() => handleClick(id)}
                style={{ cursor: "pointer" }}
              >
                <div className="product-img-container">
                  <img
                    src={Array.isArray(image) ? image[0] : image}
                    alt={name}
                    className="product-img"
                  />
                  <div className="product-overlay">
                    <button
                      className={`icon-btn ${isWishlisted(id) ? "active" : ""}`}
                      aria-label="Add to favorites"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWishlist({ id, name, price, image });
                      }}
                    >
                      <FaHeart />
                    </button>

                    <button
                      className="icon-btn"
                      aria-label="View product"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClick(id);
                      }}
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
                      e.stopPropagation();
                      handleAddToCart({ id, name, price });
                    }}
                  >
                    <FaShoppingCart className="me-2" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>

      <ToastContainer />
    </div>
  );
}
