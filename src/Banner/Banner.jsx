import React from "react";
import "./Banner.css";
import bannerImg from "../assets/banner2.jpg";
const Banner = () => {
  return (
    <div className="banner">
      <img
        src={bannerImg} 
        alt="Banner"
        className="banner-img"
      />
      {/* <div className="banner-content">
        <h1>Welcome to GadgetBay</h1>
        <p>Your one-stop shop for electronics</p>
        <button className="banner-btn">Shop Now</button>
      </div> */}
    </div>
  );
};

export default Banner;
