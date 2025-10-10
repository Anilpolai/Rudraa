import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectDishes, addToCart } from "../../Redux/Slice/roote";
import { FaShoppingCart } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ProductDetails.css";
import PageHeader from "../PageHeader/PageHeader";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(selectDishes);
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="container py-5"><h2>Product not found!</h2></div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ id: product.id, name: product.name, price: product.price, quantity }));
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <>
    <PageHeader title="Product Details" breadcrumb="Details" />
    <div className="product-details-container">
      <div className="left-image">
        <img src={product.image} alt={product.name} />
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

        <button className="add-cart-btn" onClick={handleAddToCart}>
          <FaShoppingCart className="me-2" /> Add to Cart
        </button>
      </div>

      <ToastContainer />
    </div>
    </>
  );
}
