import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaPrint } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import './Footer.css'


function Footer() {
  return (
    <div>
     <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h4>GadgetBay</h4>
          <p>
            We are dedicated to providing the best gadgets and accessories to our customers.
            Your trusted source for quality and innovation.
          </p>
          <div className="footer-social">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Customer Query</a></li>
            <li><a href="#">Customer Service</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="footer-section">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Shipping Rates</a></li>
            <li><a href="#">Affiliate Program</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Address */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><FaHome /> Mumbai, India</p>
          <p><FaPhoneAlt /> +91-9172528369</p>
          <p><FaEnvelope /> gadgetbay.shop@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 GadgetBay. All Rights Reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer
