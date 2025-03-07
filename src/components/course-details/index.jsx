import React from "react";
import { Footer, Header } from "../../layout";
import CourseBreadcrumb from "../breadcrumb/breadcrumb-5";
import CourseDetailsArea from "./course-details-area";

const CourseDetails = ({ course }) => {
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_top_bar={true} />
        <CourseBreadcrumb course={course} subtitle={course.title} />
        <CourseDetailsArea course={course} />
        <Footer />
      </div>
    </div>
  );
};

export default CourseDetails;
