import React, { useRef } from 'react'
import "./Gallery.css"
import { images } from "../../constants"
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"
import { Subheading } from '../../components'

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
  const scrollRef = useRef()

  const scroll = (direction) =>{
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 330;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <Subheading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button className="custom__button">View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index)=>(
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery" />
              <BsInstagram className='gallery__image-icon' />
            </div>
          ))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=>{scroll("left")}}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={()=>{scroll("right")}}/>
        </div>
      </div>
    </div>
  )
}

export default Gallery