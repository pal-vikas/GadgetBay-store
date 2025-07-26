import React from 'react'
import './ProductCategory.css'
import arrow from '../../assets/arrow.svg'


function ProductCategory() {
  return (
    <>
          <div className="product-container">
              <div className="product-catagory">
                  <div className="product-catagory-1">
                      <h2 className=''>Browse By Category</h2>
                      <div className="view-icon">
                          <p>View All</p>
                          <img className='arrow-img' src={arrow} alt="ads" />
                      </div>
                  </div>
              </div>
          </div>
          
              <div className="products">
                  <div className="box">
                    <svg className='mobile' stroke="currentColor" fill="#1c90ff" stroke-width="0" viewBox="0 0 24 24" height="50" width="50" xmlns="http://www.w3.org/2000/svg"><g id="Mobile_3"><g><path d="M16.73,2.065H7.27a2.386,2.386,0,0,0-2.24,2.5v14.87a2.386,2.386,0,0,0,2.24,2.5h9.46a2.386,2.386,0,0,0,2.24-2.5V4.565A2.386,2.386,0,0,0,16.73,2.065Zm1.24,17.37a1.391,1.391,0,0,1-1.24,1.5H7.27a1.391,1.391,0,0,1-1.24-1.5V4.565a1.391,1.391,0,0,1,1.24-1.5H8.8v.51a1,1,0,0,0,1,1h4.4a1,1,0,0,0,1-1v-.51h1.53a1.391,1.391,0,0,1,1.24,1.5Z"></path><path d="M10,18.934h4a.5.5,0,0,0,0-1H10a.5.5,0,0,0,0,1Z"></path></g></g></svg>
                    <h3>Mobiles</h3>
                  </div>
                  <div className="box">
                    <svg stroke="currentColor" fill="#1c90ff" stroke-width="0" viewBox="0 0 16 16" height="50" width="50" xmlns="http://www.w3.org/2000/svg"><path d="M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5z"></path><path d="M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H14v-.5a2.5 2.5 0 0 0-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3"></path></svg>
                    <h3>Smart Watchs</h3>
                  </div>
                  <div className="box">
                    <svg stroke="currentColor" fill="#1c90ff" stroke-width="0" viewBox="0 0 16 16" height="50" width="50" xmlns="http://www.w3.org/2000/svg"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"></path><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"></path></svg>
                    <h3>Cameras</h3>
                  </div>
                  <div className="box">
                    <svg stroke="currentColor" fill="#1c90ff" stroke-width="0" viewBox="0 0 24 24" height="50" width="50" xmlns="http://www.w3.org/2000/svg"><path d="M4 16H20V5H4V16ZM13 18V20H17V22H7V20H11V18H2.9918C2.44405 18 2 17.5511 2 16.9925V4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V16.9925C22 17.5489 21.5447 18 21.0082 18H13Z"></path></svg>
                    <h3>Computer</h3>
                  </div>
                  <div className="box">
                    <svg stroke="currentColor" fill="#1c90ff" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="50" width="50" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 9h-1v7h1c0.275 0 0.5-0.225 0.5-0.5v-6c0-0.275-0.225-0.5-0.5-0.5z"></path><path d="M11.5 9c-0.275 0-0.5 0.225-0.5 0.5v6c0 0.275 0.225 0.5 0.5 0.5h1v-7h-1z"></path><path d="M16 8c0-4.418-3.582-8-8-8s-8 3.582-8 8c0 0.96 0.169 1.88 0.479 2.732-0.304 0.519-0.479 1.123-0.479 1.768 0 1.763 1.304 3.222 3 3.464v-6.928c-0.499 0.071-0.963 0.248-1.371 0.506-0.084-0.417-0.129-0.849-0.129-1.292 0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5c0 0.442-0.044 0.874-0.128 1.292-0.408-0.259-0.873-0.435-1.372-0.507v6.929c1.696-0.243 3-1.701 3-3.464 0-0.645-0.175-1.249-0.479-1.768 0.31-0.853 0.479-1.773 0.479-2.732z"></path></svg>
                    <h3>Games</h3>
                  </div>
              </div>
          
    </>
  )
}

export default ProductCategory
