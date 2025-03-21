import React from "react";
import ChoseBox from "./chose-box-item";
import { motion } from "framer-motion";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";

const whyChooseUsData = [
  {
    title: "Industry-Relevant Training & Expert Faculty",
    description:
      "Our courses are designed by professionals, updated with the latest industry trends, and taught by seasoned experts with real-world experience.",
  },
  {
    title: "Flexible & Comprehensive Learning",
    description:
      "We offer a blend of theoretical knowledge and hands-on practical exposure, with the flexibility to choose between classroom-based and online training.",
  },
  {
    title: "Career & Global Opportunities",
    description:
      "Our dedicated placement support and overseas consultancy help students secure jobs locally and internationally, with a focus on Singapore’s job market.",
  },
];
const WhyChose = () => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI();
  return (
    <section className="why-choose-area-2 section-gap-large">
      <div className="container edublink-animated-shape">
        <div
          className="section-title section-center"
          data-sal-delay="150"
          data-sal="slide-up"
          data-sal-duration="800"
        >
          <span className="pre-title">Why choose LTE</span>
          <h2 className="title">
            The Best <span className="color-secondary">Beneficial</span> Side{" "}
            <br /> of LTE
          </h2>
          <span className="shape-line">
            <i className="icon-19"></i>
          </span>
        </div>
        <div className="row g-5">
          {whyChooseUsData.map((data, i) => (
            <ChoseBox
              key={i}
              color="color-primary-style"
              icon={45 + i}
              title={data.title}
              subtitle={data.description}
            />
          ))}
        </div>
        <ul className="shape-group">
          <li
            className="shape-5"
            data-sal-delay="500"
            data-sal="fade"
            data-sal-duration="200"
          >
            <span></span>
          </li>
        </ul>
      </div>
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
          <span></span>
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
            src="/assets/images/about/shape-13.png"
            alt="shape"
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
          <span></span>
        </motion.li>
        <motion.li
          className="shape-4 scene"
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
            src="/assets/images/about/shape-40.png"
            alt="shape"
          />
        </motion.li>
      </ul>
    </section>
  );
};

export default WhyChose;
