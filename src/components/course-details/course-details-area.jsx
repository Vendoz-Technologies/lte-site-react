import React from "react";
import CourseDetailsSidebar from "../common/sidebar/course-details-sidebar";

const CourseDetailsArea = ({ course }) => {
  const {
    course_desc,
    course_desc_2,
    learn_list,
    course_desc_3,
    curriculum_desc,
    course_lessons,
  } = course || {};
  return (
    <section className="edu-section-gap course-details-area">
      <div className="container">
        <div className="row row--30">
          <div className="col-lg-8">
            <div className="course-details-content">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="overview-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#overview"
                    type="button"
                    role="tab"
                    aria-controls="overview"
                    aria-selected="true"
                  >
                    Overview
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="carriculam-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#carriculam"
                    type="button"
                    role="tab"
                    aria-controls="carriculam"
                    aria-selected="false"
                  >
                    Carriculam
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="overview"
                  role="tabpanel"
                  aria-labelledby="overview-tab"
                >
                  <div className="course-tab-content">
                    <div className="course-overview">
                      <h3 className="heading-title">Course Description</h3>
                      <p>{course_desc}</p>
                      <p className="mb--60">{course_desc_2}</p>
                      <h5 className="title">What You’ll Learn?</h5>
                      <ul className="mb--60">
                        {learn_list?.map((l, i) => (
                          <li key={i}>{l}</li>
                        ))}
                      </ul>
                      <p>{course_desc_3}</p>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="carriculam"
                  role="tabpanel"
                  aria-labelledby="carriculam-tab"
                >
                  <div className="course-tab-content">
                    <div className="course-curriculam">
                      <h3 className="heading-title">Course Curriculum</h3>
                      <p>{curriculum_desc}</p>
                      {course_lessons.map((lesson, i) => (
                        <div key={i} className="course-lesson">
                          {lesson?.title && (
                            <h5 className="title">{lesson?.title}</h5>
                          )}
                          {lesson?.text && <p>{lesson?.text}</p>}
                          <ul>
                            {lesson?.lessons?.map((list, i) => (
                              <li key={i}>
                                {list.title && (
                                  <div className="text">
                                    <i className="icon-65"></i>
                                    {list.title}
                                  </div>
                                )}

                                {!list?.badge_list && (
                                  <div className="icon">
                                    <i className={list?.icon}></i>
                                  </div>
                                )}

                                {list?.badge_list && (
                                  <div className="badge-list">
                                    <span className="badge badge-primary">
                                      {list?.question} Question
                                    </span>
                                    <span className="badge badge-secondary">
                                      {list?.minutes} Minutes
                                    </span>
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <CourseDetailsSidebar course={course} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsArea;
