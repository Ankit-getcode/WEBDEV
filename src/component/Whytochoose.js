import React from 'react'
import './Why.css';
import Icon from '../image/w1.png';
import Icon2 from '../image/w2.png';
import Icon3 from '../image/w4.png';
import Icon4 from '../image/s3.png';
import Buttonlink from './Buttonlink';
const Whytochoose = () => {
  return (
    <>
      

<section class="why_section layout_padding">
  <div class="container">
    <div class="heading_container heading_center">
      <h2>
        Why Choose <span>Us</span>
      </h2>
    </div>
    <div class="why_container">
      <div class="box">
        <div class="img-box">
          <img src={Icon} alt=""/>
        </div>
        <div class="detail-box">
          <h5>
          Tailored Solutions
          </h5>
          <p>
          
Every project is customized to meet your unique business goals, whether it's a marketing strategy or a web development project, ensuring the best results for you.
          </p>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src={Icon2} alt=""/>
        </div>
        <div class="detail-box">
          <h5>
          Cost-Effective Solutions
          </h5>
          <p>
         
          We offer competitive pricing with no compromise on quality, ensuring you get the best value for your investment, whether it's for marketing, web development, or training services.
         </p>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src={Icon3} alt=""/>
        </div>
        <div class="detail-box">
          <h5>
          Ongoing Support
          </h5>
          <p>
          
          We don’t just deliver projects and leave — we provide ongoing support and guidance to ensure your success long after the project is complete.
             </p>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img src={Icon4} alt=""/>
        </div>
        <div class="detail-box">
          <h5>
          Personalized Training Programs
          </h5>
          <p>
          
Our web development training is designed to cater to all skill levels, offering hands-on learning with personalized guidance to help you achieve your career goals.
          </p>
        </div>
      </div>
    </div>
    <div class="btn-box">
    <Buttonlink link="/" name="Read More" />
    </div>
  </div>
</section>


    </>
  )
}

export default Whytochoose
