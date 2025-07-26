import React, { useEffect } from 'react'
import '../Header/Header.css'
import { FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineSmartphone } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import {Routes, Route, Link} from "react-router-dom"

function Header() {
  return (
    <>
      <header className='header'>
        <h2 className='companyName'><Link className='logoLink' to="/">GadgetBay</Link></h2>
        <div className="searchContainer">
          <div className="searchInputContainer">
            <FaSearch className='searchIcon' />
            <input type="text" placeholder='Search' className='search-input' />
          </div>
        </div>
        <div className="nav-icon">
        <Link to="/smartphone"><MdOutlineSmartphone /></Link>
        <Link to="/laptop"><FaLaptopCode /></Link>
        <Link to="/computer"><FaComputer /></Link>
        </div>
        <GiHamburgerMenu className='hanmburgerMenu' />

        <SignedOut>
         <SignInButton />
        </SignedOut>
      
       <SignedIn>
         <UserButton />
       </SignedIn>
        
      </header>
    </>
  )
}

export default Header
