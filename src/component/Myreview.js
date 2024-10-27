import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Review.css';
const MyReview = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const reviews = [
    { id: 1, name: 'John Doe', review: 'This is an amazing service! Highly recommended.', rating: 5 },
    { id: 2, name: 'Jane Smith', review: 'I had a great experience, very professional.', rating: 4 },
    { id: 3, name: 'John Doe', review: 'This is an amazing service! Highly recommended.', rating: 5 },
    { id: 4, name: 'Jane Smith', review: 'I had a great experience, very professional.', rating: 4 },
    { id: 5, name: 'John Doe', review: 'This is an amazing service! Highly recommended.', rating: 5 },
    { id: 6, name: 'Jane Smith', review: 'I had a great experience, very professional.', rating: 4 },
    { id: 7, name: 'John Doe', review: 'This is an amazing service! Highly recommended.', rating: 5 },
    { id: 8, name: 'Jane Smith', review: 'I had a great experience, very professional.', rating: 4 },
    // ... other reviews
  ];

  return (
    <div className="customer-review-slider">
      <h2>Customer Reviews</h2>
      <Slider {...settings}  className="slider-with-gap">
        {reviews.map((review) => (
          <div className="item" key={review.id}>
            <div className="review">
              <h3>{review.name}</h3>
              <p>{review.review}</p>
              <p>Rating: {Array(review.rating).fill('⭐').join('')}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MyReview;
