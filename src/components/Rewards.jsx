import React, { useState } from "react";
import "./Rewards.css";
import { FaQuoteLeft } from "react-icons/fa";
const testimonials = [
  {
    text: "Bling Rewards helped us increase electrician engagement by 70% and drive consistent sales growth.",
    role: "Marketing Head",
    company: "Valli Paints",
    logo: "/valli.jpeg",
  },
  {
    text: "The platform is easy to use and exciting.",
    role: "Sales Head",
    company: "Digisol",
    logo: "/digisol.png",
  },
  {
    text: "Scan. Earn. Redeem. Simple and powerful.",
    role: "Channel Head",
    company: "Kolors",
    logo: "/kolors.svg",
  },
  {
    text: "Great onboarding experience.",
    role: "Manager",
    company: "DreamWall",
    logo: "/dreamwall.png",
  },
   {
    text: "Helped us boost customer loyalty significantly.",
    role: "Director",
    company: "DreamWall",
    logo: "/dreamwall.png",
  },
];

const Rewards = () => {
  const [current, setCurrent] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  const next = () => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="rewards-container">
      <h2>
        What Our <span>Clients Say</span>
      </h2>

      <div className="testimonial-wrapper">
        
        {/* 🔥 LEFT ARROW */}
        <button className="arrow left" onClick={prev}>
          ❮
        </button>

        <div className="testimonial-row">
          {testimonials
            .slice(current * itemsPerSlide, current * itemsPerSlide + itemsPerSlide)
            .map((item, index) => (
              <div className="testimonial-card" key={index}>
                <div className="quote">
                  <FaQuoteLeft /></div>
                <div className="stars">
                      ⭐⭐⭐⭐⭐
                  </div>
                <p className="text">{item.text}</p>

                <div className="bottom">
                  <div>
                    <p className="role">– {item.role}</p>
                    <p className="company">{item.company}</p>
                  </div>

                  <img src={item.logo} alt={item.company} />
                </div>
              </div>
            ))}
        </div>

        {/* 🔥 RIGHT ARROW */}
        <button className="arrow right" onClick={next}>
          ❯
        </button>
      </div>

      {/* dots */}
      <div className="dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={current === index ? "active" : ""}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Rewards;