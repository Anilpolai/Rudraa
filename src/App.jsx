import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Blog from "./pages/blog";
import Product from "./pages/product"; 
import ProductPage from './component/ProductDetails/ProductDetails';
import About from "./pages/about";
import Contact from "./pages/contact";
import Cart from './component/cart/CartPage';
import WishlistPage from "./component/cart/WishlistPage";
import Endlayout from "./component/endlayout/endlayout";
import Loader from "./component/loader/Loader";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Endlayout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="product" element={<Product />} /> {/* Product Grid */}
        <Route path="products/:id" element={<ProductPage />} />
        <Route path="wishlist" element={<WishlistPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
