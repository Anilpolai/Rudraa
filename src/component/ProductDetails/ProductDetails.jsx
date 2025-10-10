import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import OwlCarousel from "react-owl-carousel";
import {
  selectDishes,
  addToCart,
  addToWishlist,
  removeFromWishlist,
  selectWishlistItems,
} from "../../Redux/Slice/roote";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ProductDetails.css";
import PageHeader from "../PageHeader/PageHeader";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(selectDishes);
  const wishlist = useSelector(selectWishlistItems);
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(
    Array.isArray(product?.image) ? product.image[0] : product?.image
  );

  const isWishlisted = wishlist.some((item) => item.id === productId);

  if (!product) {
    return (
      <div className="container py-5">
        <h2>Product not found!</h2>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({ id: product.id, name: product.name, price: product.price, quantity })
    );
    toast.success(`${product.name} added to cart!`, { position: "top-right", autoClose: 2000 });
  };

  const handleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id));
      toast.info(`${product.name} removed from wishlist 💔`, { autoClose: 1500 });
    } else {
      dispatch(addToWishlist(product));
      toast.success(`${product.name} added to wishlist ❤️`, { autoClose: 1500 });
    }
  };

  return (
    <>
      <PageHeader title="Product Details" breadcrumb="Details" />

      <div className="product-details-container">
        <div className="left-image">
          {/* Main image */}
          <img src={mainImage} alt={product.name} />

          {/* Carousel for multiple images */}
          {Array.isArray(product.image) && product.image.length > 1 && (
            <OwlCarousel
              className="owl-theme"
              items={4}
              margin={10}
              nav
              dots={false}
              responsive={{
                0: { items: 2 },
                600: { items: 3 },
                1000: { items: 4 },
              }}
            >
              {product.image.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`thumb-${index}`}
                  className="thumbnail-img"
                  onClick={() => setMainImage(img)}
                  style={{
                    cursor: "pointer",
                    border: mainImage === img ? "2px solid #ff0033" : "none",
                  }}
                />
              ))}
            </OwlCarousel>
          )}
        </div>

        <div className="right-info">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-category">{product.category}</p>
          <p className="product-description">{product.description}</p>

          <div className="product-price">
            {product.oldPrice && (
              <span className="old-price">${product.oldPrice.toFixed(2)}</span>
            )}
            <span className="current-price">${product.price.toFixed(2)}</span>
          </div>

          <div className="quantity-selector">
            <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

          <div className="cart-wishlist-row">
            <button className="add-cart-btn" onClick={handleAddToCart}>
              <FaShoppingCart className="me-2" /> ADD TO CART
            </button>

            <button
              className={`wishlist-icon ${isWishlisted ? "active" : ""}`}
              onClick={handleWishlist}
            >
              <FaHeart />
            </button>
          </div>
        </div>

        <ToastContainer />
      </div>
    </>
  );
}
