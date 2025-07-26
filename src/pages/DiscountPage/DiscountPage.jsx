import React from 'react'
import "./DiscountProduct.css"

function DiscountPage({name, img, price}) {
  return (
    <>
                <div className="products">
                  <div className="discout-box">
                    <img className='product-img' src={img} alt="image" />
                    <p className='product-name'>{name}</p>
                    <p className='product-price'> ₹{Math.floor(price*85)}</p>
                  </div>
              </div>
    </>
  )
}

export default DiscountPage
