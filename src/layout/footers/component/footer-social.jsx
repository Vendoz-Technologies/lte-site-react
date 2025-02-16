const social_share = [
  {
    link: "https://www.linkedin.com/company/lte-academy/",
    target: "_blank",
    icon: "icon-linkedin2",
    color: "color-linkd",
  },
  {
    link: "https://www.facebook.com/people/LTE-Academy/61572397737594/",
    target: "_blank",
    icon: "icon-facebook",
    color: "color-fb",
  },
  {
    link: "https://www.instagram.com/lte.chennai/",
    target: "_blank",
    icon: "icon-instagram",
    color: "color-ig",
  },
];

import React from "react";

const FooterSocial = () => {
  return (
    <>
      {social_share.map((social, i) => (
        <li key={i}>
          <a
            href={social.link}
            target={social.target ? social.target : ""}
            className={`${social.color}`}
          >
            <i className={social.icon}></i>
          </a>
        </li>
      ))}
    </>
  );
};

export default FooterSocial;
