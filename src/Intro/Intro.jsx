import React from 'react'
import hero from '../assets/hero.png'
import "./Intro.css"
function Intro() {
  return (
    <div>
          <div class="hero-container">
              <img src={hero} class="hero-image" alt="" />
              <h1 class="hero-title">Experience technology like never before.</h1>
              <p class="hero-text">check out our wide range of electronics, test them, and find your ideal match</p>
          </div>

    </div>
  )
}

export default Intro
