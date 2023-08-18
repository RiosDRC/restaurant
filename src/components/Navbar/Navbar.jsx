import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineRestaurantMenu } from "react-icons/md"
import { Context } from '../../context/Context'
import images from "../../constants/images"

const Links = () => (
  <>  
    <li className="p__opensans"><a href='#Home'>Home</a></li>
    <li className="p__opensans"><a href='#About'>About</a></li>
    <li className="p__opensans"><a href='#Menu'>Menu</a></li>
    <li className="p__opensans"><a href='#Awards'>Awards</a></li>
    <li className="p__opensans"><a href='#Contact'>Contact</a></li>
  </>
)

const Navbar = () => {
  const [ toggleMenu, setToggleMenu ] = useState(false);
  const { setIsLoginVisible, setIsBookingVisible } = useContext(Context)

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/"><img src={images.gericht} alt="" /></a>
      </div>
      <ul className="app__navbar-links">
        <Links />
      </ul>
      <div className="app__navbar-login">
        <button className='p__opensans' onClick={() => setIsLoginVisible(prev => !prev)}>Log In / Register</button>
        <div />
        <button className="p__opensans"  onClick={() => setIsBookingVisible(prev => !prev)}>Book</button>
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