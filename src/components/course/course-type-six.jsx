import Link from "next/link";
import React from "react";

const CourseTypeSix = ({ course, classes }) => {
  return (
    <div className={`edu-course course-style-3 ${classes ? classes : ""}`}>
      <div className="inner">
        <div className="thumbnail">
          <Link href={`/courses/${course.id}`}>
            <img
              loading="lazy"
              src={`/assets/images/courses/${course.img}`}
              alt="Course Meta"
            />
          </Link>
          <div className="time-top">
            <span className="duration">
              <i className="icon-61"></i>
              {course.course_outline}
            </span>
          </div>
        </div>

        <div className="content">
          <span className="course-level">{course.level}</span>
          <h5 className="title">
            <Link href={`/courses/${course.id}`}>{course.title}</Link>
          </h5>
          <p>{course.short_desc}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseTypeSix;
