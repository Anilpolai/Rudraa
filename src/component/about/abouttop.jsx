import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./abouttop.css";
import abut from "../../img/journey/abut.jpeg";

export default function AboutTop() {
  return (
    <section className="abouttop container py-5">
      <div className="row align-items-center justify-content-center h-100">
        {/* Left Content */}
        <div className="col-lg-6 col-md-10 text-lg-start text-center mb-4 mb-lg-0">
          <motion.h1
            className="display-4 fw-bold text-dark"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            EXPERIENCE OF <br />
            REAL RECIPES TASTE
          </motion.h1>

          <hr className="my-4" />

          <div className="d-flex justify-content-lg-start justify-content-center gap-5 stats">
            <div>
              <h2 className="text-danger fw-bold mb-0">98K</h2>
              <p className="text-muted small">DAILY ORDERS</p>
            </div>
            <div>
              <h2 className="text-danger fw-bold mb-0">5+</h2>
              <p className="text-muted small">MENU & DISH</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-lg-6 text-center position-relative">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="image-wrapper"
          >
            <img
              src={abut}
              alt="Delicious dish"
              className="img-fluid rounded-circle shadow-lg"
            />
          </motion.div>
          <div className="bg-accent"></div>
        </div>
      </div>
    </section>
  );
}
