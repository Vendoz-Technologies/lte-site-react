import React from "react";
import { motion } from "framer-motion";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";

const lists = [
  "Industry-Relevant Programs",
  "Hands-On Practical Training",
  "Global Career Opportunities",
];

const AboutArea = () => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI();
  return (
    <div className="section-gap-large edu-about-area about-style-7">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <div className="about-content">
              <div
                className="section-title section-left"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <span className="pre-title">About Us</span>
                <h2 className="title">
                  <span className="color-secondary">Empowering</span> Careers
                  with Industry-Relevant Skills
                </h2>
                <span className="shape-line">
                  <i className="icon-19"></i>
                </span>
                <p>
                  LTE Academy empowers individuals with the skills needed to
                  excel in competitive industries. With a vision to bridge
                  education and career success, we offer tailored training
                  programs in Human Resources, Logistics, Digital Marketing, and
                  Software. Our focus is on practical, real-world learning to
                  help students secure opportunities in local and international
                  markets. Backed by experienced professionals and
                  state-of-the-art infrastructure, we provide an environment
                  that fosters growth and innovation. Our commitment to
                  excellence ensures students gain the knowledge and confidence
                  to stand out in their careers.
                </p>
              </div>
              <ul
                className="features-list"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                {lists.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-image-gallery">
              <img
                loading="lazy"
                className="main-img-1"
                src="/assets/images/about/about-11.webp"
                alt="About Image"
              />
              <img
                loading="lazy"
                className="main-img-2"
                src="/assets/images/about/about-12.webp"
                data-sal-delay="150"
                data-sal="slide-down"
                data-sal-duration="800"
                alt="About Image"
              />
              <ul className="shape-group">
                <motion.li
                  className="shape-1 scene"
                  data-sal-delay="500"
                  data-sal="fade"
                  data-sal-duration="200"
                  animate={{
                    x: mouseReverse(30).x,
                    y: mouseReverse(30).y,
                  }}
                >
                  <img
                    loading="lazy"
                    src="/assets/images/about/shape-38.png"
                    alt="Shape"
                  />
                </motion.li>
                <motion.li
                  className="shape-2 scene"
                  data-sal-delay="500"
                  data-sal="fade"
                  data-sal-duration="200"
                  animate={{
                    x: mouseDirection(30).x,
                    y: mouseDirection(30).y,
                  }}
                >
                  <img
                    loading="lazy"
                    src="/assets/images/about/shape-37.png"
                    alt="Shape"
                  />
                </motion.li>
                <motion.li
                  className="shape-3 scene"
                  data-sal-delay="500"
                  data-sal="fade"
                  data-sal-duration="200"
                  animate={{
                    x: mouseDirection(30).x,
                    y: mouseDirection(30).y,
                  }}
                >
                  <img
                    loading="lazy"
                    src="/assets/images/about/shape-04.png"
                    alt="Shape"
                  />
                </motion.li>
                <li
                  className="shape-4 scene"
                  data-sal-delay="500"
                  data-sal="fade"
                  data-sal-duration="200"
                >
                  <img
                    loading="lazy"
                    src="/assets/images/counterup/shape-02.png"
                    alt="Shape"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul className="shape-group">
        <li
          className="shape-1"
          data-sal-delay="500"
          data-sal="fade"
          data-sal-duration="200"
        ></li>
      </ul>
    </div>
  );
};

export default AboutArea;
