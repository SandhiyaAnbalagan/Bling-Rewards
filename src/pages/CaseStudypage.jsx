import React, { useRef } from "react";
import "./CaseStudypage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const CaseStudypage = () => {
    const featuredRef = useRef(null);

  const scrollToFeatured = () => {
    featuredRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <>
      <Navbar />

      <div className="case-study-page">

        {/* HERO */}

        <section className="cs-hero">
          <div className="cs-left">
            <span className="tag">CASE STUDIES</span>

            <h1>
              Success Stories That <span>Drive Growth</span>
            </h1>

            <p>
              Discover how brands leverage Bling Reward’s loyalty,
              rewards and AI-powered engagement platform to increase
              retention, engagement and business growth.
            </p>

            <div className="hero-buttons">
              <button onClick={scrollToFeatured}>
  Explore Case Studies
</button>
        
            </div>
          </div>

          <div className="cs-right">
            <div className="stats-card">
              <h3>1400+</h3>
              <p>Reviews Generated</p>
            </div>

            <div className="stats-card">
              <h3>3X</h3>
              <p>Engagement Growth</p>
            </div>

            <div className="stats-card">
              <h3>78%</h3>
              <p>Customer Satisfaction</p>
            </div>
          </div>
        </section>

        {/* FEATURED CASE STUDIES */}

        <section
  className="featured-section"
  ref={featuredRef}
>
          <h2>
  Featured <span>Case Studies</span>
</h2>

          <div className="featured-grid">

            <div className="featured-card">
              <div className="featured-image malar-image">
  <img src="/malarrice.png" alt="Malar Rice" />
</div>

              <h3>Malar Rice</h3>
              <p>
                Transforming Customer Loyalty & Sales with Smart Coupons
                and AI Engagement.
              </p>

              <div className="mini-stats">
                <span>1400+ Reviews</span>
                <span>3X Engagement</span>
                <span>78% Satisfaction</span>
              </div>
            </div>

            <div className="featured-card arcot-image">
           <div className="case-image">
               <img src="/arcotmanimark.png" alt="Arcot Manimark"/>
              </div>
              <h3>Arcot Manimark</h3>
              <p>
                Driving Dealer Motivation & Growth with Incentive Programs.
              </p>

              <div className="mini-stats">
                <span>Higher Engagement</span>
                <span>More Orders</span>
                <span>Referral Growth</span>
              </div>
            </div>

            <div className="featured-card">
                    <div className="case-image vsn-image">
  <img
    src="/vsnbrand.png" alt="VSN Brand"
  />
</div>
              <h3>VSN Brand</h3>
              <p>
                Automating Sales & Loyalty with Cashback and AI.
              </p>

              <div className="mini-stats">
                <span>Repeat Sales</span>
                <span>Gamification</span>
                <span>AI Restocking</span>
              </div>
            </div>

          </div>
        </section>

        {/* CASE STUDY 1 */}

        <section className="case-block">

          <div className="case-header">
            <div className="case-image">
    <img
     src="/malarrice.png" alt="Malar Rice" />"
    
  </div>
            <h2>Malar Rice x Bling Reward</h2>
            <p>
              Transforming Customer Loyalty & Sales with Smart Coupons,
              Instant Rewards and AI-powered Engagement
            </p>
          </div>

          <div className="case-grid">

            <div className="info-card">
              <h4>The Challenge</h4>

              <ul>
                <li>Duplicate rice bags affecting trust</li>
                <li>Weak customer engagement</li>
                <li>Only 400 Google reviews</li>
                <li>Limited customer insights</li>
              </ul>
            </div>

            <div className="info-card">
              <h4>The Solution</h4>

              <ul>
                <li>QR Authentication</li>
                <li>Instant Rewards</li>
                <li>Google Review Campaign</li>
                <li>AI Remarketing</li>
              </ul>
            </div>

            <div className="info-card">
              <h4>The Results</h4>

              <div className="result-boxes">
                <div>1400+ Reviews</div>
                <div>3X Engagement</div>
                <div>78% Satisfaction</div>
              </div>
            </div>

          </div>
        </section>

        {/* CASE STUDY 2 */}

        <section className="case-block">

          <div className="case-header">
            <div className="case-image">
  <img
      src="/arcotmanimark.png" alt="Arcot Manimark"
  />
</div>
            <h2>Arcot Manimark x Bling Reward</h2>
            <p>
              Driving Dealer Motivation & Growth with a Customizable
              Incentive Program
            </p>
          </div>

          <div className="case-grid">

            <div className="info-card">
              <h4>The Challenge</h4>

              <ul>
                <li>Low dealer motivation</li>
                <li>Weak engagement</li>
                <li>No referral ecosystem</li>
              </ul>
            </div>

            <div className="info-card">
              <h4>The Solution</h4>

              <ul>
                <li>Point Based Rewards</li>
                <li>Referral Program</li>
                <li>Digital Tracking</li>
                <li>Custom Gift Catalog</li>
              </ul>
            </div>

            <div className="info-card">
              <h4>Rewards</h4>

              <div className="reward-grid">
                <span>Gold</span>
                <span>Cashback</span>
                <span>Two Wheeler</span>
                <span>Trips</span>
              </div>
            </div>

          </div>
        </section>

        {/* CASE STUDY 3 */}

        <section className="case-block">

          <div className="case-header">
            <div className="case-image">
  <img
    src="/vsnbrand.png" alt="VSN Brand"
  />
</div>
            <h2>VSN Brand x Bling Reward</h2>
            <p>
              Automating Sales, Engagement and Loyalty with Cashback &
              AI-powered Restocking
            </p>
          </div>

          <div className="case-grid">

            <div className="info-card">
              <h4>The Challenge</h4>

              <ul>
                <li>Low retention</li>
                <li>Competitive market</li>
                <li>Manual marketing</li>
                <li>Weak repeat purchases</li>
              </ul>
            </div>

            <div className="info-card">
              <h4>Features Used</h4>

              <ul>
                <li>UPI Cashback</li>
                <li>Spin & Win</li>
                <li>Cooking Challenge</li>
                <li>AI Restocking</li>
              </ul>
            </div>

            <div className="info-card">
              <h4>Benefits</h4>

              <ul>
                <li>Higher Loyalty</li>
                <li>Automated Marketing</li>
                <li>More Sales</li>
                <li>Better Insights</li>
              </ul>
            </div>

          </div>
        </section>

        {/* OVERALL METRICS */}

        <section className="metrics-section">

          <h2>
  Across <span>All Brands</span>
</h2>

          <div className="metrics-grid">

            <div className="metric-card">
              <h3>1400+</h3>
              <p>Reviews Generated</p>
            </div>

            <div className="metric-card">
              <h3>3X</h3>
              <p>Engagement Growth</p>
            </div>

            <div className="metric-card">
              <h3>78%</h3>
              <p>Customer Satisfaction</p>
            </div>

            <div className="metric-card">
              <h3>↑</h3>
              <p>Repeat Purchases</p>
            </div>

          </div>

        </section>

          <Footer />
      </div>
    </>
  );
};

export default CaseStudypage;