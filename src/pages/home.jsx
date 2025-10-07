import React from 'react'
import Slider from '../component/slider/slider'
import ProductSection from '../component/ProductSection/ProductSection'
import ProductWallpaper from '../component/ProductWallpaper/ProductWallpaper'
import PopularDishes from '../component/PopularDishes/PopularDishes'
import KetchupOffer from '../component/KetchupOffer/KetchupOffer'
import ReviewSection from '../component/ReviewSection/ReviewSection'

const home = () => {
  return (
    <div>
        {/* <Header/> */}
        <Slider/>
        <ProductSection/>
        <ProductWallpaper/>
        <PopularDishes/>
        <KetchupOffer/>
        <ReviewSection/>
    </div>
  )
}

export default home