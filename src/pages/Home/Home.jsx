import React from 'react'
import './Home.css'
import ProductCategory from '../ProductCategory/ProductCategory'
import Banner from '../../Banner/Banner'
import Carousel from '../../Carousel/Carousel'

function Home() {
  return (
    <>
      <div className="">
        <Carousel/>
        <ProductCategory/>
        <Banner/>
      </div>
    </>
  )
}

export default Home;
