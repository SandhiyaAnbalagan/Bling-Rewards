import React from "react";
import "./WhyUs.css";
import {
  MessageCircle,
  ScanLine,
  BarChart3,
  Gift,
  Users,
} from "lucide-react";

const WhyUs = () => {
  const data = [
    {
      icon: <MessageCircle size={45} />,
      title: "Omnichannel Engagement",
      items: [
        "WhatsApp Bot Integration",
        "SMS & Email Campaigns",
        "App, Web & In-store",
        "Personalised Offers",
      ],
    },
    {
      icon: <ScanLine size={45} />,
      title: "Scan, Earn & Win",
      items: [
        "Unique Code / QR / Scratch",
        "Instant Points & Rewards",
        "Virtual Scratch Cards",
        "Bill Upload & Earn",
      ],
    },
    {
      icon: <BarChart3 size={45} />,
      title: "Real-time Analytics",
      items: [
        "Customer Insights",
        "Campaign Performance",
        "Redemption Reports",
        "ROI Tracking",
      ],
    },
    {
      icon: <Gift size={45} />,
      title: "Custom Rewards",
      items: [
        "OTT, Cashback, Vouchers",
        "Cricket Tickets, Gaming",
        "Membership Plans",
        "Real World Rewards",
      ],
    },
    {
      icon: <Users size={45} />,
      title: "Multiple User Levels",
      items: [
        "End Customer",
        "Dealer / Distributor",
        "Sales Team / Electrician",
        "B2B, B2C, B2B2C",
      ],
    },
  ];

  return (
    <section className="whyus">
      <h2 className="heading">
        Powerful Platform. <span>Endless Possibilities.</span>
      </h2>

      <div className="cards">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <div className="icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <ul>
              {item.items.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;