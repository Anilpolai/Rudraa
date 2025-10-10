import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../Redux/Slice/roote"; // ✅ Redux selector
import gsap from "gsap";
import "./header.css";
import logo from '../../img/Rudraalogo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);

  // Get cart items from Redux
  const cartItems = useSelector(selectCartItems);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

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

  // Header show/hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY.current && currentScroll > 80) {
        // scrolling down -> hide header
        gsap.to(headerRef.current, {
          y: "-120%",
          duration: 0.5,
          ease: "power3.inOut",
        });
      } else {
        // scrolling up -> show header
        gsap.to(headerRef.current, {
          y: "0%",
          duration: 0.5,
          ease: "power3.inOut",
        });
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= Desktop Header ================= */}
      <div className="header-container desktop-header" ref={headerRef}>
        <div className="header">
          {/* Logo */}
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>

          {/* Nav Links */}
          <ul className="nav">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/product">Product</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>

          {/* Cart + Menu */}
          <div className="right-section">
            <Link to="/cart" className="cart">
              <FaShoppingCart />
              {cartCount > 0 && <span className="badge">{cartCount}</span>}
            </Link>
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
          <img src={logo} alt="logo" />
        </Link>

        <Link to="/cart" className="cart">
          <FaShoppingCart />
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </Link>
      </div>

      {/* ================= Sidebar Menu ================= */}
      <div className="sidebar" ref={sidebarRef}>
        <div className="close-btn" onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </div>
        <ul className="sidebar-menu">
          <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/product" onClick={() => setMenuOpen(false)}>Product</NavLink></li>
          <li><NavLink to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink></li>
          <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
}

export default Header;
