import { toKebabCase } from "../../utils/convertion-utils";

const menu_data = [
  {
    title: "About Us",
    link: "/about-us",
    mega_menu: false,
  },
  {
    title: "Courses & Trainings",
    link: "/courses",
    mega_menu: true,
    submenus: [
      {
        title: "Professional Training",
        mega_submenu: [
          {
            title: "HR Training",
            link: `/courses/${toKebabCase("HR Training")}`,
          },
          {
            title: "Logistics Management Training",
            link: `/courses/${toKebabCase("Logistics Management Training")}`,
            new: true,
          },
          {
            title: "Digital Marketing Training",
            link: `/courses/${toKebabCase("Digital Marketing Training")}`,
          },
          {
            title: "Software Training",
            link: `#`,
            hot: true,
            submenus: [
              {
                title: "Programming Languages",
                link: `/courses/${toKebabCase("Programming Training")}`,
              },
              {
                title: "Accounting",
                link: `/courses/${toKebabCase("Accounting")}`,
              },
              {
                title: "Data Analytics",
                link: `/courses/${toKebabCase("Data Analytics")}`,
              },
              {
                title: "Microsoft Office Training",
                link: `/courses/${toKebabCase("Microsoft Office Training")}`,
              },
              {
                title: "Microsoft Office Specialist",
                link: `/courses/${toKebabCase("Microsoft Office Specialist")}`,
              },
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
            link: `/courses/${toKebabCase("Singapore Programs")}`,
            hot: true,
          },
        ],
      },
    ],
  },
  {
    title: "Blogs / Resources",
    link: "/blogs",
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
