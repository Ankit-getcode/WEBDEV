import React, { useEffect } from "react";
import $ from "jquery";
import ClientCard from "./ClientCard";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import './Client.css'

const ClientCarousel = ({ clients }) => {
    useEffect(() => {
        if ($) {
          console.log('jQuery is working!');
        }
      }, []);
      

  return (
    <div className="carousel-wrap">
      <div className="owl-carousel client_owl-carousel">
        {clients.map((client, index) => (
          <ClientCard
            key={index}
            image={client.image}
            name={client.name}
            info={client.info}
            description={client.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientCarousel;
