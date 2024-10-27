import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Gallery from './Gallery';
import './Pract.css';
import Logo from '../image/weblogo.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Buttonitem from './Buttonitem';
import Buttonbox from './Buttonbox';
import Connectus from './Connectus';

import './Pop.css';

function Navbox() {
  const [showPopup, setShowPopup] = useState(false);
  const [showgallery, setShowgallery] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [expanded, setExpanded] = useState(false); // Add state to control navbar toggle

  const togglePopup = () => setShowPopup(!showPopup);
  const togglegallery = () => setShowgallery(!showgallery);

  // Use refs for the button and the content
  const buttonRef = useRef(null);
  const slidesRef = useRef(null);

  useEffect(() => {
    const imgbtn = buttonRef.current;
    const slides = slidesRef.current;

    // Define the event listener function
    const toggleFullscreen = () => {
      slides.style.height = isFullscreen ? '700px' : '1000px';
      setIsFullscreen(!isFullscreen);
    };

    if (imgbtn) imgbtn.addEventListener('click', toggleFullscreen);

    return () => {
      if (imgbtn) imgbtn.removeEventListener('click', toggleFullscreen);
    };
  }, [isFullscreen]);

  const closeNavbar = () => setExpanded(false); // Function to close navbar

  return (
    <Navbar expanded={expanded} expand="lg" className="navbar">
      <Container fluid>
        <div className="d-flex align-items-center justify-content-start">
          <Navbar.Brand className="d-flex align-items-center">
            <img className='logo' src={Logo} alt='logo' />
            <Link to="/" className='link ms-2' onClick={closeNavbar}>Web Ocean</Link>
          </Navbar.Brand>
        </div>

        <Navbar.Toggle 
          aria-controls="navbarScroll" 
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="" style={{ maxHeight: '200px' }}>
            <Nav.Link as={Link} to="/" className='link' onClick={closeNavbar}>Home</Nav.Link>
            <Nav.Link as={Link} to="/digital" className='link' onClick={closeNavbar}>Digital Marketing</Nav.Link>
            <Nav.Link as={Link} to="/webdev" className='link' onClick={closeNavbar}>Website Making</Nav.Link>
            <Nav.Link as={Link} to="/courses" className='link' onClick={closeNavbar}>Courses</Nav.Link>
            <Nav.Link as={Link} to="/about" className='link' onClick={closeNavbar}>About us</Nav.Link>
          </Nav>

          <div className='buttonbox'>
            <div className="Galleryapp">
              <button onClick={togglegallery} className="open-popup-btn">Gallery</button>
              {showgallery && <Gallery togglegallery={togglegallery} />}
            </div>
            <div className="App">
              <button onClick={togglePopup} className="open-popup-btn">Contact</button>
              {showPopup && <Connectus togglePopup={togglePopup}/>}
            </div>
          </div>
        </Navbar.Collapse>

        <div className="wave-container">
          <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" width="100%" height="100%" preserveAspectRatio="none">
            <path className="wave-path" fill="#0099ff" fillOpacity="1" d="M0,160L48,186.7C96,213,192,267,288,266.7C384,267,480,213,576,202.7C672,192,768,224,864,234.7C960,245,1056,235,1152,208C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
          </svg>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navbox;
