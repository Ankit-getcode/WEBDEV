// TeamMember.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Team.css';

const TeamMembers = ({ name, role, image }) => {
  return (
    
    <div className="col-lg-5 col-sm-6">
    <div className="box">
      <div className="img-box">
        <img src={image} className="img1" alt={`${name}'s profile`} />
      </div>
      <div className="detail-box">
        <h5>{name}</h5>
        <p>{role}</p>
      </div>
      <div className="social_box">
        <a href="#"><FontAwesomeIcon icon={faFacebook} style={{ color: "#f5f5f5" }} /></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} style={{ color: "#f5f5f5" }} /></a>
        <a href="#"><FontAwesomeIcon icon={faLinkedin} style={{ color: "#f5f5f5" }} /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} style={{ color: "#f5f5f5" }} /></a>
        <a href="#"><FontAwesomeIcon icon={faYoutube} style={{ color: "#f5f5f5" }} /></a>
      </div>
    </div>
    </div>
  );
};

export default TeamMembers;
