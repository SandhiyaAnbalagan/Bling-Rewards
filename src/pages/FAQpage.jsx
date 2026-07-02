import React, { useState, useRef } from "react";
import "./FAQpage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqData = [
  {
    question: "What types of businesses can use Bling Reward?",
    answer:
      "Bling Reward is built for any brand that values repeat purchases and long-term engagement. We've seen success across rice brands, FMCG, retail, health, pet care, and even automotive. Whether you need a customer loyalty platform or a dealer incentive solution, our system adapts to your goals.",
  },
  {
    question: "How does your QR-based reward system work?",
    answer:
      "Each product or bill gets a unique QR code. When scanned, it directs users to a branded experience where they can register, sign up and get rewarded, spin for prizes, or claim cashback. It's a smart and scalable QR scan loyalty solution.",
  },
  {
    question: "Can rewards be automated?",
    answer:
      "Yes, our platform is an automated reward platform. Once you set up your campaign logic, the system handles tracking, validation, and reward disbursement. Whether it's UPI cashback rewards, coupon codes, or physical gift fulfillment, it all runs hands-free.",
  },
  {
    question: "Do you support WhatsApp for reward campaigns?",
    answer:
      "Absolutely. WhatsApp is at the heart of our communication engine. You can send out reward confirmations, promotional nudges, loyalty point updates, and personalized offers, all with higher open rates and faster engagement than email or SMS.",
  },
  {
    question: "Is this only for end-consumer engagement?",
    answer:
      "No, Bling also includes robust tools for motivating distributors, field agents, and service partners. Our dealer incentive solution lets you assign targets, track sales, and release rewards with complete transparency.",
  },
  {
    question: "Is your loyalty program software compliant and secure?",
    answer:
      "Yes. Our loyalty program software in India follows best practices for data protection and secure communication. Your customer data stays encrypted, accessible only through admin roles you control.",
  },
  {
    question: "Ready to Turn Engagement Into Loyalty?",
    answer:
      "Whether you're a growing FMCG brand, a retail giant, or a regional distributor — Bling Reward gives you everything you need to launch smart, automated loyalty campaigns that actually move the needle.",
  },
  {
    question: "Can I send rewards via UPI?",
    answer:
      "Yes, instant UPI rewards are built in and completely automated.",
  },
];

function FAQpage() {
  const [active, setActive] = useState(0);
const faqRef = useRef(null);

const scrollToQuestions = () => {
  faqRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
};
  const toggleFaq = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <>
      <Navbar />

      <div className="faq-wrapper">
        {/* HERO */}
        <section className="faq-banner">
          <div className="faq-banner-left">
            <h1>
              Frequently Asked <br />
              <span>Questions</span>
            </h1>

            <p>
              Have questions about loyalty programs, QR rewards,
              cashback campaigns, or dealer incentives?
              Find quick answers below.
            </p>

            <button onClick={scrollToQuestions}>
  Explore Questions
</button>
          </div>

          <div className="faq-banner-right">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2593/2593637.png"
              alt="faq"
            />
          </div>
        </section>

        {/* FAQ SECTION */}
       <section
  className="faq-list-section"
  ref={faqRef}
>
          {faqData.map((item, index) => (
            <div className="faq-card-box" key={index}>
              <div
                className="faq-card-header"
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-number-circle">
                  {index + 1}
                </div>

                <h3>{item.question}</h3>

                <span className="faq-toggle-icon">
                  {active === index ? "−" : "+"}
                </span>
              </div>

              {active === index && (
                <div className="faq-card-content">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* CTA */}
        
          <div className="faq-action-left">
          </div>
          <div className="faq-action-right">
           
          </div>
      
      </div>

      <Footer />
    </>
  );
}

export default FAQpage;