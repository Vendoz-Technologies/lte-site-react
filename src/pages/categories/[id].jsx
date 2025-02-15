import { useRouter } from "next/router";
import React from "react";
import CourseStyleOneMain from "../../components/course-style-1";
import SEO from "../../components/seo";
import { course_data } from "../../data";
import { Wrapper } from "../../layout";
import { toKebabCase } from "../../utils/convertion-utils";

const DynamicCourseDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const course = course_data.find((item) => toKebabCase(item.category) === id);
  return (
    <Wrapper>
      <SEO pageTitle={course.category} />
      <CourseStyleOneMain
        title={course.category}
        subTitle={` ${course.category}`}
      />
    </Wrapper>
  );
};

export default DynamicCourseDetails;

export async function getStaticPaths() {
  const paths = course_data.map((course) => {
    return {
      params: {
        id: `${toKebabCase(course.category)}`,
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
