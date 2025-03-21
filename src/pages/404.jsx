import Link from "next/link";
import BreadcrumbThree from "../components/breadcrumb/breadcrumb-3";
import SEO from "../components/seo";
import { Footer, Header, Wrapper } from "../layout";
import { motion } from "framer-motion";
import { useMouseMoveUI } from "../contexts/mouse-move-context";

const ErrorPage = () => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI();
  return (
    <Wrapper>
      <SEO pageTitle={"404 | Page Not Found"} />
      <Header no_top_bar={true} />
      <BreadcrumbThree title="Page Not Found" subtitle="Page Not Found" />
      <section className="section-gap-equal error-page-area">
        <div className="container">
          <div className="edu-error">
            <div className="thumbnail">
              <img
                loading="lazy"
                src="/assets/images/others/404.png"
                alt="404 Error"
              />
              <ul className="shape-group">
                <motion.li
                  className="shape-1 scene"
                  animate={{
                    x: mouseReverse(30).x,
                    y: mouseReverse(30).y,
                  }}
                >
                  <img
                    loading="lazy"
                    src="/assets/images/about/shape-25.png"
                    alt="Shape"
                  />
                </motion.li>
                <motion.li
                  className="shape-2 scene"
                  animate={{
                    x: mouseDirection(30).x,
                    y: mouseDirection(30).y,
                  }}
                >
                  <img
                    loading="lazy"
                    src="/assets/images/about/shape-15.png"
                    alt="Shape"
                  />
                </motion.li>
                <motion.li
                  className="shape-3 scene"
                  animate={{
                    x: mouseReverse(30).x,
                    y: mouseReverse(30).y,
                  }}
                >
                  <img
                    loading="lazy"
                    src="/assets/images/about/shape-13.png"
                    alt="Shape"
                  />
                </motion.li>
                <motion.li
                  className="shape-4 scene"
                  animate={{
                    x: mouseDirection(30).x,
                    y: mouseDirection(30).y,
                  }}
                >
                  <img
                    loading="lazy"
                    src="/assets/images/counterup/shape-02.png"
                    alt="Shape"
                  />
                </motion.li>
              </ul>
            </div>
            <div className="content">
              <h2 className="title">404 - Page Not Found</h2>
              <h4 className="subtitle">
                The page you are looking for does not exist.
              </h4>
              <Link href="/" className="edu-btn">
                <i className="icon-west"></i>Back to Homepage
              </Link>
            </div>
          </div>
        </div>
        <ul className="shape-group">
          <li className="shape-1">
            <img
              loading="lazy"
              src="/assets/images/others/map-shape-2.png"
              alt="Shape"
            />
          </li>
        </ul>
      </section>
      <Footer />
    </Wrapper>
  );
};

export default ErrorPage;
