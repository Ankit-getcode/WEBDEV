import React from 'react'
import {
    Link
    
  } from "react-router-dom";
  
const Servicebox = (props) => {
    console.clear();
    console.log(props.serviceimg, props.serviceheading)
  return (
    <>
      
      <div class="col-md-4 ">
            <div class="box ">
              <div class="img-box">
                <img src={props.serviceimg} alt={props.Simgmsg}/>
              </div>
              <div class="detail-box">
                <h5>
                  {props.serviceheading}
                </h5>
                <p>
                 {props.servicepara}
                </p>
                <Link to={props.servlink}>
                  {props.servlinkname}
                </Link>
              </div>
            </div>
          </div>
    </>
  )
}

export default Servicebox
