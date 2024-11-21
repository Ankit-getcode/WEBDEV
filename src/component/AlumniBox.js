import React from 'react';
import AlumniCard from './AlumniCard';
import './AlumniCard.css';
import Image from '../image/userid.png';


const AlumniBox = () => {
  const alumniCards = [
    {  name:"Alex Smith",title:"Graphic Designer",image:Image},
    {  name:"Alex Smith",title:"Graphic Designer",image:Image},
    {  name:"Alex Smith",title:"Graphic Designer",image:Image}
    
  ];

  return (
    <>
     <h3 className='pagetitle'>Alumni </h3>
    <div className="carousel">
      <div className="group">
        {alumniCards.map((card, index) => (
          <AlumniCard
            key={index}
            name={card.name}
            jobTitle={card.title}
            imgSrc={card.image}
           
          />
        ))}
      </div>
      {/* Duplicate group for smooth scrolling */}
      <div className="group" aria-hidden="true">
        {alumniCards.map((card, index) => (
          <AlumniCard
            key={`duplicate-${index}`}
            name={card.name}
            jobTitle={card.title}
            imgSrc={card.image}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default AlumniBox;
