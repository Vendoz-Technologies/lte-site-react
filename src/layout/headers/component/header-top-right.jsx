import React from "react";

const social_share = [
  {
    link: "https://www.linkedin.com/company/lte-academy/",
    target: "_blank",
    icon: "icon-linkedin2",
  },
  {
    link: "https://www.facebook.com/people/LTE-Academy/61572397737594/",
    target: "_blank",
    icon: "icon-facebook",
  },
  {
    link: "https://www.instagram.com/lte.chennai/",
    target: "_blank",
    icon: "icon-instagram",
  },
  {
    link: "https://g.co/kgs/Fzum59F",
    target: "_blank",
    icon: "icon-google",
  },
];

const HeaderTopRight = () => {
  return (
    <ul className="header-info">
      {/* <li>
        <Link href="/sign-in">
          Login
        </Link>
      </li>
      <li>
        <Link href="/sign-in">
          Register
        </Link>
      </li> */}
      <li>
        <a href="tel:+916382262063">
          <i className="icon-phone"></i>Call: +91 638 226 2063
        </a>
      </li>
      <li>
        <a
          href="mailto:contactus@lteacademy.in"
          rel="noreferrer"
          target="_blank"
        >
          <i className="icon-envelope"></i>Email: contactus@lteacademy.in
        </a>
      </li>
      <li className="social-icon">
        {social_share.map((social, i) => (
          <a
            key={i}
            href={social.link}
            target={social.target ? social.target : ""}
            className={`${social.color}`}
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </li>
    </ul>
  );
};

export default HeaderTopRight;
