import Link from "next/link";
import React from "react";
import useModal from "../../../hooks/use-modal";
import VideoModal from "../popup-modal/video-modal";

const CourseDetailsSidebar = ({ course, details_2 = false }) => {
  const { img, certificate, videoId, course_price, duration, level, language } =
    course || {};
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <div
        className={`course-sidebar-3 ${
          details_2 ? "" : "sidebar-top-position"
        }`}
      >
        <div className="edu-course-widget widget-course-summery">
          <div className="inner">
            <div className="thumbnail">
              <img
                loading="lazy"
                src={`/assets/images/courses/${img}`}
                alt="Course Thumb"
              />
              <a
                onClick={() => setIsVideoOpen(true)}
                style={{ cursor: "pointer" }}
                className="play-btn video-popup-activation"
              >
                <i className="icon-18"></i>
              </a>
            </div>
            <div className="content">
              <h4 className="widget-title">Course Includes:</h4>
              <ul className="course-item">
                <li>
                  <span className="label">
                    <i className="icon-60"></i>Price:
                  </span>
                  <span className="value price">{course_price}</span>
                </li>

                <li>
                  <span className="label">
                    <i className="icon-61"></i>Duration:
                  </span>
                  <span className="value">{duration}</span>
                </li>

                <li>
                  <span className="label">
                    <i className="icon-59"></i>Language:
                  </span>
                  <span className="value">{language}</span>
                </li>

                <li>
                  <span className="label">
                    <i className="icon-59"></i>Course Level:
                  </span>
                  <span className="value">{level}</span>
                </li>

                <li>
                  <span className="label">
                    <i className="icon-64"></i>Certificate:
                  </span>
                  <span className="value price">{certificate}</span>
                </li>
              </ul>

              <div className="read-more-btn">
                <Link href="/contact-us" className="edu-btn">
                  Start Now <i className="icon-4"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={videoId}
      />
      {/* video modal end */}
    </>
  );
};

export default CourseDetailsSidebar;
