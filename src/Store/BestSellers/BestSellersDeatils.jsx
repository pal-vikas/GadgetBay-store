import React from 'react'

function BestSellersDeatils({name, img, price}) {
  return (
    <>
            <div className="bestSeller-box">
                <img className='best-img' src={img} alt="img" />
                <p className='best-name'>{name}</p>
                <p className='best-price'> ₹{Math.floor(price*85)}</p>
            </div>
    </>
  )
}

export default BestSellersDeatils
