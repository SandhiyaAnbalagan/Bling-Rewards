import React from "react";
import "./DemoForm.css";

function DemoForm({ closeForm }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Demo Booked Successfully 🚀");
    closeForm();
  };

  return (
    <div className="overlay">
      <div className="form-box">
        <span className="close-btn" onClick={closeForm}>✖</span>

        <h2>Book a Demo</h2>
        <p>We’ll reach out shortly</p>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Company Name" />
          <input type="tel" placeholder="Phone Number" required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default DemoForm;