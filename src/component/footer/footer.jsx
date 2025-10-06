import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="gy-4">
          {/* Logo & Info */}
          <Col md={4}>
            <div className="footer-logo d-flex align-items-center mb-3">
              <img
                src="/logo192.png"
                alt="Foodu Logo"
                className="footer-logo-img"
              />
              <h3 className="footer-brand">FOODU</h3>
            </div>
            <p className="footer-text">
              Discover culinary delights, recipes, and inspiration in our food
              haven.
            </p>

            <div className="footer-hours">
              <p>
                <strong>MON - FRI</strong> <span>8:00 AM - 6:00 PM</span>
              </p>
              <p>
                <strong>SATURDAY</strong> <span>9:00 AM - 5:00 PM</span>
              </p>
            </div>
          </Col>

          {/* Explore Links */}
          <Col md={2}>
            <h5 className="footer-title">Explore</h5>
            <ul className="footer-links">
              <li>Company Profile</li>
              <li>About</li>
              <li>Help Center</li>
              <li>Career</li>
              <li>Features</li>
              <li>Contact</li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={3}>
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
          </Col>

          {/* Newsletter */}
          <Col md={3}>
            <h5 className="footer-title">Newsletter</h5>
            <p>
              Join our subscribers list to get the latest news and special
              offers.
            </p>
            <div className="newsletter-box">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="footer-btn">Subscribe</button>
            </div>

            <div className="footer-social mt-3">
              <span>Social Media:</span>
              <div className="social-icons">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <hr />
        <p className="footer-bottom text-center">
          © Copyright 2025 Foodu. All Rights Reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
