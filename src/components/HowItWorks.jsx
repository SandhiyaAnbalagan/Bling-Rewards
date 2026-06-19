import React from "react";
import "./HowItWorks.css";


const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        
        {/* LEFT CONTENT */}
        <div className="content">
          <h2>How Bling Reward Works</h2>

           <div className="step">
            <h3>1. Buy a Product</h3>
            <p>Customer buys your product with a unique code</p>
          </div>

          <div className="step">
            <h3>2. Scan QR</h3>
            <p>A quick scan connects your customers to a world of rewards.</p>
          </div>

          <div className="step">
            <h3>3. Earn Rewards</h3>
            <p>Automatically earn cashback, points, and personalized offers.</p>
          </div>

          <div className="step">
            <h3>4. Redeem</h3>
            <p>Redeem rewards effortlessly across OTT platforms, games, and top brands.</p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="image">
          <img src="/how-it-work.png" alt="How it works" />
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;