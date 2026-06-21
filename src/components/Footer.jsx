import "./Footer.css";
import { useNavigate } from "react-router-dom";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaArrowRight
} from "react-icons/fa";

function Footer() {
  const navigate = useNavigate();
  return (
    <>
      {/* Top CTA */}
      <div className="footer-top">

        <img
          src="/men.png"
          alt="men"
          className="men-img"
        />

        <div className="footer-content">

          <h1>
            <span className="black-text">Ready to Build</span>
            <br />
            <span className="white-text">Loyalty That Lasts?</span>
          </h1>

          <p>
            Let's create a reward program your customers will love.
          </p>

          <div className="footer-buttons">

         <button
            className="demo-btn"
            onClick={() => navigate("/demoform")}
          >
              Book a Demo
        </button>

       <a
         href="tel:+918825751903"
         className="sales-btn"
       >
          Talk to Sales
        </a>

</div>
        </div>

        <img
          src="/women.png"
          alt="women"
          className="women-img"
        />

      </div>

      {/* Footer Bottom */}
      <div className="footer">

        <div className="footer-grid">

          <div className="footer-column">
              <img
            src="/logo.png"
            alt="logo"
            className="footer-logo"
          />


            <p>
              AI-powered loyalty &
              engagement platform for
              modern businesses.
            </p>

            <div className="social-icons">
              <FaLinkedin />
              <FaInstagram />
              <FaFacebook />
              <FaYoutube />
            </div>
          </div>

          <div className="footer-column">
            <h3>Solutions</h3>

            <a href="/">Loyalty Programs</a>
            <a href="/">Rewards Management</a>
            <a href="/">OmnichannelEngagement</a>
            <a href="/">Analytics & Insights</a>
          </div>

          <div className="footer-column">
            <h3>Industries</h3>

            <a href="/">Paint & Coating</a>
            <a href="/">FMCG</a>
            <a href="/">Fuel & Oil</a>
            <a href="/">Telecom</a>
            <a href="/">View All Industries</a>
          </div>

          <div className="footer-column">
            <h3>Platform</h3>

            <a href="/">Features</a>
            <a href="/">Clients</a>
            <a href="/">Integrations</a>
            <a href="/">Pricing</a>
          </div>

          <div className="footer-column">
            <h3>Resources</h3>

            <a href="/">Blogs</a>
            <a href="/">Case Studies</a>
            <a href="/">Events & Expo</a>
            <a href="/">FAQs</a>
          </div>

          <div className="footer-column">
            <h3>Company</h3>

            <a href="/">About Us</a>
            <a href="/">Careers</a>
            <a href="/">Partners</a>
            <a href="/">Contact Us</a>
          </div>

        </div>
        <hr />


<div className="subscribe-section">


  <div className="newsletter-title">
    <h3>
      Stay Updated
    </h3>
  </div>



  <div className="subscribe-box">

    <input
      type="email"
      placeholder="Enter your email"
    />


    <button>
      <FaArrowRight />
    </button>


  </div>



</div>




<div className="footer-bottom">


  <p>
    © 2025 Bling Rewards. All rights reserved.
  </p>



  <div className="footer-links">

    <a href="/">
      Privacy Policy
    </a>


    <span>
      |
    </span>


    <a href="/">
      Terms & Conditions
    </a>


  </div>


</div>
      </div>
    </>
  );
}

export default Footer;