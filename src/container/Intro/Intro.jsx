import React, { useRef, useState } from 'react'
import "./Intro.css"
import { meal } from "../../constants"
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs"

const Intro = () => {
  const vidRef = useRef();
  const [ playVideo, setPlayVideo ] = useState(false);

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
    <div className="app__video" onClick={handleVideo}>
      <video
      ref={vidRef}
      src={meal}
      type="video/mp4"
      loop
      controls={false}
      muted
      />
      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_circle flex__center">
          {playVideo
            ? <BsPauseFill color="#FFF" fontSize={30}/>
            : <BsFillPlayFill color="#FFF" fontSize={30} />
          }
        </div>
      </div>
    </div>
  )
}

export default Intro