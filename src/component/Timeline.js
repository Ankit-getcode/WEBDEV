import React, { useState, useEffect } from 'react';
import './Timeline.css'; // Your timeline CSS file

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "Discovery", description: "Sit down with you and fully understand your requirements and objectives." },
    { title: "Research & Planning", description: "Conduct the necessary research and develop a strategy for your project." },
    { title: "Wireframes & Mockups", description: "Prepare the layout for the website (wireframes) followed by a complete mockup." },
    { title: "Copy & Graphics", description: "Create wireframes, or the website's layout, followed by a mockup." },
  ];

  const handleScroll = () => {
    const stepsElements = document.querySelectorAll('.timeline-step');
    const viewportMiddle = window.innerHeight / 2;

    stepsElements.forEach((stepElement, index) => {
      const rect = stepElement.getBoundingClientRect();
      const stepMiddle = rect.top + (rect.height / 2);

      if (stepMiddle < viewportMiddle) {
        setActiveStep(index); // Set active step when middle of step is in the middle of viewport
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="timeline" className={`timeline ${activeStep === steps.length - 1 ? 'active' : ''}`}>
      <h2>Our Process</h2>
      {steps.map((step, index) => (
        <div key={index} className={`timeline-step ${index <= activeStep ? 'active' : ''}`}>
          <div className="circle">{index + 1}</div>
          <div className="content">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
