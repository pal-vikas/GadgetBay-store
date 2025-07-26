import React from 'react'
import './Home.css'
import ProductCategory from '../ProductCategory/ProductCategory'
import Banner from '../../Banner/Banner'
import Carousel from '../../Carousel/Carousel'
import DiscountProduct from '../DiscountPage/DiscountProduct'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from '../DiscountPage/ProductDetails'
import Store from '../../Store/store'

function Home() {
  return (
    <>
      <div className="">
        <Carousel/>
        <ProductCategory/>
        <Store/>
        <DiscountProduct/>

        <Banner/>
      </div>
    </>
  )
}

export default Home;
