import { useRouter } from "next/router";
import React from "react";
import SEO from "../../components/seo";
import { course_data } from "../../data";
import { Wrapper } from "../../layout";
import CourseStyleOneMain from "../../components/course-style-1";

const DynamicCourseDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const course = course_data.find((item) => item.id === id);
  return (
    <Wrapper>
      <SEO pageTitle={"Courses"} />
      <CourseStyleOneMain />
    </Wrapper>
  );
};

export default DynamicCourseDetails;

export async function getStaticPaths() {
  const paths = course_data.map((course) => {
    return {
      params: {
        id: `${course.id}`,
      },
    };
  });
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
