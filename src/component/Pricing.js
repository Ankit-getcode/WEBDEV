import React ,{useState,useEffect}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'; // Import the check icon


import './Pricing.css';
import './Pract.css';







const Pricing = (props) => {

      const[lists,setList]=useState(props.plan);

      useEffect(() => {
        
        setList(props.plan); // Set slides from imported data
       
      }, [props.plan]);
  return (
    <div className="pricing-container">
      {lists.map((plan, index) => (
        <div className="pricing-card" key={index}>
          <h3>{plan.title}</h3>
          <p className="old-price">{plan.oldPrice}</p>
          <p className="new-price">{plan.newPrice}</p>
          <p>{plan.description}</p>
          <ul>
            {plan.features.map((feature, i) => (
              <li key={i}>  <FontAwesomeIcon icon={faCheck}  style={{color: "#2797ec",}} />&nbsp;{feature}</li>
            ))}
          </ul>
         
        

       
     
        </div>
      ))}
    </div>
  );
};

export default Pricing;
