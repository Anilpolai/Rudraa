import React from "react";
import { FaShippingFast } from "react-icons/fa";
import "./ShippingInfo.css";

export default function ShippingInfo({ days = 3 }) {
  return (
    <div className="shipping-info d-flex align-items-center mt-2">
      <FaShippingFast className="me-2 text-primary" />
      <span>Delivery in {days} {days === 1 ? "day" : "days"}</span>
    </div>
  );
}
