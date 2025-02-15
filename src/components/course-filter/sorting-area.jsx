import Link from "next/link";
import React from "react";

const SortingArea = ({ num, course_list, items }) => {
  const handleChange = () => {};

  return (
    <div className="edu-sorting-area">
      <div className="sorting-left">
        {items ? (
          <h6 className="showing-text">
            Showing <span>{num}</span> of <span>{items.length}</span> courses
          </h6>
        ) : (
          <h6 className="showing-text">
            Showing <span>{num}</span> courses
          </h6>
        )}
      </div>
      <div className="sorting-right">
        <div className="layout-switcher">
          <label>{course_list ? "List" : "Grid"}</label>
          <ul className="switcher-btn">
            <li>
              <Link href="/courses" className={!course_list ? "active" : ""}>
                <i className="icon-53"></i>
              </Link>
            </li>
            <li>
              <Link
                href="/course-style-4"
                className={course_list ? "active" : ""}
              >
                <i className="icon-54"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="edu-sorting">
          <div className="icon">
            <i className="icon-55"></i>
          </div>
          <select onChange={handleChange} className="edu-select">
            <option>Filters</option>
            <option>Low To High</option>
            <option>High To Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortingArea;
