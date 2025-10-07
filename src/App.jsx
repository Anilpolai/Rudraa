import './App.css'
import Home from './pages/home'
import Page from './pages/page'
import Product from './pages/product'
import About from './pages/about'
import Contact from './pages/contact'      // 👈 create this file if missing
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
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact />} />      
        {/* {/* <Route path="cart" element={<Cart />} />       } */}
      </Route>
    </Routes>
  )
}

export default App
