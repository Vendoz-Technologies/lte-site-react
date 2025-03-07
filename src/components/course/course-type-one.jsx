import Link from "next/link";
import React from "react";

const CourseTypeOne = ({ data, classes, image_location_path = "01" }) => {
  return (
    <div
      className={`edu-course course-style-1 ${
        classes ? classes : ""
      } hover-button-bg-white cursor-pointer`}
    >
      <div className="inner">
        <div className="thumbnail">
          <Link href={`/courses/${data.id}`}>
            <img src={`/assets/images/courses/${data.img}`} alt="Course Meta" />
          </Link>
          <div className="time-top">
            <span className="duration">
              <i className="icon-61"></i>
              {data.duration}
            </span>
          </div>
        </div>
        <div className="content">
          <span className="course-level">{data.level}</span>
          <h6 className="title">
            <a href="#">{data.title}</a>
          </h6>
          <div className="course-price">{data.course_price}</div>
          <ul className="course-meta">
            <li>
              <i className="icon-24"></i>
              {data.duration}
            </li>
          </ul>
        </div>
      </div>

      <div className="course-hover-content-wrapper"></div>

      <div className="course-hover-content">
        <div className="content">
          <span className="course-level">{data.level}</span>
          <h6 className="title">
            <Link href={`/courses/${data.id}`}>{data.title}</Link>
          </h6>
          <div className="course-price">{data.course_price}</div>
          <p>{data.short_desc}</p>
          <ul className="course-meta">
            <li>
              <i className="icon-24"></i>
              {data.duration}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseTypeOne;
