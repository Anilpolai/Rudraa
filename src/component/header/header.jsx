import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import gsap from "gsap";
import "./header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  // GSAP animation for sidebar
  useEffect(() => {
    if (menuOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: "-100%",
        duration: 0.6,
        ease: "power3.in",
      });
    }
  }, [menuOpen]);

  return (
    <>
      {/* ================= Desktop Header ================= */}
      <div className="header-container desktop-header">
        <div className="header">
          {/* Logo */}
          <Link to="/" className="logo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
              alt="logo"
            />
            <h2>FOODU</h2>
          </Link>

          {/* Nav Links */}
          <ul className="nav">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/pages">Pages <span className="arrow">▼</span></NavLink></li>
            <li><NavLink to="/products">Product <span className="arrow">▼</span></NavLink></li>
            <li><NavLink to="/blog">Blog <span className="arrow">▼</span></NavLink></li>
            <li><NavLink to="/shop">Shop <span className="arrow">▼</span></NavLink></li>
          </ul>

          {/* Cart + Menu */}
          <div className="right-section">
            <Link to="/cart" className="cart">
              <FaShoppingCart />
              <span className="badge">3</span>
            </Link>
            {/* Hamburger always visible on smaller viewports */}
            <div className="hamburger" onClick={() => setMenuOpen(true)}>
              <FaBars />
            </div>
          </div>
        </div>
      </div>

      {/* ================= Mobile Header ================= */}
      <div className="mobile-header">
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </div>

        <Link to="/" className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
            alt="logo"
          />
          <h2>FOODU</h2>
        </Link>

        <Link to="/cart" className="cart">
          <FaShoppingCart />
          <span className="badge">3</span>
        </Link>
      </div>

      {/* ================= Sidebar Menu ================= */}
      <div className="sidebar" ref={sidebarRef}>
        <div className="close-btn" onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </div>
        <ul className="sidebar-menu">
          <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/pages" onClick={() => setMenuOpen(false)}>Pages</NavLink></li>
          <li><NavLink to="/products" onClick={() => setMenuOpen(false)}>Product</NavLink></li>
          <li><NavLink to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink></li>
          <li><NavLink to="/shop" onClick={() => setMenuOpen(false)}>Shop</NavLink></li>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
}

export default Header;
