import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, selectCartItems } from "../../Redux/Slice/roote";
import "./CartPage.css";

export default function CartPage() {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  // Calculate total
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page container py-5">
      <h2 className="mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">No items in cart.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="cart-item d-flex align-items-center p-3 mb-3 rounded shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-img"
                />
                <div className="cart-item-details flex-grow-1 ms-3">
                  <h5 className="mb-1">{item.name}</h5>
                  <p className="mb-0 text-muted">{item.category}</p>
                  <div className="price-quantity mt-1">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </div>
                </div>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <hr />
          <div className="d-flex justify-content-end fw-bold fs-5 mt-3">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
}
