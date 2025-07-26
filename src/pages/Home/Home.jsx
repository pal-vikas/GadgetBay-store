import React from 'react'
import './Home.css'
import ProductCategory from '../ProductCategory/ProductCategory'
import Banner from '../../Banner/Banner'
import Carousel from '../../Carousel/Carousel'
import DiscountProduct from '../DiscountPage/DiscountProduct'

function Home() {
  return (
    <>
      <div className="">
        <Carousel/>
        <ProductCategory/>
        <DiscountProduct/>
        <Banner/>
      </div>
    </>
  )
}

export default Home;
