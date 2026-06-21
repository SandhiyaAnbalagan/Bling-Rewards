import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles.css";
import DemoForm from "./DemoForm";
import { Link } from "react-router-dom";
function Navbar() {
  const [showForm, setShowForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">
          <img src="/logo.png" alt="Logo" />
          </div>
      <div
  className="menu-icon"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <FaTimes /> : <FaBars />}
</div>
     <div className={`nav-links ${menuOpen ? "active" : ""}`}>
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