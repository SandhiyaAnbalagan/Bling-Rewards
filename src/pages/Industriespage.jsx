import React from "react";
import "./Industriespage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const industries = [
  {
    id: "01",
    title: "Retail & Ecommerce",
    description:
      "Turn impulse buyers into loyal customers through cashback, spin-to-win campaigns, and refill reminders.",
    icon: "🛒",
  },
  {
    id: "02",
    title: "Fashion & Apparel",
    description:
      "Drive repeat purchases with exclusive member rewards, cashback campaigns, and personalized offers.",
    icon: "👕",
  },
  {
    id: "03",
    title: "Automobile & Accessories",
    description:
      "Reward servicing, parts purchases, and test drives with cashback and targeted offers.",
    icon: "🚗",
  },
  {
    id: "04",
    title: "Paint & Plumbing",
    description:
      "Build contractor and influencer loyalty through QR-based tracking and instant rewards.",
    icon: "🎨",
  },
  {
    id: "05",
    title: "Sports & Fitness",
    description:
      "Engage active communities with challenges, leaderboards, and milestone-based rewards.",
    icon: "🏋️",
  },
  {
    id: "06",
    title: "Pharma",
    description:
      "Encourage repeat purchases with cashback on prescriptions, gamified health challenges, and targeted offers.",
    icon: "💊",
  },
  {
    id: "07",
    title: "Medical Devices & Accessories",
    description:
      "Drive trust and loyalty with warranty-based QR registrations, cashback on purchases, and after-sales engagement.",
    icon: "🩺",
  },
  {
    id: "08",
    title: "Electronics",
    description:
      "Boost brand stickiness with product registration rewards, spin-to-win campaigns, and cashback incentives.",
    icon: "💻",
  },
  {
    id: "09",
    title: "Liquor & Tobacco",
    description:
      "Engage distributors and consumers with festival-themed rewards and instant cashback programs.",
    icon: "🍷",
  },
  {
    id: "10",
    title: "Agriculture",
    description:
      "Incentivize repeat orders from dealers and end users with season-based loyalty campaigns.",
    icon: "🌾",
  },
  {
    id: "11",
    title: "Beauty & Cosmetics",
    description:
      "Delight customers with tiered cashback, limited-time reward drops, and premium loyalty experiences.",
    icon: "💄",
  },
  {
    id: "12",
    title: "Shoes & Footwear",
    description:
      "Encourage repeat buyers with exclusive cashback, reward points, and QR-based warranty incentives.",
    icon: "👟",
  },
  {
    id: "13",
    title: "Pet Products",
    description:
      "Reward pet owners with cashback, refill reminders, and gamified pet-care challenges.",
    icon: "🐾",
  },
  {
    id: "14",
    title: "Watches & Accessories",
    description:
      "Drive exclusivity through premium cashback offers, referral rewards, and loyalty tiers.",
    icon: "⌚",
  },
  {
    id: "15",
    title: "Supplements & Wellness",
    description:
      "Inspire healthy lifestyles with subscription rewards, fitness challenges, and purchase incentives.",
    icon: "💪",
  },
  {
    id: "16",
    title: "Faucets & Sanitary Fittings",
    description:
      "Motivate contractors and resellers with cashback, warranty registrations, and seasonal bonuses.",
    icon: "🚿",
  },
  {
    id: "17",
    title: "Fragrances & Aerosols",
    description:
      "Enhance customer experience with loyalty points, repeat purchase rewards, and influencer campaigns.",
    icon: "🌸",
  },
  {
    id: "18",
    title: "Hardware Parts",
    description:
      "Incentivize contractors and dealers through bulk-purchase cashback and QR-linked loyalty points.",
    icon: "🔧",
  },
  {
    id: "19",
    title: "Baby Products",
    description:
      "Reward parents with cashback, subscription perks, and milestone-based engagement programs.",
    icon: "👶",
  },
  {
    id: "20",
    title: "Lights & Accessories",
    description:
      "Boost repeat orders with festival reward campaigns, bundle cashback offers, and retailer incentives.",
    icon: "💡",
  },
  {
    id: "21",
    title: "Lights & Aerosols",
    description:
      "Drive repeat orders with festival reward campaigns, cashback on bundles, and gamified retailer incentives.",
    icon: "🧴",
  },
];

function Industriespage() {
  return (
    <>
      <Navbar />

      <div className="industries-page">
        {/* HERO SECTION */}
        <section className="industries-hero">
          <div className="hero-left">
            <p className="breadcrumb">Home / Industries</p>

            <h1>
              Industries
              <br />
              <span>We Serve</span>
            </h1>

            <p className="hero-description">
              Empowering brands across multiple industries with AI-powered
              loyalty, rewards, engagement and retention solutions.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">Explore Industries</button>
              <button className="secondary-btn">Book Demo</button>
            </div>
          </div>

          <div className="hero-right">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
              alt="Industries"
            />
          </div>
        </section>

        {/* INDUSTRIES GRID */}
        <section className="industries-grid-section">
          <div className="section-header">
            <h2>
              Explore Industries <span>We Empower</span>
            </h2>
          </div>

          <div className="industries-grid">
            {industries.map((industry) => (
              <div className="industry-card" key={industry.id}>
                <div className="industry-number">{industry.id}</div>

                <div className="industry-icon">
                  {industry.icon}
                </div>

                <h3>{industry.title}</h3>

                <p>{industry.description}</p>
                <div className="industry-features">
                     <p>✓ Loyalty Programs</p>
                      <p>✓ Cashback Rewards</p>
                      <p>✓ QR Engagement</p>
                </div>
                
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="why-section">
          <h2>
            Why Industries Choose <span>Bling Rewards</span>
          </h2>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🤖</div>
              <h3> AI Loyalty Engine</h3>
              <p>Smart recommendations powered by customer behavior.</p>
            </div>

            <div className="why-card">
              <div className="why-icon">📱</div>
              <h3> QR Rewards</h3>
              <p>Instant scan-based loyalty and engagement.</p>
            </div>

            <div className="why-card">
              <div className="why-icon">🎁</div>
              <h3> Cashback & Vouchers</h3>
              <p>Reward customers with personalized incentives.</p>
            </div>

            <div className="why-card">
              <div className="why-icon">📊</div>
              <h3> Analytics</h3>
              <p>Real-time dashboards and campaign insights.</p>
            </div>

            <div className="why-card">
              <div className="why-icon">👥</div>
              <h3> Dealer Engagement</h3>
              <p>Build strong dealer and distributor relationships.</p>
            </div>

            <div className="why-card">
              <div className="why-icon">🚀</div>
              <h3> Retention Automation</h3>
              <p>Increase repeat purchases and customer lifetime value.</p>
            </div>
          </div>
        </section>
        
        <Footer/>
      </div>
    </>
  );
}

export default Industriespage;