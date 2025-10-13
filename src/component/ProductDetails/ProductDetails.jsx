import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
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
import RelatedProducts from "./RelatedProducts";
import ProductViewCounter from "./ProductViewCounter";
import ShippingInfo from "./ShippingInfo";

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
      <div className="not-found">
        <h2>Product not found!</h2>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
      })
    );
    toast.success(`${product.name} added to cart! 🛒`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id));
      toast.info(`${product.name} removed from wishlist 💔`, {
        position: "top-right",
        autoClose: 1500,
      });
    } else {
      dispatch(addToWishlist(product));
      toast.success(`${product.name} added to wishlist ❤️`, {
        position: "top-right",
        autoClose: 1500,
      });
    }
  };

  return (
    <>
      <PageHeader title="Product Details" breadcrumb="Details" />

      <div className="product-details-container">
        {/* LEFT IMAGE SECTION */}
        <div className="left-image">
          <img src={mainImage} alt={product.name} className="main-img" />

          {Array.isArray(product.image) && product.image.length > 1 && (
            <OwlCarousel
              className="owl-theme thumbnails-carousel"
              items={5}
              margin={10}
              nav
              dots={false}
              loop
              autoplay
              autoplayTimeout={3000}
              autoplayHoverPause
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
                  className={`thumbnail-img ${
                    mainImage === img ? "active" : ""
                  }`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </OwlCarousel>
          )}
        </div>

        {/* RIGHT INFO SECTION */}
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
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <div className="cart-wishlist-row">
            <button className="add-cart-btn" onClick={handleAddToCart}>
              <FaShoppingCart className="me-2" /> ADD TO CART
            </button>

            <button
              className={`wishlist-icon ${isWishlisted ? "active" : ""}`}
              onClick={handleWishlist}
              aria-label="Toggle Wishlist"
            >
              <FaHeart />
            </button>
          </div>

          {/* Live viewers */}
          <ProductViewCounter min={10} max={100} interval={3000} />

          {/* Shipping info */}
          {/* <ShippingInfo days={2} /> */}
        </div>

        <ToastContainer />
      </div>

      {/* <RelatedProducts currentProductId={product.id} /> */}
    </>
  );
}
