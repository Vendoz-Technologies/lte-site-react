import CourseStyleOneMain from "../../components/course-style-1";
import SEO from "../../components/seo";
import { Wrapper } from "../../layout";

const Courses = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Courses"} />
      <CourseStyleOneMain />
    </Wrapper>
  );
};

export default Courses;
