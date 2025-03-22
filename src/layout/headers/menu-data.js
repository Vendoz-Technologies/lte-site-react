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
    // mega_menu: true,
    // submenus: [
    //   {
    //     title: "Professional Training",
    //     mega_submenu: [
    //       {
    //         title: "Human Resource Training",
    //         link: `/courses/${toKebabCase("Human Resource Training")}`,
    //       },
    //       {
    //         title: "Logistics Management Training",
    //         link: `/courses/${toKebabCase("Logistics Management Training")}`,
    //         new: true,
    //       },
    //       {
    //         title: "Digital Marketing Training",
    //         link: `/courses/${toKebabCase("Digital Marketing Training")}`,
    //       },
    //       {
    //         title: "Technology Training",
    //         link: `#`,
    //         hot: true,
    //         submenus: [
    //           {
    //             title: "Software Development",
    //             link: `/courses/${toKebabCase("Software Development")}`,
    //             submenus: [
    //               {
    //                 title: "Full Stack Development",
    //                 link: `/courses/${toKebabCase("Full Stack Development")}`,
    //               },
    //               {
    //                 title: "Cloud Computing",
    //                 link: `/courses/${toKebabCase("Cloud Computing")}`,
    //               },
    //               {
    //                 title: "Database Management",
    //                 link: `/courses/${toKebabCase("Database Management")}`,
    //               },
    //               {
    //                 title: "Mobile App Development",
    //                 link: `/courses/${toKebabCase("Mobile App Development")}`,
    //               },
    //               {
    //                 title: "Cybersecurity & Ethical Hacking",
    //                 link: `/courses/${toKebabCase(
    //                   "Cybersecurity & Ethical Hacking"
    //                 )}`,
    //               },
    //             ],
    //           },
    //           {
    //             title: "Accounting",
    //             link: `/courses/${toKebabCase("Accounting")}`,
    //             submenus: [
    //               {
    //                 title: "Tally Level 1",
    //                 link: `/courses/${toKebabCase("Tally Level 1")}`,
    //               },
    //               {
    //                 title: "Tally Level 2",
    //                 link: `/courses/${toKebabCase("Tally Level 2")}`,
    //               },
    //               {
    //                 title: "Tally Level 3",
    //                 link: `/courses/${toKebabCase("Tally Level 3")}`,
    //               },
    //             ],
    //           },
    //           {
    //             title: "Data Analytics",
    //             link: `/courses/${toKebabCase("Data Analytics")}`,
    //             submenus: [
    //               {
    //                 title: "Tableau",
    //                 link: `/courses/${toKebabCase("Tableau")}`,
    //               },
    //               {
    //                 title: "Power BI",
    //                 link: `/courses/${toKebabCase("Power BI")}`,
    //               },
    //             ],
    //           },
    //           {
    //             title: "Microsoft Office Training",
    //             link: `/courses/${toKebabCase("Microsoft Office Training")}`,
    //             submenus: [
    //               {
    //                 title: "Microsoft Excel",
    //                 link: `/courses/${toKebabCase("Microsoft Excel")}`,
    //               },
    //               {
    //                 title: "Microsoft Word",
    //                 link: `/courses/${toKebabCase("Microsoft Word")}`,
    //               },
    //               {
    //                 title: "Microsoft PowerPoint",
    //                 link: `/courses/${toKebabCase("Microsoft PowerPoint")}`,
    //               },
    //             ],
    //           },
    //           {
    //             title: "Microsoft Office Specialist",
    //             link: `/courses/${toKebabCase("Microsoft Office Specialist")}`,
    //             submenus: [
    //               {
    //                 title: "MOS Excel",
    //                 link: `/courses/microsoft-office-specialist-excel`,
    //               },
    //               {
    //                 title: "MOS Word",
    //                 link: `/courses/microsoft-office-specialist-word`,
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     title: "Overseas Education and Training",
    //     mega_submenu: [
    //       {
    //         title: "Singapore Programs",
    //         description: "6-month Study and 6-month Internship Programs",
    //         link: `/courses/${toKebabCase("Singapore Programs")}`,
    //         hot: true,
    //       },
    //     ],
    //   },
    // ],
    submenus: [
      {
        title: "Accounting",
        link: `/courses/${toKebabCase("Accounting")}`,
        submenus: [
          {
            title: "Tally Level 1",
            link: `/courses/${toKebabCase("Tally Level 1")}`,
          },
          {
            title: "Tally Level 2",
            link: `/courses/${toKebabCase("Tally Level 2")}`,
          },
          {
            title: "Tally Level 3",
            link: `/courses/${toKebabCase("Tally Level 3")}`,
          },
        ],
      },
      {
        title: "Data Analytics",
        link: `/courses/${toKebabCase("Data Analytics")}`,
        submenus: [
          {
            title: "Python",
            link: `/courses/${toKebabCase("Python")}`,
          },
          {
            title: "R Programming",
            link: `/courses/${toKebabCase("R Programming")}`,
          },
          {
            title: "SQL Server",
            link: `/courses/${toKebabCase("SQL Server")}`,
          },
          {
            title: "Tableau",
            link: `/courses/${toKebabCase("Tableau")}`,
          },
          {
            title: "Power BI",
            link: `/courses/${toKebabCase("Power BI")}`,
          },
        ],
      },
      {
        title: "Microsoft Office Training",
        link: `/courses/${toKebabCase("Microsoft Office Training")}`,
        submenus: [
          {
            title: "Microsoft Excel",
            link: `/courses/${toKebabCase("Microsoft Excel")}`,
          },
          {
            title: "Microsoft Word",
            link: `/courses/${toKebabCase("Microsoft Word")}`,
          },
          {
            title: "Microsoft PowerPoint",
            link: `/courses/${toKebabCase("Microsoft PowerPoint")}`,
          },
        ],
      },
      {
        title: "Microsoft Office Specialist",
        link: `/courses/${toKebabCase("Microsoft Office Specialist")}`,
        submenus: [
          {
            title: "MOS Excel",
            link: `/courses/microsoft-office-specialist-excel`,
          },
          {
            title: "MOS Word",
            link: `/courses/microsoft-office-specialist-word`,
          },
        ],
      },
    ],
  },
  // {
  //   title: "Blogs / Resources",
  //   link: "/blogs",
  //   mega_menu: false,
  // },
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
