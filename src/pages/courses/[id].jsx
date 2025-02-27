import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BreadcrumbTwo from "../../components/breadcrumb/breadcrumb-2";
import CourseDetails from "../../components/course-details";
import CourseTypeSix from "../../components/course/course-type-six";
import SEO from "../../components/seo";
import { course_data } from "../../data";
import { Footer, Header, Wrapper } from "../../layout";
import { toKebabCase } from "../../utils/convertion-utils";

const CourseCategories = ({ courses, category }) => (
  <div className="sticky-header">
    <div id="main-wrapper" className="main-wrapper">
      <Header no_top_bar={true} />
      <BreadcrumbTwo subtitle={category} />
      <div className="edu-course-area course-area-1 gap-tb-text">
        <div className="container">
          <div className="row g-5">
            {courses?.map((course) => (
              <div key={course.id} className="col-md-6 col-lg-4">
                <CourseTypeSix course={course} classes="course-box-shadow" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
);

const DynamicCourseDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [currentId, setCurrentId] = useState(id);

  useEffect(() => {
    setCurrentId(id);
  }, [id]);

  const course = course_data.find((item) => item.id === currentId);

  if (course?.title) {
    return (
      <Wrapper key={currentId}>
        <SEO pageTitle={course.title} />
        <CourseDetails course={course} />
      </Wrapper>
    );
  }

  const categoryCourses = course_data.filter(
    (item) => toKebabCase(item.category) === currentId
  );

  if (categoryCourses.length) {
    return (
      <Wrapper key={currentId}>
        <CourseCategories
          courses={categoryCourses}
          category={categoryCourses[0].category}
        />
      </Wrapper>
    );
  }

  const menuCategoryCourses = course_data.filter(
    (item) => toKebabCase(item.menu_category) === currentId
  );

  if (menuCategoryCourses.length) {
    return (
      <Wrapper key={currentId}>
        <CourseCategories
          courses={menuCategoryCourses}
          category={menuCategoryCourses[0].menu_category}
        />
      </Wrapper>
    );
  }

  return <div>Course not found</div>;
};

export default DynamicCourseDetails;

export async function getStaticPaths() {
  const paths = course_data.flatMap((course) => [
    { params: { id: `${course.id}` } },
    { params: { id: toKebabCase(course.category) } },
    { params: { id: toKebabCase(course.menu_category) } },
  ]);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
