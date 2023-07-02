import React from 'react'
import { images } from "../../constants/"

const Subheading = ({title}) => {
  const pStyle = {
    fontSize: "23px",
    color: "#FFF",
    fontWeight: "700",
    lineHeight: "130%",
    letterSpacing: "0.92px"
  }
  return (
    <div style={{ marginBotton: "1rem"}}>
      <p className="p__cormorant" style={pStyle}>{title}</p>
      <img src={images.spoon} alt="spoon" className='spoon__img'/>
    </div>
  )
}

export default Subheading