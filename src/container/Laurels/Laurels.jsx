import React from 'react'
import "./Laurels.css"
import { images, data } from "../../constants"
import { Subheading } from '../../components'

const AwardCard = ({award}) => (
  <div className="app__laurels_awards-card">
    <img src={award.imgUrl} alt="award" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{color: "#DCCE87"}}>
        {award.title}
      </p>
      <p className="p__cormorant">{award.subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="Awards">
      <div className="app__wrapper_info">
        <Subheading title="Awards & recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>

        <div className="app__laurels_awards">
          {data.awards.map((award, index)=>(
            <AwardCard award={award} key={index} />
          ))}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels" />
      </div>
    </div>
  )
}

export default Laurels