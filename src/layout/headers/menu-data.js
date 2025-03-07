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
            title: "Human Resource Training",
            link: `/courses/${toKebabCase("Human Resource Training")}`,
          },
          {
            title: "Logistics Management Training",
            link: `/courses`,
            new: true,
          },
          {
            title: "Digital Marketing Training",
            link: `/courses`,
          },
          {
            title: "Technology Training",
            link: `#`,
            hot: true,
            submenus: [
              {
                title: "Software Development",
                link: `/courses/${toKebabCase("Software Development")}`,
              },
              {
                title: "Accounting",
                link: `/courses`,
              },
              {
                title: "Data Analytics",
                link: `/courses`,
              },
              {
                title: "Microsoft Office Training",
                link: `/courses`,
              },
              {
                title: "Microsoft Office Specialist",
                link: `/courses`,
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
            link: `/courses`,
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
