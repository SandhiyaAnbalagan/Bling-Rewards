import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import DemoForm from "./DemoForm";

function Navbar() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">
          <img src="/logo.png" alt="Logo" />
        </div>

        <div className="nav-links">
          <Link to="/">About</Link>
          <Link to="/features">Features</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/service">Service</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/casestudy">Case Study</Link>
        </div>

        <button
          className="demo-btn"
          onClick={() => setShowForm(true)}
        >
          Book Demo
        </button>
      </nav>

      {showForm && (
        <DemoForm closeForm={() => setShowForm(false)} />
      )}
    </div>
  );
}

export default Navbar;