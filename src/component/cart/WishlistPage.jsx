import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectWishlistItems, removeFromWishlist, addToCart } from "../../Redux/Slice/roote";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./wishlist.css";

export default function WishlistPage() {
  const dispatch = useDispatch();
  const wishlist = useSelector(selectWishlistItems);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success(`${item.name} added to cart 🛒`);
  };

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
    toast.info(`Removed from wishlist 💔`);
  };

  return (
    <div className="container py-5 wishlist-page">
      <h2 className="mb-4 fw-bold text-center">My Wishlist 💖</h2>

      {wishlist.length === 0 ? (
        <p className="text-center text-muted">Your wishlist is empty!</p>
      ) : (
        <div className="row g-4">
          {wishlist.map((item) => (
            <div key={item.id} className="col-6 col-md-4 col-lg-3">
              <div className="wishlist-card shadow-sm p-3 text-center">
                <img src={item.image} alt={item.name} className="wishlist-img mb-3" />
                <h5 className="fw-semibold">{item.name}</h5>
                <p className="text-danger fw-bold">${item.price.toFixed(2)}</p>
                <div className="d-flex justify-content-center gap-2">
                  <button
                    className="btn btn-outline-dark btn-sm"
                    onClick={() => handleAddToCart(item)}
                  >
                    <FaShoppingCart className="me-2" /> Add to Cart
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleRemove(item.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <ToastContainer />
    </div>
  );
}
