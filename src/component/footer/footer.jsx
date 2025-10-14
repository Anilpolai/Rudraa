import React, { useEffect, useRef } from "react";
import logo from "../../img/Rudraalogo.png";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { gsap } from "gsap";
import "./footer.css";

const Footer = () => {
  const socialRefs = useRef([]);

  useEffect(() => {
    // GSAP animation for social icons
    gsap.from(socialRefs.current, {
      opacity: 0,
      scale: 0,
      rotation: -360,
      y: 30,
      stagger: 0.2,
      ease: "back.out(1.7)",
      duration: 1,
    });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Logo & Info */}
          <div className="footer-col">
            <div className="footer-logo">
              <img src={logo} alt="Rudraa Foods Logo" className="footer-logo-img" />
            </div>
            <p className="footer-text">
              Discover authentic flavors, quality ingredients, and the taste of
              tradition with Rudraa Foods.
            </p>
            <div className="footer-hours">
              <p>
                <strong>MON - FRI</strong> <span>8:00 AM - 6:00 PM</span>
              </p>
              <p>
                <strong>SATURDAY</strong> <span>9:00 AM - 5:00 PM</span>
              </p>
            </div>
          </div>

          {/* Explore Links */}
          <div className="footer-col">
            <h5 className="footer-title">Explore</h5>
            <ul className="footer-links">
              <li>
                <NavLink to="/" end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/product">Product</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h5 className="footer-title">Contact Info</h5>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt /> Plot No. 36-37, Sai Shraddha Industrial Estate,
                Near Masama Road, Olpad, Surat - 394540
              </li>
              <li>
                <FaPhoneAlt /> +91 9601481587
              </li>
              <li>
                <FaEnvelope /> co-founder@rudraafoods.com
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h5 className="footer-title">Newsletter</h5>
            <p>
              Join our subscribers list to get the latest news and special
              offers.
            </p>
            <div className="newsletter-box">
              <input
                type="email"
                placeholder="Your Email"
                className="newsletter-input"
              />
              <button className="footer-btn">Subscribe →</button>
            </div>

            {/* Social Media */}
            <div className="footer-social">
              <span>Follow Us:</span>
              <div className="social-icons">
                {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                  <Icon
                    key={index}
                    ref={(el) => (socialRefs.current[index] = el)}
                    className="social-icon"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="footer-bottom">
          © 2025 <strong>Rudraa Foods</strong>. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
