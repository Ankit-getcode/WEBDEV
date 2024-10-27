const express = require("express");
const cors = require("cors"); // Import cors
const nodemailer = require("nodemailer");

const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

app.post("/submit-form", (req, res) => {
  const { name, phone, email, requirement } = req.body;

  // Email configuration (using nodemailer)
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "ankit2server@gmail.com",
      pass: "server8757",
    },
  });

  const mailOptions = {
    from: "ankit2server@gmail.com",
    to: "mauryan79@gmail.com",
    subject: "New Consultation Request",
    text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nRequirement: ${requirement}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: "Failed to send email." });
    }
    res.status(200).json({ message: "Form submitted successfully!" });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
