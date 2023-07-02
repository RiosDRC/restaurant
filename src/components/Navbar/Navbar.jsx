import React, { useState } from 'react'
import "./Navbar.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineRestaurantMenu } from "react-icons/md"

import images from "../../constants/images"

const Links = () => (
  <>  
    <li className="p__opensans"><a href='#Home'>Home</a></li>
    <li className="p__opensans"><a href='#About'>About</a></li>
    <li className="p__opensans"><a href='#Menu'>Menu</a></li>
    <li className="p__opensans"><a href='#Rewards'>Rewards</a></li>
    <li className="p__opensans"><a href='#Contact'>Contact</a></li>
  </>
)

const Navbar = () => {
  const [ toggleMenu, setToggleMenu ] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="" />
      </div>
      <ul className="app__navbar-links">
        <Links />
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className='p__opensans'>Log In / Register</a>
        <div />
        <a href="/" className="p__opensans">Book</a>
      </div>
      <div className="app__navbar-smallscreen">
        {toggleMenu ?
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu className='overlay__close' color="#FFF" fontSize={27} onClick={()=>{setToggleMenu((false))}} />         
          <ul className="app__navbar-smallscreen_links">
            <Links />
          </ul>
        </div>
        :
        <GiHamburgerMenu color="#FFF" fontSize={27} onClick={()=>{setToggleMenu(true)}} />         
        }
      </div>
    </nav>
  )
}

export default Navbar