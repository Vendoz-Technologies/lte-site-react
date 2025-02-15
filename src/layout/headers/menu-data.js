import { toKebabCase } from "../../utils/convertion-utils";

const menu_data = [
  {
    title: "About Us",
    link: "/about-us",
    mega_menu: false,
  },
  {
    title: "Courses & Trainings",
    link: "#",
    mega_menu: true,
    submenus: [
      {
        title: "Professional Training",
        mega_submenu: [
          { title: "HR Training", link: "/about-1" },
          {
            title: "Logistics Management Training",
            link: "/about-2",
            new: true,
          },
          { title: "Digital Marketing Training", link: "/about-3" },
          {
            title: "Software Training",
            link: "/team-1",
            hot: true,
            submenus: [
              { title: "Programming Languages", link: "/about-3" },
              { title: "Accounting", link: "" },
              { title: "Data Analytics", link: "" },
              { title: "Business Tools", link: "" },
            ],
          },
        ],
      },
      {
        title: "Overseas Education and Training",
        mega_submenu: [
          {
            title: "Singapore Programs",
            description: "6-month Study and 6-month Internship Programs",
            link: `/courses/${toKebabCase(
              "Overseas Education and Training"
            )}/${toKebabCase("Singapore Programs")}`,
            hot: true,
          },
        ],
      },
    ],
  },
  {
    title: "Blogs / Resources",
    link: "/blog",
    mega_menu: false,
  },
  {
    title: "FAQ",
    link: "/faq",
    mega_menu: false,
  },
  {
    title: "Contact Us",
    link: "/contact-us",
    mega_menu: false,
  },
];

export default menu_data;
