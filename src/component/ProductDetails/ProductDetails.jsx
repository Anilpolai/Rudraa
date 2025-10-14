import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectDishes,
  addToCart,
  addToWishlist,
  removeFromWishlist,
  selectWishlistItems,
} from "../../Redux/Slice/roote";
import {
  FaHeart,
  FaShoppingCart,
  FaArrowLeft,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import PageHeader from "../PageHeader/PageHeader";
import RelatedProductsCarousel from "./RelatedProducts";
import ProductViewCounter from "./ProductViewCounter";
import "./productDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const products = useSelector(selectDishes);
  const wishlist = useSelector(selectWishlistItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h3>Product not found ❌</h3>
        <button className="btn btn-dark mt-3" onClick={() => navigate("/products")}>
          <FaArrowLeft className="me-2" /> Back to Products
        </button>
      </div>
    );
  }

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const handleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id));
      toast.info(`${product.name} removed from wishlist 💔`, { autoClose: 1500 });
    } else {
      dispatch(addToWishlist(product));
      toast.success(`${product.name} added to wishlist ❤️`, { autoClose: 1500 });
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
      })
    );
    toast.success(`${product.name} (x${quantity}) added to cart!`, { autoClose: 2000 });
  };

  const handleQtyChange = (type) => {
    setQuantity((prev) => (type === "inc" ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };

  return (
    <>
      <PageHeader title="Product Details" breadcrumb="Details" />
      <div className="container py-5 product-details-page">
        <button className="btn btn-outline-dark mb-4" onClick={() => navigate(-1)}>
          <FaArrowLeft className="me-2" /> Back
        </button>

        <div className="row g-5 align-items-start">
          {/* ===== Left Image ===== */}
          <div className="col-lg-6 col-md-12">
            <motion.div
              className="main-img-container"
              whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(198,40,40,0.3)" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={Array.isArray(product.image) ? product.image[0] : product.image}
                alt={product.name}
                className="img-fluid main-img rounded-4"
              />
            </motion.div>

            {Array.isArray(product.image) && (
              <div className="thumbs mt-3 d-flex gap-3 justify-content-center flex-wrap">
                {product.image.map((img, index) => (
                  <motion.img
                    key={index}
                    src={img}
                    alt={product.name}
                    className="thumb-img"
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    onClick={(e) => {
                      document.querySelector(".main-img").src = e.target.src;
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* ===== Right Text Info ===== */}
          <div className="col-lg-6 col-md-12">
            <div className="product-info-section">
              <h2 className="fw-bold product-title mb-3">{product.name}</h2>
              <p className="text-muted product-category">{product.category}</p>

              <div className="price-box mb-4">
                {product.oldPrice && (
                  <span className="text-decoration-line-through text-muted me-2">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-ketchup fw-bold fs-4">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              <p className="mb-4 product-description">{product.description}</p>

              {/* Qty Control */}
              <div className="qty-section d-flex align-items-center mb-4">
                <span className="fw-semibold me-3">Qty:</span>
                <div className="qty-control d-flex align-items-center">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="qty-btn"
                    onClick={() => handleQtyChange("dec")}
                  >
                    <FaMinus />
                  </motion.button>
                  <span className="qty-value">{quantity}</span>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="qty-btn"
                    onClick={() => handleQtyChange("inc")}
                  >
                    <FaPlus />
                  </motion.button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap gap-3 mb-3">
                <motion.button
                  className="btn  rounded-pill px-4 add-cart-btn"
                  onClick={handleAddToCart}
                  whileHover={{
                    scale: 1.07,
                    boxShadow: "0px 8px 25px rgba(198, 40, 40, 0.4)",
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <FaShoppingCart className="me-2" /> Add to Cart
                </motion.button>

                <motion.button
                  className={`btn rounded-pill px-4 ${
                    isWishlisted ? "btn-ketchup" : "btn-outline-ketchup"
                  }`}
                  onClick={handleWishlist}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 8px 25px rgba(198, 40, 40, 0.4)",
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <FaHeart className="me-2" />
                  {isWishlisted ? "Remove Wishlist" : "Add to Wishlist"}
                </motion.button>
              </div>

              <ProductViewCounter min={10} max={100} interval={3000} />
            </div>
          </div>
        </div>

        <ToastContainer />
      </div>

      <RelatedProductsCarousel currentProductId={product.id} />
    </>
  );
}
