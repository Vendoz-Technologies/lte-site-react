import SEO from "../components/seo";
import { Wrapper } from "../layout";
import AboutOneMain from "../components/abouts/about-1";

const AboutOne = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"About Us"} />
      <AboutOneMain />
    </Wrapper>
  );
};

export default AboutOne;
