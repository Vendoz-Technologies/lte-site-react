import React from "react";

const brands = [
  "/assets/images/brand/brand-01.png",
  "/assets/images/brand/brand-02.png",
  "/assets/images/brand/brand-03.png",
  "/assets/images/brand/brand-04.png",
  "/assets/images/brand/brand-05.png",
  "/assets/images/brand/brand-06.png",
];

const BrandArea = ({ about_p_2 }) => {
  return (
    <div
      className={`edu-brand-area ${
        about_p_2 ? "brand-area-5" : "brand-area-4 gap-lg-bottom-equal"
      }`}
    >
      <div className="container">
        <div className="brand-grid-wrap brand-style-2">
          {brands.map((img, i) => (
            <div key={i} className="brand-grid">
              <img loading="lazy" src={img} alt="Brand Logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandArea;
