import React, { useState } from 'react';
import './Pop.css'; // Add some basic styling if needed

function PopupExample() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="App">
      <button onClick={togglePopup} className="open-popup-btn">
        Show Popup
      </button>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Popup Content</h2>
            <p>This is a simple popup.</p>
            <button onClick={togglePopup} className="close-popup-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupExample;
