import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './component/Header';
import Web from './component/Web';
import Home from "./component/Home";
import Notfound from "./component/Notfound";
import Footer from "./component/Footer";
import Service from "./component/Service";
import Navbox from "./component/Navbox";
import Whytochoose from "./component/Whytochoose";
import Teaminfo from "./component/Teaminfo";
import Webdev from "./component/Webdev";
import Timeline from "./component/Timeline";
import Contact from "./component/Contact";
import Courses from "./component/Courses";
import Digital from "./component/Digital";
import About from "./component/About";
function App() {
  return (
   
    <Router>
      
        <Navbox />
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/digital" element={<Digital/>}/>
            <Route path="/courses" element={<Courses />} />
            <Route path="/webdev" element={<Webdev />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Notfound />} />  {/* Catch all unmatched routes */}
             
          </Routes>
        </main>
      
       
       
      
        

        <Footer />

      
    </Router>
 
   
  );
}

export default App;
