import React from "react";
import { Footer, Header } from "../../layout";
import BreadcrumbThree from "../breadcrumb/breadcrumb-3";
import CourseArea from "./course-1-area";

const index = ({ title = "Courses & Trainings", subTitle = "Courses" }) => {
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_top_bar={true} />
        <BreadcrumbThree title={title} subtitle={subTitle} />
        <CourseArea />
        <Footer />
      </div>
    </div>
  );
};

export default index;
