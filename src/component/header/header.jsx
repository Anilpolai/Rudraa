import React from "react";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        {/* Logo */}
        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
            alt="logo"
          />
          <h2>FOODU</h2>
        </div>

        {/* Navbar */}
        <ul className="nav">
          <li>Home</li>
          <li>Pages <span className="arrow">▼</span></li>
          <li>Product <span className="arrow">▼</span></li>
          <li>Blog <span className="arrow">▼</span></li>
          <li className="active">Shop <span className="arrow">▼</span></li>
        </ul>

        {/* Cart & Hamburger */}
        <div className="right-section">
          <div className="cart">
            <FaShoppingCart />
            <span className="badge">3</span>
          </div>
          <div className="hamburger">
            <FaBars />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
