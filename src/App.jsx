import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import Page from './pages/page'
import Product from './pages/prooduct'
import Blog from './pages/blog'
import Endlayout from './component/endlayout/endlayout'
import {Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
    <Routes>
        <Route path="/" element={<Endlayout />}>
          <Route index element={<Home />} />
          <Route path='/page' element={<Page/>} />
          <Route path='/prooduct' element={<Product/>} />
          <Route path='/blog' element={<Blog />} />
          
          {/* <Route path="about" element={<About />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
