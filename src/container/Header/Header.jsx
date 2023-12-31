import React from 'react'
import "./Header.css"

import { images } from "../../constants/"
import { Subheading } from '../../components'

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id='Home'>
      <div className="app__wrapper_info">
        <Subheading title="Chase the New Flavor"/>
        <h1 className="app__header-h1">The Key to Find dinning</h1>
        <p className="p__opensans" style={{ margin: "2rem 0"}}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus 
        </p>
        <a href='#Menu' className='custom__button' type='button'>Explore Menu</a>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="welcome" />
      </div>
    </div>
  )
}

export default Header