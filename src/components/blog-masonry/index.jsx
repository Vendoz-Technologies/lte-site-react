import React from "react";
import { Footer, Header } from "../../layout";
import BreadcrumbThree from "../breadcrumb/breadcrumb-3";
import AdBanner from "../homes/home/ad-banner";
import BlogMasonryArea from "./blog-masonry-area";

const index = () => {
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_top_bar={true} />
        <BreadcrumbThree title="Blogs / Resources" subtitle="Blogs" />
        <BlogMasonryArea />
        <AdBanner />
        <Footer />
      </div>
    </div>
  );
};

export default index;
