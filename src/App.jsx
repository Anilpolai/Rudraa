import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Blog from "./pages/blog";
import Product from "./pages/product";
import About from "./pages/about";
import Contact from "./pages/contact";
import Cart from './component/cart/CartPage'
import Endlayout from "./component/endlayout/endlayout";
import Loader from "./component/loader/Loader";

function App() {
  const location = useLocation(); // ✅ Track current route
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader on every route change
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // loader duration 1s
    return () => clearTimeout(timer);
  }, [location]); // runs whenever the path changes

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Endlayout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="product" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
