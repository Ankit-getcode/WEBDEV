import React,{useState,useEffect} from 'react'
import {
    Link
    
  } from "react-router-dom";

import './Service.css';
import Image1 from '../image/batata.jpg';
import Image2 from '../image/swarn.jpeg';
import Image3 from '../image/swarn1.jpg';
import Servicebox from './Servicebox';
import Servicedata from './Servicedata';
import Buttonlink from './Buttonlink';

const Service = () => {
    const[servitem,setservitem]=useState([]);
console.log(Servicedata);
    useEffect(() => {
        setservitem(Servicedata); // Set slides from imported data
      }, []);

      console.log(servitem)
  return (
    


  <section class="service_section layout_padding">
    <div class="service_container">
      <div class="container ">
        <div class="heading_container heading_center">
          <h2>
            Our <span>Services</span>
          </h2>
          <p>
            
At our business, we specialize in providing top-notch digital marketing solutions, expert web development services, and comprehensive teaching & training programs for aspiring web developers.
              </p>
        </div>
        <div class="row">
        {servitem.map((service) => (
        <Servicebox
          key={service.id}
          serviceimg={service.serviceimg}
          serviceheading={service.serviceheading}
          servicepara={service.servicepara}
          servlink={service.servlink}
          servlinkname={service.servlinkname}
        />
          
        ))}
         
        </div>
        <div class="btn-box">
        <Buttonlink link="/" name="Read More" />

       
        </div>
      </div>
    </div>
  </section>

 
  )
}

export default Service
