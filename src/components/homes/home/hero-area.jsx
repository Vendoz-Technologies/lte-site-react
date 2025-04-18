import Link from "next/link";
import { motion } from "framer-motion";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";

const HeroArea = () => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI();
  return (
    <div className="hero-banner hero-style-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-content">
              <h1
                className="title"
                data-sal-delay="100"
                data-sal="slide-up"
                data-sal-duration="1000"
              >
                Unlock Your Potential with{" "}
                <span className="color-secondary">LTE</span> <br />
                Academy
              </h1>
              <p
                data-sal-delay="200"
                data-sal="slide-up"
                data-sal-duration="1000"
              >
                Gain in-demand skills through expert-led training programs
                designed for career success in HR, Logistics, Digital Marketing,
                Software, and more.
              </p>
              <div
                className="banner-btn"
                data-sal-delay="400"
                data-sal="slide-up"
                data-sal-duration="1000"
              >
                <Link href="/courses" className="edu-btn">
                  Find courses <i className="icon-4"></i>
                </Link>
              </div>
              <ul className="shape-group">
                <motion.li
                  className="shape-1 scene"
                  data-sal-delay="1000"
                  data-sal="fade"
                  data-sal-duration="1000"
                  animate={{
                    x: mouseReverse(25).x,
                    y: mouseReverse(25).y,
                  }}
                >
                  <img
                    loading="lazy"
                    src="/assets/images/about/shape-13.png"
                    alt="Shape"
                  />
                </motion.li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-thumbnail">
              <div
                className="thumbnail"
                data-sal-delay="500"
                data-sal="slide-left"
                data-sal-duration="1000"
              >
                <img
                  loading="lazy"
                  src="/assets/images/banner/girl-1.webp"
                  alt="Girl Image"
                />
              </div>
              <ul className="shape-group">
                <li
                  className="shape-1"
                  data-sal-delay="1000"
                  data-sal="fade"
                  data-sal-duration="1000"
                >
                  <img
                    loading="lazy"
                    src="/assets/images/about/shape-15.png"
                    alt="Shape"
                  />
                </li>
                <motion.li
                  className="shape-2 scene"
                  data-sal-delay="1000"
                  data-sal="fade"
                  data-sal-duration="1000"
                  animate={{
                    x: mouseDirection(25).x,
                    y: mouseDirection(25).y,
                  }}
                >
                  <img
                    loading="lazy"
                    src="/assets/images/about/shape-16.png"
                    alt="Shape"
                  />
                </motion.li>

                <motion.li
                  className="shape-3 scene"
                  data-sal-delay="1000"
                  data-sal="fade"
                  data-sal-duration="1000"
                  animate={{
                    x: mouseReverse(20).x,
                    y: mouseReverse(20).y,
                  }}
                >
                  <span className="circle-shape d-block"></span>
                </motion.li>

                <li
                  className="shape-4"
                  data-sal-delay="1000"
                  data-sal="fade"
                  data-sal-duration="1000"
                >
                  <img
                    loading="lazy"
                    src="/assets/images/counterup/shape-02.png"
                    alt="Shape"
                  />
                </li>
                <motion.li
                  className="shape-5 scene"
                  data-sal-delay="1000"
                  data-sal="fade"
                  data-sal-duration="1000"
                  animate={{
                    x: mouseReverse(25).x,
                    y: mouseReverse(25).y,
                  }}
                >
                  <img
                    loading="lazy"
                    src="/assets/images/about/shape-13.png"
                    alt="Shape"
                  />
                </motion.li>
                <motion.li
                  className="shape-6 scene"
                  data-sal-delay="1000"
                  data-sal="fade"
                  data-sal-duration="1000"
                  animate={{
                    x: mouseDirection(20).x,
                    y: mouseDirection(20).y,
                  }}
                >
                  <img
                    loading="lazy"
                    src="/assets/images/about/shape-18.png"
                    alt="Shape"
                  />
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-7">
        <img
          loading="lazy"
          src="/assets/images/about/h-1-shape-01.png"
          alt="Shape"
        />
      </div>
    </div>
  );
};

export default HeroArea;
