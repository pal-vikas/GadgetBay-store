import React from 'react'
import './DiscountProduct.css'
import DiscountPage from './DiscountPage'
import arrow from '../../assets/arrow.svg'


const products = [
  {
    id: 1,
    category: "Smartphone",
    name: "iPhone 15 Pro",
    brand: "Apple",
    price: 999,
    image: "https://static.vecteezy.com/system/resources/previews/028/834/121/large_2x/new-natural-titanium-model-of-apple-iphone-15-pro-smartphone-mockup-template-on-white-background-vector-free-photo.jpg",
    description: "A17 Pro chip, 6.1-inch Super Retina XDR display, triple-camera system."
  },
  {
    id: 2,
    category: "Smartwatch",
    name: "Apple Watch Series 9",
    brand: "Apple",
    price: 399,
    image: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/apple-watch-series-9.png",
    description: "Advanced health sensors, Always-On Retina display, S9 SiP."
  },
  {
    id: 3,
    category: "Camera",
    name: "Sony Alpha a7 IV",
    brand: "Sony",
    price: 2799,
    image: "https://cdn.shoplightspeed.com/shops/650021/files/38418159/1652x1652x1/sony-sony-alpha-a7-iv-mirrorless-digital-camera-wi.jpg",
    description: "33MP full-frame sensor, advanced autofocus, 10-bit 4K video."
  },
  {
    id: 4,
    category: "Smartphone",
    name: "Google Pixel 8 Pro",
    brand: "Google",
    price: 999,
    image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Pixel_8_Pro_in_Bay.max-936x936.format-webp.webp",
    description: "Tensor G3 chip, 6.7-inch LTPO OLED, advanced computational photography."
  }
];



function DiscountProduct() {
  return (
    <>
          <div className="product-container">
              <div className="product-catagory">
                  <div className="product-catagory-1">
                      <h2 className=''>Discount upto 50%</h2>
                      <div className="view-icon">
                          <p>View All</p>
                          <img className='arrow-img' src={arrow} alt="" />
                      </div>
                  </div>
              </div>
          </div>

          <div className="discount-page">
            {
              products.map(product =><DiscountPage name={product.name} img={product.image} price={product.price}/>)
            }
          </div>
        
          
    </>
  )
}

export default DiscountProduct
