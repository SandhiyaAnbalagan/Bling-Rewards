import React, { useRef } from "react";
import "./Solutionspage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
const solutions = [
  {
    title:"QR Based Brand Protection",
    icon:"qr_code_2",
    text:"QR Code Signup Rewards that turn your product packaging into a direct engagement tool."
  },
  {
    title:"Dealer & Stockist Incentives",
    icon:"groups",
    text:"Dealer Incentive Solutions that simplify tracking, performance management, and payouts."
  },
  {
    title:"End Customers Loyalty",
    icon:"loyalty",
    text:"Customer Loyalty Platform tailored to products, purchase patterns, and user profiles."
  },
  {
    title:"AI Powered Reward Platform",
    icon:"smart_toy",
    text:"Automated Reward Platform with UPI cashback, physical gift dispatch, and live campaign analytics."
  },
  {
    title:"Custom Engagement Tools",
    icon:"chat",
    text:"WhatsApp journeys, nudges, and personalized customer offers to drive retention."
  },
  {
    title:"Google Review Booster",
    icon:"star",
    text:"Build online trust and improve brand visibility through organic customer feedback loops."
  },
  {
    title:"AR Engagement Rewards",
    icon:"view_in_ar",
    text:"AR and QR-based brand protection platform to safeguard original products."
  },
  {
    title:"Gamification Formats",
    icon:"sports_esports",
    text:"Spin-to-win, scratch cards, challenges and tiered rewards to keep users coming back."
  }
];


function Solutionspage(){
const solutionsRef = useRef(null);
  const navigate = useNavigate();
return(
     <div>
    <Navbar />
<div className="solutions-page">
</div>

{/* Hero */}
{/* Hero */}
<section className="solution-hero">
  <div className="hero-wrapper">

    {/* Left Content */}
    <div className="hero-content">

      <span className="badge">
        OUR SOLUTIONS
      </span>

      <h1>
        Complete
        <span> Loyalty & Engagement </span>
        <br />
        Solutions for Your Brand
      </h1>

      <p>
        Bling Reward is a complete ecosystem designed to build loyalty,
        increase repeat purchases, and grow your brand's market presence
        through immersive technology.
      </p>

      <div className="hero-buttons">
        <button
  onClick={() =>
    solutionsRef.current?.scrollIntoView({
      behavior: "smooth"
    })
  }
>
  Explore Solutions
</button>

          <button
    className="outline"
    onClick={() => navigate("/casestudy")}
  >
    View Case Studies
  </button>
      </div>

    </div>

    {/* Right Image */}
    <div className="hero-image">
      <img
        src="/solution-banner.jpeg"
        alt="Solutions"
      />
    </div>

  </div>
</section>

{/* Cards */}

<section
  className="solution-grid"
  ref={solutionsRef}
>

{
solutions.map((item,index)=>(

<div className="solution-card" key={index}>


<div className="solutioncard-top">

<span className="number">
0{index+1}
</span>


<div className="solutionicon">
 <span className="material-symbols-outlined">
    {item.icon}
  </span>
</div>

</div>


<h3>
{item.title}
</h3>


<p>
{item.text}
</p>
<ul className="benefits">
  <li>Easy Setup</li>
  <li>Real-Time Tracking</li>
  <li>Secure Rewards</li>
</ul>

</div>


))

}

</section>

<Footer />
</div>

)

}


export default Solutionspage;