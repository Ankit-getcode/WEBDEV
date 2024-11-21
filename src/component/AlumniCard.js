import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import './AlumniCard.css'; // Optional: Move CSS here for separation

const AlumniCard = ({ name, jobTitle, imgSrc }) => {
  return (
    <div className="alumni-card">
      <img src={imgSrc} alt={name} className="alumni-card-img" />
      <div className="alumni-card-details">
        <h3>{name}</h3>
        <p>{jobTitle}</p>
      </div>
      <div className="alumni-card-socials">
        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#"><FontAwesomeIcon icon={faPinterest} /></a>
      </div>
    </div>
  );
};

export default AlumniCard;
