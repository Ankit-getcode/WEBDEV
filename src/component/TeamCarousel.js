// TeamCarousel.js
import React from 'react';
import Slider from 'react-slick';
import TeamMembers from './TeamMembers';
import './Team.css'; // Additional CSS if needed

const TeamCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear',               // Animation easing (e.g., 'ease', 'linear', etc.)
    fade: true,  
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1, // Show 3 members per slide
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Sample data for team members
  const teamInfo = [
    { name: 'Alice', role: 'Marketing Head', image: '/path/to/image1.jpg' },
    { name: 'Bob', role: 'Product Manager', image: '/path/to/image2.jpg' },
    { name: 'Carol', role: 'UI/UX Designer', image: '/path/to/image3.jpg' },
    { name: 'Dave', role: 'Backend Engineer', image: '/path/to/image4.jpg' },
  ];

  return (
    <section className="team_section layout_padding">
    <div className="container-fluid">
      <div className="heading_container heading_center">
        <h2 className="">
          Our <span> Team</span>
        </h2>
      </div>
    <div className="team_container">
        <div className="row">
    
        <Slider {...settings}>
          {teamInfo.map((member, index) => (
            <TeamMembers key={index} {...member} />
          ))}
        </Slider>
      </div>
    </div>
    </div>
    </section>
  );
};

export default TeamCarousel;
