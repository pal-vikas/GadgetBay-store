import React from 'react'
import '../Header/Header.css'
import { FaSearch } from 'react-icons/fa';
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import {Routes, Route} from "react-router-dom"

function Header() {
  return (
    <>
      <header className='header'>
        <h2 className='companyName'><a className='logoLink' href="">GadgetBay</a></h2>
        <div className="searchContainer">
          <div className="searchInputContainer">
            <FaSearch className='searchIcon' />
            <input type="text" placeholder='Search' className='search-input' />
          </div>
        </div>
        <div className="nav-icon">
          <FaRegHeart className='heart-icon' />
          <IoCartOutline className='cart-icon' />
          <FaRegUser className='user-icon' />
        </div>
        <GiHamburgerMenu className='hanmburgerMenu' />

        <SignedOut>
        <SignInButton />
      </SignedOut>
      
      <SignedIn>
        <UserButton  />
      </SignedIn>
        
      </header>
    </>
  )
}

export default Header
