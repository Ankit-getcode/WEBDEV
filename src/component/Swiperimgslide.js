import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Buttonitem from './Buttonitem'
const Swiperimgslide = (props) => {
   
   
  return (

    <>
        <SwiperSlide>
        <div className="slide-content">
          <div className="text-content">
            <h1>{props.heading}</h1>
            <p>
             {props.para}
            </p>
            
            <Buttonitem name={props.btnvalue}/>
          </div>
          <img className="imgitem" src={props.pic} alt={props.imgmsg} />
        </div>
       
      </SwiperSlide>
    </>
  )
}

export default Swiperimgslide
