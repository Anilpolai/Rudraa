import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectDishes } from "../Redux/Slice/roote";
import { FaEye } from "react-icons/fa";
import bannerBg from "../img/back8.jpg";
import "./product.css";

const Product = () => {
  const dishes = useSelector(selectDishes);
  const [gridCols, setGridCols] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(dishes.length / itemsPerPage);
  const currentItems = dishes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      {/* 🌄 PAGE BANNER */}
      <div
        className="page-banner"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="banner-overlay">
          <h1>Special Rudraa Foods</h1>
          <p>
            <i className="fa fa-home"></i> Home <span>›</span> Food
          </p>
        </div>
      </div>

      {/* 🍔 PRODUCT SECTION */}
      <div className="product-page">
        {/* Header */}
        <div className="product-header">
          <h2>Our Special Foods</h2>
          <p>
            Showing {(currentPage - 1) * itemsPerPage + 1}–
            {Math.min(currentPage * itemsPerPage, dishes.length)} of{" "}
            {dishes.length} results
          </p>
        </div>

        {/* Filter bar */}
        <div className="filter-bar">
          <div className="grid-toggle">
            <button
              className={gridCols === 4 ? "active" : ""}
              onClick={() => setGridCols(4)}
            >
              4 Grid
            </button>
            <button
              className={gridCols === 2 ? "active" : ""}
              onClick={() => setGridCols(2)}
            >
              2 Grid
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className={`product-grid grid-${gridCols}`}>
          {currentItems.map((item) => (
            <div key={item.id} className="product-card">
              <div className="img-box">
                <img src={item.image} alt={item.name} />
                <div className="overlay">
                  <div className="icon-circle">
                    <FaEye className="view-icon" />
                  </div>
                </div>
                {item.badge && <span className="badge">{item.badge}</span>}
              </div>

              <h3>{item.name}</h3>
              <p className="category">{item.category}</p>
              <div className="price">
                <span className="new">{item.price}</span>
                {item.oldPrice && (
                  <span className="old">{item.oldPrice}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
