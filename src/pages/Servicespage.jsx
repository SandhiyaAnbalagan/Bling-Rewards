import React from "react";
import "./Servicespage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaGift,
  FaCoins,
  FaBullhorn,
  FaTrophy,
  FaTicketAlt,
  FaMobileAlt,
  FaLightbulb,
  FaUsers,
  FaShieldAlt,
  FaRocket
} from "react-icons/fa";

const servicesData = [
  {
    icon: <FaGift />,
    title: "1. SPIN-WIN (Gamified Rewards)",
    desc: "Create excitement with an interactive spin wheel that rewards customers instantly.",
    points: [
      "Instant rewards",
      "Increased participation",
      "Higher customer retention",
      "Fun shopping experience"
    ]
  },
  {
    icon: <FaCoins />,
    title: "2. Flat Cashback",
    desc: "Reward customers on every purchase with guaranteed cashback.",
    points: [
      "Encourages repeat purchases",
      "Improves customer loyalty",
      "Easy reward redemption",
      "Boosts sales performance"
    ]
  },
  {
    icon: <FaBullhorn />,
    title: "3. Festival Campaigns",
    desc: "Run seasonal campaigns that capture customer attention during festive periods.",
    points: [
      "Higher festive sales",
      "Better brand visibility",
      "Increased customer acquisition",
      "Seasonal engagement boost"
    ]
  },
  {
    icon: <FaTrophy />,
    title: "4. Gamification Challenges",
    desc: "Turn everyday shopping into exciting challenges with badges and missions.",
    points: [
      "Interactive customer experience",
      "Increased app engagement",
      "Better reward participation",
      "Stronger customer loyalty"
    ]
  },
  {
    icon: <FaBullhorn />,
    title: "5. Customized Marketing Contests",
    desc: "Engage customers through creative contests and promotional activities.",
    points: [
      "Higher social engagement",
      "User-generated content",
      "Increased brand awareness",
      "Better customer interaction"
    ]
  },
  {
    icon: <FaTicketAlt />,
    title: "6. Voucher Code Redemptions",
    desc: "Offer discount vouchers, free products and reward coupons.",
    points: [
      "More repeat purchases",
      "Easy campaign management",
      "Increased redemption rates",
      "Better customer satisfaction"
    ]
  },
  {
    icon: <FaMobileAlt />,
    title: "7. Customized White Label Application",
    desc: "Launch your own branded loyalty app with customized features and design.",
    points: [
      "Fully branded solution",
      "Faster deployment",
      "Scalable platform",
      "Complete customer ownership"
    ]
  }
];
function Servicespage() {
  return (
    <>
      <Navbar />

      <div className="brs-page">

        {/* HERO */}
        <section className="brs-hero">
          <div className="brs-hero-left">

            <h1 className="brs-main-title">
              Smart Solutions for Customer
              <span> Rewards & Engagement</span>
            </h1>

            <p className="brs-hero-text">
              Transform every interaction into a rewarding experience using
              AI-powered loyalty programs, cashback rewards, and gamified engagement.
            </p>

            <div className="brs-btn-group">
              <button className="brs-primary-btn">
                Explore Services →
              </button>

              <button className="brs-secondary-btn">
                Book Demo
              </button>
            </div>
          </div>

          <div className="brs-hero-right">
            <img
              src="https://img.freepik.com/free-vector/business-analytics-concept-illustration_114360-1395.jpg"
              alt="loyalty"
            />
          </div>
        </section>

        {/* SERVICES */}
        <section className="brs-services-section">

          <h2 className="brs-section-title">
            Solutions Designed <span>For Growth</span>
          </h2>

          <p className="brs-sub-text">
            Powerful loyalty and engagement solutions to grow your business
            and delight your customers.
          </p>

      <div className="brs-services-grid">
  {servicesData.map((item, index) => (
    <div className="brs-service-card" key={index}>

      <div className="brs-service-icon">
        {item.icon}
      </div>

      <h3>{item.title}</h3>
      <p>{item.desc}</p>

      <ul className="brs-points">
        {item.points.map((point, i) => (
          <li key={i}>● {point}</li>
        ))}
      </ul>

    </div>
  ))}
</div>
        </section>

        {/* WHY CHOOSE */}
        <section className="brs-why-section">

          <h2 className="brs-section-title">
            Why Choose <span>Bling Rewards?</span>
          </h2>

          <div className="brs-why-grid">

            <div className="brs-why-card">
    <div className="brs-why-icon">
        <FaLightbulb />
    </div>
    <h3>Innovative Solutions</h3>
    <p>
        We deliver creative and technology-driven solutions
        tailored to your business requirements.
    </p>
</div>

<div className="brs-why-card">
    <div className="brs-why-icon">
        <FaUsers />
    </div>
    <h3>Customer Focused</h3>
    <p>
        Our priority is to provide seamless experiences and
        long-lasting value for our clients.
    </p>
</div>

<div className="brs-why-card">
    <div className="brs-why-icon">
        <FaShieldAlt />
    </div>
    <h3>Secure & Reliable</h3>
    <p>
        We ensure high security, reliability, and performance
        across every solution we build.
    </p>
</div>

<div className="brs-why-card">
    <div className="brs-why-icon">
        <FaRocket />
    </div>
    <h3>Fast Growth</h3>
    <p>
        Our scalable solutions help businesses achieve growth
        and maximize customer engagement.
    </p>
</div>
          </div>

        </section>

        {/* PROCESS */}
        <section className="brs-process-section">

          <h2 className="brs-section-title">
            How We Deliver <span>Success</span>
          </h2>

          <div className="brs-process-grid">

           <div className="brs-process-card">
    <span>1</span>
    <h3>Strategy & Planning</h3>
    <p>
        We analyze your business objectives and create a roadmap
        to deliver effective reward solutions.
    </p>
</div>

<div className="brs-process-card">
    <span>2</span>
    <h3>Solution Design</h3>
    <p>
        Our experts design engaging and scalable reward systems
        tailored to your business needs.
    </p>
</div>

<div className="brs-process-card">
    <span>3</span>
    <h3>Development & Integration</h3>
    <p>
        We build secure solutions and integrate them seamlessly
        with your existing platform.
    </p>
</div>

<div className="brs-process-card">
    <span>4</span>
    <h3>Launch & Optimization</h3>
    <p>
        After deployment, we continuously monitor and optimize
        performance for long-term growth.
    </p>
</div>
          </div>

        </section>

 <Footer/>
      </div>
     
    </>
   
  );
}

export default Servicespage;