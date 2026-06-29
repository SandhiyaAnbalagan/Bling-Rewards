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
    keyword: "ecommerce-shopping"
  },
  {
    id: "02",
    title: "Fashion & Apparel",
    description:
      "Drive repeat purchases with exclusive member rewards, cashback campaigns, and personalized offers.",
    icon: "👕",
    keyword: "clothing-store"
  },
  {
    id: "03",
    title: "Automobile & Accessories",
    description:
      "Reward servicing, parts purchases, and test drives with cashback and targeted offers.",
    icon: "🚗",
    keyword: "car-service"
  },
  {
    id: "04",
    title: "Paint & Plumbing",
    description:
      "Build contractor and influencer loyalty through QR-based tracking and instant rewards.",
    icon: "🎨",
    keyword: "home-renovation"
  },
  {
    id: "05",
    title: "Sports & Fitness",
    description:
      "Engage active communities with challenges, leaderboards, and milestone-based rewards.",
    icon: "🏋️",
    keyword: "gym-workout"
  },
  {
    id: "06",
    title: "Pharma",
    description:
      "Encourage repeat purchases with cashback on prescriptions, gamified health challenges, and targeted offers.",
    icon: "💊",
    keyword: "pharmacy-medicine"
  },
  {
    id: "07",
    title: "Medical Devices & Accessories",
    description:
      "Drive trust and loyalty with warranty-based QR registrations, cashback on purchases, and after-sales engagement.",
    icon: "🩺",
    keyword: "medical-equipment"
  },
  {
    id: "08",
    title: "Electronics",
    description:
      "Boost brand stickiness with product registration rewards, spin-to-win campaigns, and cashback incentives.",
    icon: "💻",
    keyword: "gadgets-laptop"
  },
  {
    id: "09",
    title: "Liquor & Tobacco",
    description:
      "Engage distributors and consumers with festival-themed rewards and instant cashback programs.",
    icon: "🍷",
    keyword: "lounge-bar"
  },
  {
    id: "10",
    title: "Agriculture",
    description:
      "Incentivize repeat orders from dealers and end users with season-based loyalty campaigns.",
    icon: "🌾",
    keyword: "farming-field"
  },
  {
    id: "11",
    title: "Beauty & Cosmetics",
    description:
      "Delight customers with tiered cashback, limited-time reward drops, and premium loyalty experiences.",
    icon: "💄",
    keyword: "makeup-cosmetics"
  },
  {
    id: "12",
    title: "Shoes & Footwear",
    description:
      "Encourage repeat buyers with exclusive cashback, reward points, and QR-based warranty incentives.",
    icon: "👟",
    keyword: "sneakers-shoes"
  },
  {
    id: "13",
    title: "Pet Products",
    description:
      "Reward pet owners with cashback, refill reminders, and gamified pet-care challenges.",
    icon: "🐾",
    keyword: "pets-dog"
  },
  {
    id: "14",
    title: "Watches & Accessories",
    description:
      "Drive exclusivity through premium cashback offers, referral rewards, and loyalty tiers.",
    icon: "⌚",
    keyword: "luxury-watch"
  },
  {
    id: "15",
    title: "Supplements & Wellness",
    description:
      "Inspire healthy lifestyles with subscription rewards, fitness challenges, and purchase incentives.",
    icon: "💪",
    keyword: "proteins-wellness"
  },
  {
    id: "16",
    title: "Faucets & Sanitary Fittings",
    description:
      "Motivate contractors and resellers with cashback, warranty registrations, and seasonal bonuses.",
    icon: "🚿",
    keyword: "bathroom-interior"
  },
  {
    id: "17",
    title: "Fragrances & Aerosols",
    description:
      "Enhance customer experience with loyalty points, repeat purchase rewards, and influencer campaigns.",
    icon: "🌸",
    keyword: "perfume-spray"
  },
  {
    id: "18",
    title: "Hardware Parts",
    description:
      "Incentivize contractors and dealers through bulk-purchase cashback and QR-linked loyalty points.",
    icon: "🔧",
    keyword: "hardware-tools"
  },
  {
    id: "19",
    title: "Baby Products",
    description:
      "Reward parents with cashback, subscription perks, and milestone-based engagement programs.",
    icon: "👶",
    keyword: "baby-care"
  },
  {
    id: "20",
    title: "Lights & Accessories",
    description:
      "Boost repeat orders with festival reward campaigns, bundle cashback offers, and retailer incentives.",
    icon: "💡",
    keyword: "modern-lighting"
  },
  {
    id: "21",
    title: "Lights & Aerosols",
    description:
      "Drive repeat orders with festival reward campaigns, cashback on bundles, and gamified retailer incentives.",
    icon: "🧴",
    keyword: "skincare-lotion"
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

        {/* MODERN ALTERNATING MAGAZINE GRID */}
        <section className="industries-grid-section">
          <div className="section-header">
            <h2>
              Explore Industries <span>We Empower</span>
            </h2>
          </div>

          <div className="industries-grid">
            {industries.map((industry) => (
              <div className="industry-card" key={industry.id}>
                
                {/* Topic Specific Media Screen Panel */}
                <div className="card-media-side">
                  <div className="industry-number">{industry.id}</div>
                  
                  {/* Dynamic Source URL Injection using the topic specific keyword keys */}
                  <img 
                    src={`https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80&auto=format&fit=crop&sig=${industry.id}`}
                    alt={industry.title} 
                    loading="lazy"
                    className="industry-bg-image"
                  />
                </div>

                {/* Content Side Details Screen Component */}
                <div className="card-content-side">
                  <h3>
                    <span className="industry-icon">{industry.icon}</span> 
                    {industry.title}
                  </h3>
                  
                  <p>{industry.description}</p>
                  
                  <div className="industry-features">
                    <p>✓ Loyalty Engine</p>
                    <p>✓ Custom Rewards</p>
                    <p>✓ Retention Pack</p>
                  </div>
                  
                  <button className="learn-more">Learn More →</button>
                </div>
                
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE SECTION */}
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