// src/components/ClientSection.js
import React from "react";
import ClientCarousel from "./ClientCarousel";

const clientsData = [
  {
    image: "../images/client1.jpg",
    name: "LusDen",
    info: "magna aliqua. Ut",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
  },
  {
    image: "../images/client2.jpg",
    name: "Zen Court",
    info: "magna aliqua. Ut",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
  },
  // Add more clients here
];

const ClientSection = () => {
  return (
    <section className="client_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center psudo_white_primary mb_45">
          <h2>
            What says our <span>Customers</span>
          </h2>
        </div>
        <ClientCarousel clients={clientsData} />
      </div>
    </section>
  );
};

export default ClientSection;
