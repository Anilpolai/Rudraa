import './App.css'
import Home from './pages/home'
import Page from './pages/page'
import Product from './pages/product'
import Blog from './pages/blog'
import Shop from './pages/shop'      // 👈 create this file if missing
// import Cart from './pages/cart'      // 👈 optional, for cart page
import Endlayout from './component/endlayout/endlayout'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Endlayout />}>
        <Route index element={<Home />} />
        <Route path="page" element={<Page />} />
        <Route path="product" element={<Product />} />
        <Route path="blog" element={<Blog />} />
        <Route path="shop" element={<Shop />} />      
        {/* {/* <Route path="cart" element={<Cart />} />       } */}
      </Route>
    </Routes>
  )
}

export default App
