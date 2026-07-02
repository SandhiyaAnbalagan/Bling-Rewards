import React from "react";
import "./Hero.css";
import { FaGift, FaWallet, FaUsers } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800"
          alt="Digital Rewards"
        />
      </div>

      <div className="hero-right">
        <h1>
          Engage Reward
          <br />
          <span>Grow Together</span>
        </h1>

        <p>
          Bling Rewards is an AI-Powered loyalty & engagement platform that
          helps brands acquire, engage and retain customers.
        </p>

        <button
  className="hero-btn"
  onClick={() => window.location.href = "#about"}
>
  Get Started
</button>

        <div className="hero-features">
          <div className="feature">
            <FaGift className="feature-icon" />
            <h4>Scan & Earn</h4>
            <p>Simple scan, earn points instantly</p>
          </div>

          <div className="feature">
            <FaWallet className="feature-icon" />
            <h4>Redeem & Enjoy</h4>
            <p>Exciting rewards, cashback & more</p>
          </div>

          <div className="feature">
            <FaUsers className="feature-icon" />
            <h4>Stronger Together</h4>
            <p>End Customer - Dealer - Distributor</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;