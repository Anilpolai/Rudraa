import React, { useEffect, useRef } from "react";
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
  const iconRefs = useRef([]); // ✅ store icon refs

  useEffect(() => {
    // GSAP Animation: icons pop up with bounce
    gsap.from(iconRefs.current, {
      opacity: 0,
      scale: 0,
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
              <img src="/logo192.png" alt="Foodu Logo" className="footer-logo-img" />
              <h3 className="footer-brand">FOODU</h3>
            </div>
            <p className="footer-text">
              Discover culinary delights, recipes and inspiration in our food haven.
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
              <li>Company Profile</li>
              <li>About</li>
              <li>Help Center</li>
              <li>Career</li>
              <li>Features</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h5 className="footer-title">Contact Info</h5>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt /> 175 10h Street, Office 375 Berlin, De 21562
              </li>
              <li>
                <FaPhoneAlt /> +123 34598768 / +554 34598734
              </li>
              <li>
                <FaEnvelope /> food@restan.com
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h5 className="footer-title">Newsletter</h5>
            <p>
              Join our subscribers list to get the latest news and special offers.
            </p>
            <div className="newsletter-box">
              <input
                type="email"
                placeholder="Your Email"
                className="newsletter-input"
              />
              <button className="footer-btn">Subscribe →</button>
            </div>
            <div className="footer-social">
              <span>Social Media:</span>
              <div className="social-icons">
                {[
                  { icon: FaFacebookF, link: "#" },
                  { icon: FaInstagram, link: "#" },
                  { icon: FaLinkedinIn, link: "#" },
                ].map(({ icon: Icon, link }, i) => (
                  <a
                    href={link}
                    key={i}
                    ref={(el) => (iconRefs.current[i] = el)}
                    className="social-icon"
                  >
                    <Icon /> {/* ✅ Correct JSX for rendering */}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="footer-bottom">
          © Copyright 2025 <strong>Foodu</strong>. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
