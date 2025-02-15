import { toKebabCase } from "../../utils/convertion-utils";

const courses = [
  "Human Resource Training",
  "Logistics Management Training",
  "Digital Marketing Training",
  "Software Training",
  "Power BI Course",
  "Tableau Course",
  "Tally Course",
  "Microsoft Office",
  "Overseas Education Consultancy",
];

const menu_data = [
  {
    title: "Courses & Trainings",
    link: "#",
    submenus: courses.map((course) => ({
      title: course,
      link: `/course-details/${toKebabCase(course)}`,
    })),
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
