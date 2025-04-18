import React from "react";
import { Footer, Header } from "../../layout";
import BreadcrumbThree from "../breadcrumb/breadcrumb-3";
import FaqArea from "./faq-area";

const index = ({ team }) => {
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_top_bar={true} />
        <BreadcrumbThree
          title="Frequently Asked Questions"
          subtitle="Frequently Asked Questions"
        />
        <FaqArea />
        <Footer />
      </div>
    </div>
  );
};

export default index;
