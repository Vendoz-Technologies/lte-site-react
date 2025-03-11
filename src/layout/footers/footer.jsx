import Link from "next/link";
import FooterSocial from "./component/footer-social";

const footer_contents = {
  logoLight: "/assets/images/logo/logo-dark.png",
  logoDark: "/assets/images/logo/logo-white.png",
  desc: "",
  add: "B-7, Alsa Samar, Plot 102, Basement Floor, 2nd Avenue, B-Block, Anna Nagar East, Chennai-600102",
  call: "+91 63822 62063",
  email: "contactus@lteacademy.in",
  widgets: [
    {
      col: "4",
      class: "explore-widget",
      widget_title: "Quick Links",
      footer_links: [
        { link: "about-us", title: "About Us" },
        { link: "courses", title: "Courses & Trianings" },
        { link: "faq", title: "FAQ's" },
        { link: "contact-us", title: "Contact Us" },
      ],
    },
  ],
};

const { logoDark, logoLight, desc, add, call, email, widgets } =
  footer_contents;

const Footer = ({ style_2, dark_bg, home_4 }) => {
  return (
    <footer
      className={`edu-footer ${
        style_2
          ? style_2
          : dark_bg
          ? "footer-dark bg-image footer-style-3"
          : "footer-lighten bg-image footer-style-1"
      }`}
    >
      <div className={`footer-top ${style_2 ? "footer-top-2" : ""}`}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <div className="edu-footer-widget">
                <div className="logo">
                  <Link href={"/"}>
                    {!dark_bg && (
                      <>
                        {!style_2 && (
                          <img
                            className="logo-light"
                            src={logoLight}
                            alt="Corporate Logo"
                          />
                        )}
                        <img
                          className="logo-dark"
                          src={logoDark}
                          alt="Corporate Logo"
                        />
                      </>
                    )}
                  </Link>

                  <Link href={"/"}>
                    {dark_bg && (
                      <img
                        className="logo-light"
                        src={
                          home_4
                            ? "/assets/images/logo/logo-white.png"
                            : "/assets/images/logo/logo-light-2.png"
                        }
                        alt="Corporate Logo"
                      />
                    )}
                  </Link>
                </div>

                <p className="description">{desc}</p>
              </div>
            </div>

            {widgets.map((w, i) => (
              <div key={i} className={`col-lg-${w.col} col-sm-6`}>
                <div className={`edu-footer-widget ${w.class}`}>
                  <h4 className="widget-title">{w.widget_title}</h4>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      {w.footer_links.map((l, i) => (
                        <li key={i}>
                          <Link href={`/${l.link}`}>{l.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-lg-4 col-md-6">
              <div className="edu-footer-widget">
                <h4 className="widget-title">Contacts</h4>
                <div className="inner">
                  <div className="widget-information mb-4">
                    <ul className="information-list">
                      <li>
                        <span>Address:</span>
                        {add}
                      </li>
                      <li>
                        <span>Call:</span>
                        <a href="tel:+916382262063">{call}</a>
                      </li>
                      <li>
                        <span>Email:</span>
                        <a
                          href="mailto:contactus@lteacademy.in"
                          rel="noreferrer"
                          target="_blank"
                        >
                          {email}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <ul className="social-share icon-transparent">
                    <FooterSocial />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner text-center">
                <p>
                  Copyright © {new Date().getFullYear()} LTE. All Rights
                  Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
