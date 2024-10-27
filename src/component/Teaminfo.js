import React from 'react'
import './Team.css';
import User from '../image/userid.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faLinkedin, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'; // Import the Facebook icon

const Teaminfo = () => {
  return (
    <>
       
  <section className="team_section layout_padding">
    <div className="container-fluid">
      <div className="heading_container heading_center">
        <h2 className="">
          Our <span> Team</span>
        </h2>
      </div>

      <div className="team_container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="box ">
              <div className="img-box">
                <img src={User} className="img1" alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  Name
                </h5>
                <p>
                  Web Head
                </p>
              </div>
              <div className="social_box">
                <a href="#">
                <FontAwesomeIcon icon={faFacebook} style={{color: "#f5f5f5",}} />
                  </a>
                <a href="#">
                   <FontAwesomeIcon icon={faTwitter} style={{color: "#f5f5f5",}} />
              
                </a>
                <a href="#">
                 <FontAwesomeIcon icon={faLinkedin} style={{color: "#f5f5f5",}} />
              
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} style={{color: "#f5f5f5",}} />
              
                </a>
                <a href="#">
                   <FontAwesomeIcon icon={faYoutube} style={{color: "#f5f5f5",}} />
              
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box ">
              <div className="img-box">
                <img src={User} className="img1" alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  Name
                </h5>
                <p>
                  Training Head
                </p>
              </div>
              <div className="social_box">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} style={{color: "#f5f5f5",}} />
              
                </a>
                <a href="#">
                   <FontAwesomeIcon icon={faTwitter} style={{color: "#f5f5f5",}} />
              
                </a>
                <a href="#">
                 <FontAwesomeIcon icon={faLinkedin} style={{color: "#f5f5f5",}} />
              
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} style={{color: "#f5f5f5",}} />
              
                </a>
                <a href="#">
                   <FontAwesomeIcon icon={faYoutube} style={{color: "#f5f5f5",}} />
              
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box ">
              <div className="img-box">
                <img src={User} className="img1" alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  Name
                </h5>
                <p>
                  Marketing Head
                </p>
              </div>
              <div className="social_box">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} style={{color: "#f5f5f5",}} />
              
                </a>
                <a href="#">
                   <FontAwesomeIcon icon={faTwitter} style={{color: "#f5f5f5",}} />
              
                </a>
                <a href="#">
                 <FontAwesomeIcon icon={faLinkedin} style={{color: "#f5f5f5",}} />
              
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} style={{color: "#f5f5f5",}} />
              
                </a>
                <a href="#">
                   <FontAwesomeIcon icon={faYoutube} style={{color: "#f5f5f5",}} />
              
                </a>
              </div >
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box ">
              <div className="img-box">
                <img src={User} className="img1" alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  Name
                </h5>
                <p>
                 Designing Head
                </p>
              </div>
              <div className="social_box">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} style={{color: "#f5f5f5",}} />
              
                </a>
                <a href="#">
                   <FontAwesomeIcon icon={faTwitter} style={{color: "#f5f5f5",}} />
              
                </a>
                <a href="#">
                 <FontAwesomeIcon icon={faLinkedin} style={{color: "#f5f5f5",}} />
              
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} style={{color: "#f5f5f5",}} />
              
                </a>
                <a href="#">
                   <FontAwesomeIcon icon={faYoutube} style={{color: "#f5f5f5",}} />
              
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
    </>
  )
}

export default Teaminfo
