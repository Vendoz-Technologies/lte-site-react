import { toKebabCase } from "../utils/convertion-utils";

const course_data = [
  {
    img: "course-02.jpg",
    duration: "25 Hrs",
    course_outline: "Online & Onsite",
    level: "Intermediate",
    title: "Human Resource Training",
    rating: "4.7",
    rating_count: 20,
    course_price: "9,000",
    lesson: 8,
    student: 40,
    category: "Business & Management Training",
    short_desc:
      "Gain expertise in core HR functions such as recruitment, payroll management, labor law compliance, and HRMS software.",
    instructor: "Anita Sharma",
    instructor_img: "team-02.webp",
    instructor_title: "Senior HR Consultant & Trainer",
    instructor_desc:
      "With over 12 years of experience in HR consulting, specializes in talent acquisition, compliance, and HR technology implementation.",
    features: [
      "Recruitment & talent acquisition strategies",
      "Payroll processing & compensation planning",
      "Performance evaluation systems",
      "Labor law compliance & HR policies",
      "HRMS software setup & best practices",
      "Employee engagement & retention techniques",
    ],
    social_links: [
      { link: "http://facebook.com", target: "_blank", icon: "icon-facebook" },
      { link: "http://twitter.com", target: "_blank", icon: "icon-twitter" },
      {
        link: "https://www.linkedin.com/",
        target: "_blank",
        icon: "icon-linkedin2",
      },
      {
        link: "https://www.youtube.com/",
        target: "_blank",
        icon: "icon-youtube",
      },
    ],
    language: "English",
    certificate: "yes",
    videoId: "HRTraining123",
    course_desc:
      "Develop practical HR skills to manage recruitment, payroll, compliance, and employee relations effectively.",
    course_desc_2:
      "Hands-on training covering HR software, labor law policies, and real-world case studies for HR professionals.",
    learn_list: [
      "Streamline hiring processes with effective recruitment techniques",
      "Ensure payroll accuracy and compliance with financial regulations",
      "Implement performance management systems for employee growth",
      "Navigate labor laws and legal frameworks confidently",
      "Utilize HRMS software for efficient workforce management",
    ],
    course_desc_3:
      "Ideal for HR professionals and business managers looking to enhance their expertise in modern HR practices.",
  },
  {
    img: "course-03.jpg",
    duration: "30 Hrs",
    course_outline: "Online & Onsite",
    level: "Advanced",
    title: "Logistics Management Training",
    rating: "4.9",
    rating_count: 25,
    course_price: "10,500",
    lesson: 10,
    student: 50,
    category: "Business & Management Training",
    short_desc:
      "Master the principles of supply chain, warehouse management, and freight forwarding with a focus on automation and compliance.",
    instructor: "Michael Johnson",
    instructor_img: "team-03.webp",
    instructor_title: "Senior Logistics Consultant & Trainer",
    instructor_desc:
      "With over 15 years of experience in global logistics, specializes in supply chain optimization, automation, and international trade operations.",
    features: [
      "Supply chain management fundamentals",
      "Warehouse & inventory control techniques",
      "Freight forwarding & shipping operations",
      "Logistics technology & automation integration",
      "Customs procedures & international trade compliance",
      "Cost optimization & risk management strategies",
    ],
    social_links: [
      { link: "http://facebook.com", target: "_blank", icon: "icon-facebook" },
      { link: "http://twitter.com", target: "_blank", icon: "icon-twitter" },
      {
        link: "https://www.linkedin.com/",
        target: "_blank",
        icon: "icon-linkedin2",
      },
      {
        link: "https://www.youtube.com/",
        target: "_blank",
        icon: "icon-youtube",
      },
    ],
    language: "English",
    certificate: "yes",
    videoId: "LogisticsTraining456",
    course_desc:
      "Gain expertise in logistics management, covering supply chain fundamentals, warehouse operations, and customs compliance.",
    course_desc_2:
      "Hands-on training in logistics technology, international trade operations, and automation for efficiency.",
    learn_list: [
      "Optimize supply chain processes for efficiency and cost savings",
      "Manage warehouse operations and inventory control",
      "Understand freight forwarding and global shipping logistics",
      "Leverage automation and technology in logistics management",
      "Navigate customs clearance procedures and compliance standards",
    ],
    course_desc_3:
      "Ideal for logistics professionals, supply chain managers, and business owners looking to enhance operational efficiency.",
  },
  {
    img: "course-04.jpg",
    duration: "28 Hrs",
    course_outline: "Online & Onsite",
    level: "Intermediate",
    title: "Digital Marketing Training",
    rating: "4.8",
    rating_count: 30,
    course_price: "8,500",
    lesson: 9,
    student: 45,
    category: "Marketing & Digital Skills",
    short_desc:
      "Gain expertise in digital marketing strategies, including SEO, social media, content creation, and analytics to build high-performing campaigns.",
    instructor: "Samantha Lee",
    instructor_img: "team-04.webp",
    instructor_title: "Senior Digital Marketing Strategist",
    instructor_desc:
      "With over 10 years of experience in digital marketing, specializes in SEO, social media strategies, and performance analytics.",
    features: [
      "Search Engine Optimization (SEO) techniques",
      "Social media marketing strategies for Facebook, Instagram, and LinkedIn",
      "Effective content marketing & copywriting skills",
      "Email marketing automation & CRM best practices",
      "Google Analytics insights & digital advertising campaigns",
      "Conversion rate optimization & audience targeting",
    ],
    social_links: [
      { link: "http://facebook.com", target: "_blank", icon: "icon-facebook" },
      { link: "http://twitter.com", target: "_blank", icon: "icon-twitter" },
      {
        link: "https://www.linkedin.com/",
        target: "_blank",
        icon: "icon-linkedin2",
      },
      {
        link: "https://www.youtube.com/",
        target: "_blank",
        icon: "icon-youtube",
      },
    ],
    language: "English",
    certificate: "yes",
    videoId: "DigitalMarketing789",
    course_desc:
      "Learn to create data-driven digital marketing campaigns and optimize performance through analytics and automation.",
    course_desc_2:
      "Hands-on training covering SEO, content marketing, social media, and email strategies to drive engagement and conversions.",
    learn_list: [
      "Implement advanced SEO strategies to boost website rankings",
      "Develop targeted social media campaigns for brand growth",
      "Create compelling content and copywriting strategies",
      "Optimize email marketing funnels and CRM integrations",
      "Utilize Google Analytics to measure and improve campaign performance",
    ],
    course_desc_3:
      "Ideal for marketing professionals, business owners, and aspiring digital marketers looking to excel in the digital landscape.",
  },
  {
    img: "course-05.jpg",
    duration: "40 Hrs",
    course_outline: "Online & Onsite",
    level: "Advanced",
    title: "Software Training",
    rating: "4.9",
    rating_count: 40,
    course_price: "12,000",
    lesson: 12,
    student: 50,
    category: "Technology & Software Training",
    short_desc:
      "Learn full-stack development, cloud computing, cybersecurity, and mobile app development with hands-on coding skills and industry best practices.",
    instructor: "David Chen",
    instructor_img: "team-05.webp",
    instructor_title: "Lead Software Engineer & IT Trainer",
    instructor_desc:
      "With over 15 years of experience in software development, cloud computing, and cybersecurity, specializes in hands-on coding and enterprise solutions.",
    features: [
      "Full Stack Development covering Frontend & Backend",
      "Cloud Computing with AWS and Azure",
      "Database Management & SQL optimization",
      "Mobile App Development for Android & iOS",
      "Cybersecurity fundamentals & Ethical Hacking",
      "Hands-on coding sessions and real-world projects",
    ],
    social_links: [
      { link: "http://facebook.com", target: "_blank", icon: "icon-facebook" },
      { link: "http://twitter.com", target: "_blank", icon: "icon-twitter" },
      {
        link: "https://www.linkedin.com/",
        target: "_blank",
        icon: "icon-linkedin2",
      },
      {
        link: "https://www.youtube.com/",
        target: "_blank",
        icon: "icon-youtube",
      },
    ],
    language: "English",
    certificate: "yes",
    videoId: "SoftwareTraining101",
    course_desc:
      "Master the latest trends in software development, cloud computing, and security to become an industry-ready IT professional.",
    course_desc_2:
      "Practical training covering full-stack development, mobile app creation, cloud infrastructure, and security best practices.",
    learn_list: [
      "Develop dynamic full-stack web applications",
      "Deploy and manage cloud-based solutions with AWS & Azure",
      "Optimize databases and write efficient SQL queries",
      "Build and publish mobile apps for Android & iOS",
      "Implement cybersecurity measures and ethical hacking techniques",
    ],
    course_desc_3:
      "Perfect for aspiring software engineers, IT professionals, and developers looking to enhance their technical expertise.",
  },
  {
    img: "course-06.jpg",
    duration: "10 - 30 Hrs",
    course_outline: "Online & Onsite",
    level: "Intermediate",
    title: "Power BI Course",
    rating: "4.8",
    rating_count: 25,
    course_price: "5,999 - ₹24,999",
    lesson: 8,
    student: 40,
    category: "Data Analytics & Visualization",
    short_desc:
      "Master data visualization, dashboard creation, and data modeling with Microsoft Power BI to analyze and present data effectively.",
    instructor: "Anita Sharma",
    instructor_img: "team-06.webp",
    instructor_title: "Senior Data Analyst & Power BI Expert",
    instructor_desc:
      "With 12+ years of experience in data analytics, specializes in transforming complex data into actionable insights using Power BI.",
    features: [
      "Introduction to Power BI and its interface",
      "Data modeling and DAX functions",
      "Creating interactive dashboards",
      "Using Power BI Service and sharing reports",
      "Advanced data analysis techniques",
      "Real-world case studies and hands-on projects",
    ],
    social_links: [
      { link: "http://facebook.com", target: "_blank", icon: "icon-facebook" },
      { link: "http://twitter.com", target: "_blank", icon: "icon-twitter" },
      {
        link: "https://www.linkedin.com/",
        target: "_blank",
        icon: "icon-linkedin2",
      },
      {
        link: "https://www.youtube.com/",
        target: "_blank",
        icon: "icon-youtube",
      },
    ],
    language: "English",
    certificate: "yes",
    videoId: "PowerBI101",
    course_desc:
      "Learn to analyze and visualize data effectively with Microsoft Power BI, gaining hands-on experience in dashboard creation and data modeling.",
    course_desc_2:
      "Comprehensive training on Power BI tools, covering data connections, transformations, visualization techniques, and report sharing.",
    learn_list: [
      "Connect, clean, and transform data from multiple sources",
      "Create powerful and dynamic dashboards",
      "Use DAX functions for data modeling",
      "Share and collaborate on Power BI reports",
      "Perform advanced analytics for business insights",
    ],
    course_desc_3:
      "Ideal for data professionals, business analysts, and anyone looking to enhance their data visualization skills.",
  },
  {
    img: "course-07.jpg",
    duration: "10 - 30 Hrs",
    course_outline: "Online & Onsite",
    level: "Intermediate",
    title: "Tableau Course",
    rating: "4.8",
    rating_count: 22,
    course_price: "9,999 - ₹24,999",
    lesson: 7,
    student: 38,
    category: "Data Analytics & Visualization",
    short_desc:
      "Learn to create interactive visualizations and compelling data stories using Tableau to extract insights from complex datasets.",
    instructor: "Vikram Patel",
    instructor_img: "team-07.webp",
    instructor_title: "Senior Data Visualization Expert",
    instructor_desc:
      "With 10+ years of experience in data analytics, specializes in using Tableau to create impactful business insights.",
    features: [
      "Tableau basics and interface navigation",
      "Data connection and preparation techniques",
      "Building advanced dashboards",
      "Storytelling with data and visualization best practices",
      "Tableau Server and online sharing",
      "Hands-on projects and real-world applications",
    ],
    social_links: [
      { link: "http://facebook.com", target: "_blank", icon: "icon-facebook" },
      { link: "http://twitter.com", target: "_blank", icon: "icon-twitter" },
      {
        link: "https://www.linkedin.com/",
        target: "_blank",
        icon: "icon-linkedin2",
      },
      {
        link: "https://www.youtube.com/",
        target: "_blank",
        icon: "icon-youtube",
      },
    ],
    language: "English",
    certificate: "yes",
    videoId: "Tableau101",
    course_desc:
      "Develop expertise in data visualization using Tableau, from connecting and preparing data to building interactive dashboards and reports.",
    course_desc_2:
      "Gain hands-on experience in creating compelling data stories, leveraging Tableau’s powerful visualization capabilities for business insights.",
    learn_list: [
      "Navigate and use Tableau effectively",
      "Connect, clean, and prepare data",
      "Build interactive dashboards and reports",
      "Apply data storytelling techniques",
      "Share and publish reports using Tableau Server",
    ],
    course_desc_3:
      "Ideal for data analysts, business professionals, and anyone looking to improve their data visualization skills with Tableau.",
  },
  {
    img: "course-08.jpg",
    duration: "35 - 105 Hrs",
    course_outline: "Online & Onsite",
    level: "Beginner to Advanced",
    title: "Tally Course",
    rating: "4.7",
    rating_count: 30,
    course_price: "5,999 - ₹24,997",
    lesson: 10,
    student: 42,
    category: "Accounting & Finance",
    short_desc:
      "Understand accounting, inventory management, and GST compliance with Tally Prime. Designed for beginners and professionals looking to enhance their financial management skills.",
    instructor: "Amit Sharma",
    instructor_img: "team-08.webp",
    instructor_title: "Senior Accounting Trainer",
    instructor_desc:
      "With over 12 years of experience in financial management and taxation, specializes in Tally Prime and corporate accounting solutions.",
    features: [
      "Tally Prime basics and interface",
      "Accounting and ledger management",
      "Inventory control and GST compliance",
      "Financial reporting and analysis",
      "Payroll and taxation",
      "Hands-on case studies",
    ],
    social_links: [
      { link: "http://facebook.com", target: "_blank", icon: "icon-facebook" },
      { link: "http://twitter.com", target: "_blank", icon: "icon-twitter" },
      {
        link: "https://www.linkedin.com/",
        target: "_blank",
        icon: "icon-linkedin2",
      },
      {
        link: "https://www.youtube.com/",
        target: "_blank",
        icon: "icon-youtube",
      },
    ],
    language: "English",
    certificate: "yes",
    videoId: "TallyPrime101",
    course_desc:
      "Gain expertise in Tally Prime for managing accounting, GST, payroll, and inventory, with hands-on training across all three levels.",
    course_desc_2:
      "Develop practical skills in financial management, ledger accounting, and taxation compliance through structured lessons and real-world scenarios.",
    learn_list: [
      "Navigate and use Tally Prime effectively",
      "Manage accounting and ledger functions",
      "Control inventory and ensure GST compliance",
      "Generate financial reports and perform analysis",
      "Handle payroll and taxation processes",
    ],
    course_desc_3:
      "Ideal for students, business owners, and finance professionals looking to master Tally Prime for comprehensive accounting solutions.",
    pricing: [
      {
        level: "Level 1",
        duration: "35 Hrs",
        fee: "₹5,999",
        certification: "₹3,000",
      },
      {
        level: "Level 2",
        duration: "35 Hrs",
        fee: "₹7,999",
        certification: "₹3,000",
      },
      {
        level: "Level 3",
        duration: "35 Hrs",
        fee: "₹10,999",
        certification: "₹4,500",
      },
      {
        level: "All Levels",
        duration: "105 Hrs",
        fee: "₹24,997",
        certification: "₹5,000",
      },
    ],
  },
  {
    img: "course-09.jpg",
    duration: "10 to 40 Hrs",
    course_outline: "Online & Onsite",
    level: "Beginner to Expert",
    title: "Microsoft Office",
    rating: "4.8",
    rating_count: 150,
    course_price: "3,000 to ₹14,000",
    lesson: "Multiple Modules",
    student: 500,
    category: "IT & Software Training",
    short_desc:
      "Comprehensive training on Microsoft Office tools, including Word, Excel, PowerPoint, and certification programs.",
    instructor: "John Doe",
    instructor_img: "team-03.webp",
    instructor_title: "Certified Microsoft Office Trainer",
    instructor_desc:
      "With over 15 years of experience, specializes in Microsoft Office applications and productivity training.",
    features: [
      "Comprehensive Microsoft Office training",
      "Basic to advanced Excel and PowerPoint courses",
      "Official Microsoft Office Specialist (MOS) certification preparation",
      "Hands-on practice with real-world applications",
      "Expert-led training with certification support",
    ],
    social_links: [
      { link: "http://facebook.com", target: "_blank", icon: "icon-facebook" },
      { link: "http://twitter.com", target: "_blank", icon: "icon-twitter" },
      {
        link: "https://www.linkedin.com/",
        target: "_blank",
        icon: "icon-linkedin2",
      },
      {
        link: "https://www.youtube.com/",
        target: "_blank",
        icon: "icon-youtube",
      },
    ],
    language: "English",
    certificate: "yes",
    videoId: "MOS_Training123",
    course_desc:
      "Learn essential Microsoft Office skills from beginner to expert levels with hands-on training and MOS certification.",
    course_desc_2:
      "This program covers Microsoft Word, Excel, PowerPoint, and official MOS certification preparation.",
    learn_list: [
      "Master Word, Excel, and PowerPoint from basics to advanced",
      "Prepare for official Microsoft Office Specialist (MOS) certification",
      "Develop hands-on skills with real-world projects",
      "Understand advanced Excel formulas and data analysis",
      "Create professional presentations with PowerPoint",
    ],
    course_desc_3:
      "Ideal for students, professionals, and businesses looking to enhance their Microsoft Office expertise.",
    modules: {
      "Microsoft Office Basics": [
        { course_name: "Word + PowerPoint", duration: "10 Hrs", fee: "₹3,000" },
        { course_name: "Excel", duration: "10 Hrs", fee: "₹4,500" },
        {
          course_name: "Microsoft Office Basics",
          duration: "20 Hrs",
          fee: "₹7,500",
        },
      ],
      "Microsoft Office Advanced": [
        { course_name: "PowerPoint", duration: "5 Hrs", fee: "₹2,500" },
        { course_name: "Excel", duration: "15 Hrs", fee: "₹8,000" },
        {
          course_name: "Microsoft Office Advanced",
          duration: "20 Hrs",
          fee: "₹10,500",
        },
      ],
      "Microsoft Office - Basics + Advanced": [
        {
          course_name: "Microsoft Office Basics + Advanced",
          duration: "40 Hrs",
          fee: "₹20,000",
        },
      ],
      "Microsoft Office Specialist (MOS) Certification": {
        "MOS Associate": [
          { course_name: "Certification", fee: "100 USD + Tax" },
          {
            course_name: "Demo Exam (4 tests, ₹500 each)",
            fee: "₹2,000 + Tax",
          },
          { course_name: "MOS Associate Certification", fee: "₹12,390" },
        ],
        "MOS Expert": [
          { course_name: "Certification", fee: "120 USD + Tax" },
          {
            course_name: "Demo Exam (4 tests, ₹500 each)",
            fee: "₹2,000 + Tax",
          },
          { course_name: "MOS Expert Certification", fee: "₹14,390" },
        ],
        "MOS Certification Training": [
          {
            course_name: "Associate Level Training",
            duration: "6 Hrs",
            fee: "₹4,500",
          },
          {
            course_name: "Expert Level Training",
            duration: "10 Hrs",
            fee: "₹7,500",
          },
        ],
      },
    },
  },
  {
    img: "course-03.jpg",
    duration: "6 Months",
    course_outline: "Study & Internship",
    level: "All Levels",
    title: "Overseas Education Consultancy",
    rating: "4.8",
    rating_count: 35,
    course_price: "15,000",
    lesson: 10,
    student: 50,
    category: "Study Abroad & Career Training",
    short_desc:
      "Study and work abroad with a 6-month course and internship in Singapore, gaining international exposure and career opportunities.",
    instructor: "Dr. Rahul Mehta",
    instructor_img: "team-03.webp",
    instructor_title: "International Education Expert",
    instructor_desc:
      "Over 15 years of experience in global education consulting, guiding students in university admissions, visas, and career planning.",
    features: [
      "Admission Process & Application Support",
      "University Selection & Visa Guidance",
      "Internship Placement Assistance",
      "Cross-Cultural Training & Career Readiness",
      "Job Search & Resume Building",
    ],
    social_links: [
      { link: "http://facebook.com", target: "_blank", icon: "icon-facebook" },
      { link: "http://twitter.com", target: "_blank", icon: "icon-twitter" },
      {
        link: "https://www.linkedin.com/",
        target: "_blank",
        icon: "icon-linkedin2",
      },
      {
        link: "https://www.youtube.com/",
        target: "_blank",
        icon: "icon-youtube",
      },
    ],
    language: "English",
    certificate: "yes",
    videoId: "StudyAbroad101",
    course_desc:
      "Gain international education and work experience with a 6-month study and internship program in Singapore.",
    course_desc_2:
      "Comprehensive guidance on university admissions, visas, internships, and career growth in global job markets.",
    learn_list: [
      "Navigate the admission process and application procedures",
      "Choose the right university and secure student visas",
      "Gain hands-on experience through an international internship",
      "Adapt to cross-cultural environments for global career success",
      "Enhance job search and resume-building skills for future opportunities",
    ],
    course_desc_3:
      "Perfect for students and professionals looking to study abroad and gain valuable international work experience.",
  },
];

course_data.forEach((course) => {
  course.id = toKebabCase(course.title);
});

export default course_data;
