import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Navbox from "./component/Navbox";
import Home from "./component/Home";
import Digital from "./component/Digital";
import Courses from "./component/Courses";
import Webdev from "./component/Webdev";
import About from "./component/About";
import Notfound from "./component/Notfound";
import Footer from "./component/Footer";



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
