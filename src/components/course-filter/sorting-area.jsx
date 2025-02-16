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
        <div className="edu-sorting">
          <div className="icon">
            <i className="icon-55"></i>
          </div>
          <select onChange={handleChange} className="edu-select">
            <option value="" selected>
              Sort
            </option>
            <option>Low To High</option>
            <option>High To Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortingArea;
