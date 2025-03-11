import React from "react";
import { Footer, Header } from "../../../layout";
import AboutArea from "./about-area";
import AdBanner from "./ad-banner";
import BlogArea from "./blog-area";
import CategoryArea from "./category-area";
import CounterUpArea from "./counter-up-area";
import CourseArea from "./course-area";
import CtaArea from "./cta-area";
import HeroArea from "./hero-area";
import TestimonialArea from "./testimonial-area";
import TopCategories from "./top-categories";

const index = () => {
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header />
        <HeroArea />
        <CategoryArea />
        <TopCategories />
        <AboutArea />
        <CourseArea />
        <CounterUpArea />
        {/* <TestimonialArea /> */}
        <CtaArea />
        <AdBanner />
        {/* <BlogArea /> */}
        <Footer />
      </div>
    </div>
  );
};

export default index;
