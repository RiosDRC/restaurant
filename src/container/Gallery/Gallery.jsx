import React, { useEffect, useRef, useState } from 'react'
import "./Gallery.css"
import { images } from "../../constants"
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"
import { Subheading } from '../../components'

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
  const scrollRef = useRef()
  const  [arrow, setArrow ] = useState('left')

  const scroll = (direction) =>{
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 330;
    } else {
      current.scrollLeft += 300;
    }
  }

  useEffect(() => {
    const { current } = scrollRef;
    const handleScroll = () => {
      if (current) {
        if (current.scrollLeft < 100) {
          setArrow('left');
        } else if (
          current.scrollLeft >= current.scrollWidth - current.clientWidth - 150
        ) {
          setArrow('right')
        } else {
          setArrow('center')
        }
      }
    };

    if (current) {
      current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (current) {
        current.removeEventListener('scroll', handleScroll);
      }
    }
  },[])

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
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=>{scroll("left")}} style={arrow === 'left' ? {opacity: 0.2, PointerEvent: 'none', cursor: 'default'} : null}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={()=>{scroll("right")}} style={arrow === 'right' ? {opacity: 0.2, PointerEvent: 'none', cursor: 'default'} : null}/>
        </div>
      </div>
    </div>
  )
}

export default Gallery