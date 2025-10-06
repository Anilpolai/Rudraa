import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import Endlayout from './component/endlayout/endlayout'
import {Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
    <Routes>
        <Route path="/" element={<Endlayout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
