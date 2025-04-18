import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useMouseMoveUI } from "../../contexts/mouse-move-context";

const CourseBreadcrumb = ({ course, subtitle }) => {
  const { title, instructor, language, rating_count, level } = course || {};
  const { mouseDirection, mouseReverse } = useMouseMoveUI();
  return (
    <div className="edu-breadcrumb-area breadcrumb-style-3">
      <div className="container">
        <div className="breadcrumb-inner">
          <ul className="edu-breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="separator">
              <i className="icon-angle-right"></i>
            </li>
            <li className="breadcrumb-item">
              <Link href="/courses">Courses</Link>
            </li>
            <li className="separator">
              <i className="icon-angle-right"></i>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {subtitle}
            </li>
          </ul>
          <div className="page-title">
            <h1 className="title">{title}</h1>
          </div>
          <ul className="course-meta">
            <li>
              <span className="course-level">{level}</span>
            </li>
          </ul>
        </div>
      </div>
      <ul className="shape-group">
        <li className="shape-1">
          <span></span>
        </li>
        <motion.li
          className="shape-2 scene"
          animate={{
            x: mouseReverse(40).x,
            y: mouseReverse(40).y,
          }}
        >
          <img
            loading="lazy"
            src="/assets/images/about/shape-13.png"
            alt="shape"
          />
        </motion.li>
        <motion.li
          className="shape-3 scene"
          animate={{
            x: mouseDirection(40).x,
            y: mouseDirection(40).y,
          }}
        >
          <img
            loading="lazy"
            src="/assets/images/about/shape-15.png"
            alt="shape"
          />
        </motion.li>
        <li className="shape-4">
          <span></span>
        </li>
        <motion.li
          className="shape-5 scene"
          animate={{
            x: mouseReverse(40).x,
            y: mouseReverse(40).y,
          }}
        >
          <img
            loading="lazy"
            src="/assets/images/about/shape-07.png"
            alt="shape"
          />
        </motion.li>
      </ul>
    </div>
  );
};

export default CourseBreadcrumb;
