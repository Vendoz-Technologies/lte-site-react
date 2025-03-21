import useModal from "../../../hooks/use-modal";
import VideoModal from "../../common/popup-modal/video-modal";
import { motion } from "framer-motion";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";

const features_list = [
  "Industry-Relevant Programs",
  "Hands-On Practical Training",
  "Global Career Opportunities",
];

const AboutArea = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  const { mouseDirection, mouseReverse } = useMouseMoveUI();
  return (
    <>
      <div className="gap-bottom-equal edu-about-area about-style-1">
        <div className="container edublink-animated-shape">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="about-image-gallery">
                <img
                  loading="lazy"
                  className="main-img-1"
                  src="/assets/images/about/about-01.jpg"
                  alt="About Image"
                />
                <div
                  className="video-box"
                  data-sal-delay="150"
                  data-sal="slide-down"
                  data-sal-duration="800"
                >
                  <div className="inner">
                    <div className="thumb">
                      <img
                        loading="lazy"
                        src="/assets/images/about/about-02.webp"
                        alt="About Image"
                      />
                      <button
                        onClick={() => setIsVideoOpen(true)}
                        className="popup-icon video-popup-activation border-0"
                      >
                        <i className="icon-18"></i>
                      </button>
                    </div>
                    <div className="loading-bar">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className="award-status bounce-slide">
                  <div className="inner">
                    <div className="icon">
                      <i className="icon-21"></i>
                    </div>
                    <div className="content">
                      <h6 className="title">29+</h6>
                      <span className="subtitle">Wonderful Awards</span>
                    </div>
                  </div>
                </div>
                <ul className="shape-group">
                  <motion.li
                    className="shape-1 scene"
                    data-sal-delay="500"
                    data-sal="fade"
                    data-sal-duration="200"
                    animate={{
                      x: mouseReverse(25).x,
                      y: mouseReverse(25).y,
                    }}
                  >
                    <img
                      loading="lazy"
                      src="/assets/images/about/shape-36.png"
                      alt="Shape"
                    />
                  </motion.li>
                  <motion.li
                    className="shape-2 scene"
                    data-sal-delay="500"
                    data-sal="fade"
                    data-sal-duration="200"
                    animate={{
                      x: mouseDirection(25).x,
                      y: mouseDirection(25).y,
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
                      x: mouseReverse(25).x,
                      y: mouseReverse(25).y,
                    }}
                  >
                    <img
                      loading="lazy"
                      src="/assets/images/about/shape-02.png"
                      alt="Shape"
                    />
                  </motion.li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-sal-delay="150"
              data-sal="slide-left"
              data-sal-duration="800"
            >
              <div className="about-content">
                <div className="section-title section-left">
                  <span className="pre-title">About Us</span>
                  <h2 className="title">
                    <span className="color-secondary">Empowering</span> Careers
                    with Industry-Relevant Skills
                  </h2>
                  <span className="shape-line">
                    <i className="icon-19"></i>
                  </span>
                  <p>
                    At LTE Academy, we empower individuals with
                    industry-relevant knowledge and skills to excel in today’s
                    competitive job market. Our training programs bridge the gap
                    between education and career success, covering Human
                    Resources, Logistics, Digital Marketing, and Software
                    sectors. With expert trainers, state-of-the-art
                    infrastructure, and a commitment to practical learning, we
                    equip students with real-world skills for local and global
                    opportunities.
                  </p>
                </div>
                <ul className="features-list">
                  {features_list.map((l, i) => (
                    <li key={i}>{l}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <ul className="shape-group">
            <motion.li
              className="shape-1 circle scene"
              data-sal-delay="500"
              data-sal="fade"
              data-sal-duration="200"
              animate={{
                x: mouseDirection(25).x,
                y: mouseDirection(25).y,
              }}
            >
              <span className="d-block"></span>
            </motion.li>
          </ul>
        </div>
      </div>

      {/* video modal start */}
      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId="PICj5tr9hcc"
      />
      {/* video modal end */}
    </>
  );
};

export default AboutArea;
