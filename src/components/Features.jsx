import React, { useRef } from "react";
import "./Features.css";

const featuresData = [
  {
    title: "OTT Subscriptions",
    desc: "Up to 50% Off",
    img: "https://cdn-icons-png.flaticon.com/512/5977/5977590.png",
  },
  {
    title: "Cricket Tickets",
    desc: "IPL & International",
    img: "https://cdn-icons-png.flaticon.com/512/857/857455.png",
  },
  {
    title: "Cashback",
    desc: "Instant Bank Transfer",
    img: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
  },
  {
    title: "Gaming Vouchers",
    desc: "Play More, Win More",
    img: "https://cdn-icons-png.flaticon.com/512/686/686589.png",
  },
  {
    title: "Membership Plans",
    desc: "Exclusive Access",
    img: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
  },
  {
    title: "Gift Vouchers",
    desc: "Amazon, Flipkart & More",
    img: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
  },
  {
    title: "Travel Offers",
    desc: "Flight & Hotel Deals",
    img: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
  },
  {
    title: "Food Coupons",
    desc: "Zomato & Swiggy",
    img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
  },
];
const Features = () => {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -250,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 250,
      behavior: "smooth",
    });
  };

  return (
  
    <div className="features-container">
      <h2>Rewards They Love</h2>

      <div className="features-wrapper">
        
        {/* LEFT ARROW */}
        <button className="arrow-btn left" onClick={scrollLeft}>
          ❮
        </button>

        <div className="features-row" ref={scrollRef}>
          {featuresData.map((item, index) => (
            <div className="feature-card" key={index}>
              <img src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <button className="arrow-btn right" onClick={scrollRight}>
          ❯
        </button>

      </div>
    </div>
  );
};

export default Features;