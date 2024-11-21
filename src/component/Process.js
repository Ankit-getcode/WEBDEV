import React from 'react';
import './Process.css'; // Include your CSS file here

const Processdata = [
    {
      year: "Step 1: Research",
      description: "Analyzing the target audience, competitors, and market trends to set a strong foundation.",
      pointClass: "point1",
      lineClass: "ligne1",
      dateClass: "date2"
    },
    {
      year: "Step 2: Strategy Development",
      description: "Crafting a custom marketing plan with clear objectives and channels.",
      pointClass: "point2",
      lineClass: "ligne2",
      dateClass: "date4"
    },
    {
      year: "Step 3: Campaign Execution",
      description: "Implementing strategies across chosen platforms to engage and convert.",
      pointClass: "point3",
      lineClass: "ligne3",
      dateClass: "date1"
    },
    {
      year: "Step 4: Monitoring & Optimization",
      description: "Tracking performance and optimizing campaigns to maximize ROI.",
      pointClass: "point4",
      lineClass: "ligne4",
      dateClass: "date3"
    },
    {
      year: "Step 5: Reporting & Analysis",
      description: "Delivering insightful reports with actionable recommendations for future growth.",
      pointClass: "point5",
      lineClass: "ligne5",
      dateClass: "date5"
    }
  ];
  

const Process = () => {
  return (
    <div id="conteneur">
     
      <div id="bouton">
        <span className="text_hover">Hover me</span>
        <div className="frise_barre">
          { Processdata.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className={`point_general ${item.pointClass}`}></div>
              <div className={`ligne_general ${item.lineClass}`}></div>
              <div className={`date_general ${item.dateClass}`}>
               <p>{item.year} - {item.description}</p> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
