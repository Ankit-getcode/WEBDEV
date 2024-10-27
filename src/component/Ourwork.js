import React from 'react';
import Slider from 'react-slick';
import './Review.css';
import Image from '../image/web2.png';
import Image2 from '../image/web3.png';
import Image3 from '../image/web4.png';

// Sample data for reviews
const works = [
  { id: 1, image: Image, name: 'John Doe', review: 'This is an amazing service! Highly recommended.', rating: 5 },
  { id: 2, image: Image2, name: 'Jane Smith', review: 'I had a great experience, very professional.', rating: 4 },
  { id: 3, image: Image3, name: 'Alice Johnson', review: 'Good value for money, will come back again!', rating: 5 },
  { id: 4, image: Image, name: 'Bob Brown', review: 'Not satisfied with the service, could be better.', rating: 3 },
  { id: 5, image: Image2, name: 'Charlie Black', review: 'Fantastic experience! I will definitely recommend this.', rating: 5 },
  { id: 6, image: Image3, name: 'John Doe', review: 'This is an amazing service! Highly recommended.', rating: 5 },
  { id: 7, image: Image, name: 'Jane Smith', review: 'I had a great experience, very professional.', rating: 4 },
  { id: 8, image: Image2, name: 'Alice Johnson', review: 'Good value for money, will come back again!', rating: 5 },
  { id: 9, image: Image3, name: 'Bob Brown', review: 'Not satisfied with the service, could be better.', rating: 3 },
  { id: 10, image: Image, name: 'Charlie Black', review: 'Fantastic experience! I will definitely recommend this.', rating: 5 }
];

const OurWork = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="customer-review-slider">
      <h2>Our Works</h2>
      <Slider {...settings} className="slider-with-gap">
        {works.map((work) => (
          <div className="testimonial" key={work.id}>
            <span className="open quote">“</span>
            <div className="image">
              <div className="clip"></div>
              <img src={work.image} alt="work" />
            </div>
            <p>{work.review}</p>
            <div className="source">		
              <span>{work.name}</span>
            </div>
            <span className="close quote">”</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurWork;
