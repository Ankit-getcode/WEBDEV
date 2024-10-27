// src/components/ClientCard.js
import React from "react";

const ClientCard = ({ image, name, info, description }) => {
  return (
    <div className="item">
      <div className="box">
        <div className="img-box">
          <img src={image} alt={name} className="box-img" />
        </div>
        <div className="detail-box">
          <div className="client_id">
            <div className="client_info">
              <h6>{name}</h6>
              <p>{info}</p>
            </div>
            <i className="fa fa-quote-left" aria-hidden="true"></i>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
