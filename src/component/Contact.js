// Contact.js
import React, { useState } from 'react';
import Connectus from './Connectus';


const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="contact-container">
      <button onClick={togglePopup} className="open-popup-btn">
        Contact
      </button>
      {showPopup && <Connectus togglePopup={togglePopup} />}
    </div>
  );
};

export default Contact;
