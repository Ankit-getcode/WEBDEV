import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './MyCarousel.css'; // Custom styles for the carousel


import Swiperimgslide from './Swiperimgslide';
import slidedata from './Slidedata';

const Web = () => {
  // Use state to manage the slides
  const [slides, setSlides] = useState([]);

  // Effect to set the slides from imported data
  useEffect(() => {
    setSlides(slidedata); // Set slides from imported data
  }, []);


  return (
    <div className='slidebox'>
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      slidesPerGroup={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={false}  // Continuous loop mode
      
      speed={600} 
    >
      {/* Slide 1 */}
      {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Swiperimgslide
              slideKey={slide.id}
              heading={slide.heading}
              para={slide.para}
              btnvalue={slide.btnvalue}
              pic={slide.pic}
              imgmsg={slide.imgmsg}
            />
          </SwiperSlide>
        ))}
        
      
    </Swiper>
   
</div>
  );
};

export default Web;
