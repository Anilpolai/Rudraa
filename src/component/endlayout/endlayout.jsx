import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import {Outlet} from 'react-router-dom'

const endlayout = () => {
  return (
   <div className="app-layout">
      <Header />
      <main>
        <Outlet /> {/* ✅ main page content will render here */}
      </main>
      <Footer />
    </div>
  )
}

export default endlayout