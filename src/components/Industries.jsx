import React from "react";
import "./Industries.css";

const brands = [
  {
    name: "Digisol",
    logo: "/digisol.png",
  },
  {
    name: "GBR TMT",
    logo: "/gbr.png",
  },
  {
    name: "Essel",
    logo: "/essel.avif",
  },
  {
    name: "DreamWall",
    logo: "/dreamwall.png",
  },
  {
    name: "Taralac",
    logo: "/taralac.png",
     className: "big-logo", 
  },
  {
    name: "Valli Paints",
    logo: "/valli.jpeg",
     className: "big-logo",
  },
  {
    name: "Kolors",
    logo: "/kolors.svg",
  },
];

const Industries = () => {
  return (
    <div className="industries-container">
      <h2>
        Trusted by <span>Leading Brands</span>
      </h2>

      <div className="brands-row">
        {brands.map((brand, index) => (
          <div className="brand-card" key={index}>
            <img src={brand.logo} alt={brand.name} className={brand.className} />
          </div>
        ))}
      </div>

      <button className="view-btn">View All Clients</button>
    </div>
  );
};

export default Industries;