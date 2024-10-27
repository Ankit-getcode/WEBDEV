import React from 'react';
import { Link } from 'react-router-dom';
import './Pract.css';


const Buttonbox = (props) => {
  return (
    <button className="box-button" onClick={props.handleCall}>
    <span className="boxbutton-text">{props.name}</span>
  </button>
  );
};

export default Buttonbox;
