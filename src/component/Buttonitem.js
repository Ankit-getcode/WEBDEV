import React from 'react'
import { Link } from 'react-router-dom';
import './Pract.css';
import Logo from '../image/weblogo.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Buttonitem = (props) => {
  return (
    <>
     <Button variant="outline-light" className="wave-button">
  {props.name}
  <div className="wave-container1">
    <svg
      className="wave1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
    >
      <path
        className="wave-path1"
        fill="#0099ff"
        fillOpacity="1"
        d="M0,160L48,186.7C96,213,192,267,288,266.7C384,267,480,213,576,202.7C672,192,768,224,864,234.7C960,245,1056,235,1152,208C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </div>
</Button>
    </>
      
    
  )
}

export default Buttonitem
