import React, { useState } from "react";
import './Pract.css';
import './Connect.css';

const Connectus = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  

  const [result, setResult] =useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
      // Simple client-side validation
      if (!formData.name || !formData.phone || !formData.email || !formData.requirement) {
        setFormStatus("Please fill in all required fields.");
        return;
      }
    setResult("Sending....");
   
    const formDatainfo = new FormData(event.target);

    formDatainfo.append("access_key", "fb84ae10-2523-4a2e-b19d-91283fc69e0e");
    formDatainfo.append("subject", "New Consultation Request");
    formDatainfo.append("from_name", formData.name);
   
    try{
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDatainfo
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      setFormData({ name: "", phone: "", email: "", requirement: "" }); // Clear inputs
    } else {
      console.error("Submission Error:", data);
      setResult(data.message);
    }
  } catch (error) {
    console.error("Fetch error:", error);
    setResult("Failed to submit form. Please try again.");
  }
  };

  return (
    <div className="form-container">
      <h2>Consult with Our Expert</h2>
      <p>A leading name when it comes to web development. Web Ocean delivers the most appropriate website that suits your business needs.</p>
      <form onSubmit={onSubmit}>
      <input type="hidden" name="access_key" value="fb84ae10-2523-4a2e-b19d-91283fc69e0e"/>
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Mobile Number *"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="requirement"
          placeholder="Describe your requirement in brief"
          value={formData.requirement}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Book A Free Consultation</button>
         {/* Result message display */}
    {result && <p className="form-result-message">{result}</p>}  {/* Conditionally display based on result */}

      </form>
      {formStatus && <p>{formStatus}</p>}
      <button onClick={props.togglePopup} className="close-popup-btn">
        Close
      </button>
      <span className="helpus">Call us at :- <span className="numberhelp">7759810531/32</span></span>
      <div className="wave-container">
        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          <path
            className="wave-path"
            fill="#0099ff"
            fillOpacity="1"
            d="M0,160L48,186.7C96,213,192,267,288,266.7C384,267,480,213,576,202.7C672,192,768,224,864,234.7C960,245,1056,235,1152,208C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Connectus;
