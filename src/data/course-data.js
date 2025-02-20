import { toKebabCase } from "../utils/convertion-utils";

const course_data = [
  {
    img: "course-09.jpg",
    duration: "35 Hours",
    course_outline: "Onsite",
    level: "Level 1",
    title: "Tally",
    rating: "",
    rating_count: 0,
    course_price: "₹ 5,999",
    student: 0,
    category: "Accounting",
    short_desc:
      "Learn the fundamentals of accounting and financial management using Tally Prime, the industry-standard accounting software.",
    features: [],
    language: "English",
    certificate: "₹ 3,000",
    videoId: "MOS_Training123",
    course_desc:
      "This course is designed for beginners who want to gain a strong foundation in accounting and financial management using Tally Prime. You will learn how to record transactions, manage company accounts, and generate financial reports.",
    course_desc_2:
      "By the end of this course, you will be proficient in using Tally Prime for business accounting, tax compliance, and financial reporting. This course is ideal for students, business owners, and aspiring accountants.",
    learn_list: [
      "Understand the fundamentals of accounting and bookkeeping",
      "Navigate and use Tally Prime for business accounting",
      "Create and manage a Chart of Accounts (COA)",
      "Record and maintain accounting transactions accurately",
      "Perform banking operations within Tally Prime",
      "Generate financial statements and management reports",
      "Ensure data security and effective company data management",
      "Handle Goods and Services Tax (GST) compliance in Tally",
    ],
    course_desc_3:
      "This course will equip you with practical accounting skills using Tally Prime, helping you manage financial transactions efficiently and stay compliant with taxation regulations.",
    course_lessons: [
      {
        title: "Level 1 - Tally Basic Essentials",
        text: "Learn the fundamentals of accounting and how to use Tally Prime for financial management and reporting.",
        lessons: [
          { title: "Fundamental of Accounting" },
          { title: "Introduction to Tally Prime" },
          { title: "Maintaining COA - Chart of Accounting" },
          { title: "Recording and Maintaining Accounting Transactions" },
          { title: "Banking in Tally Prime" },
          { title: "Generating Financial Statement and MIS Reporting" },
          { title: "Data Securities" },
          { title: "Company Data Management" },
          { title: "Goods and Services Tax" },
        ],
      },
    ],
  },
  {
    img: "course-09.jpg",
    duration: "35 Hours",
    course_outline: "Onsite",
    level: "Level 2",
    title: "Tally",
    rating: "",
    rating_count: 0,
    course_price: "₹ 7,999",
    student: 0,
    category: "Accounting",
    short_desc:
      "Enhance your expertise in Tally with advanced accounting and inventory management techniques for business operations.",
    features: [],
    language: "English",
    certificate: "₹ 3,000",
    videoId: "MOS_Training123",
    course_desc:
      "This advanced course is designed for individuals looking to master Tally ERP 9 for business accounting and inventory management. Learn about financial reporting, cost tracking, stock management, and automation techniques.",
    course_desc_2:
      "By the end of this course, you will be proficient in handling advanced accounting functions, inventory tracking, and financial reporting in Tally ERP 9, making you industry-ready for real-world applications.",
    learn_list: [
      "Master advanced accounting concepts in Tally ERP 9",
      "Understand financial reporting and cost tracking",
      "Manage advanced inventory and stock control",
      "Automate accounting processes for efficiency",
      "Utilize technical concepts to optimize Tally operations",
      "Ensure tax compliance and data security",
      "Generate comprehensive MIS and business reports",
    ],
    course_desc_3:
      "This course provides hands-on training in advanced Tally ERP 9 functionalities, equipping you with the skills needed to streamline business accounting and inventory processes effectively.",
    course_lessons: [
      {
        title: "Level 2 - Advanced Accounting & Inventory",
        text: "Deep dive into advanced accounting and inventory management concepts in Tally ERP 9.",
        lessons: [
          { title: "Advanced Accounting Concepts in Tally ERP 9" },
          { title: "Advanced Inventory Concepts in Tally ERP 9" },
          { title: "Technical Concepts of Tally ERP 9" },
        ],
      },
    ],
  },
  {
    img: "course-09.jpg",
    duration: "35 Hours",
    course_outline: "Onsite",
    level: "Level 3",
    title: "Tally",
    rating: "",
    rating_count: 0,
    course_price: "₹ 10,999",
    student: 0,
    category: "Accounting",
    short_desc:
      "Become proficient in statutory compliance, taxation, and payroll management using Tally ERP 9.",
    features: [],
    language: "English",
    certificate: "₹ 4,500",
    videoId: "MOS_Training123",
    course_desc:
      "This course is designed to help professionals master statutory compliance and taxation in Tally ERP 9. Learn how to handle GST, VAT, TDS, and payroll processing for business operations.",
    course_desc_2:
      "By completing this course, you will gain expertise in managing taxation, generating tax reports, ensuring compliance, and handling payroll efficiently within Tally ERP 9.",
    learn_list: [
      "Understand payroll processing, including master creation and reporting",
      "Manage Goods and Services Tax (GST), VAT, CST, and Excise duties",
      "Learn tax compliance and automated tax calculations in Tally",
      "Handle TDS processing, e-filing, and financial reporting",
      "Generate accurate tax invoices and statutory reports",
      "Ensure business compliance with tax regulations",
    ],
    course_desc_3:
      "This advanced-level course focuses on taxation and compliance, making you an expert in handling business financials using Tally ERP 9.",
    course_lessons: [
      {
        title: "Level 3 - Statutory and Taxations",
        text: "Master taxation in Tally, including GST, VAT, TDS, and payroll processing.",
        lessons: [
          { title: "Payroll (Master, Voucher, Report)" },
          {
            title:
              "Goods and Services Tax: VAT, CST, Excise & Services Introduction for Understanding GST",
          },
          {
            title:
              "TDS - Tax Deducted at Source (Master, Voucher, Report, and E-filing)",
          },
        ],
      },
    ],
  },
  {
    img: "course-09.jpg",
    duration: "10 Hours",
    course_outline: "Onsite",
    level: "Basic",
    title: "Tableau",
    rating: "",
    rating_count: 0,
    course_price: "₹ 9,999",
    student: 0,
    category: "Data Analytics",
    short_desc:
      "Learn the fundamentals of Tableau and master data visualization techniques for impactful business insights.",
    features: [],
    language: "English",
    certificate: "Included",
    videoId: "MOS_Training123",
    course_desc:
      "This course is designed for beginners who want to develop expertise in Tableau. You will learn how to create interactive dashboards, work with different chart types, and explore key data visualization techniques. By the end of the course, you will be able to turn raw data into meaningful insights using Tableau’s powerful features.",
    course_desc_2:
      "Gain hands-on experience with Tableau’s essential tools, including bar charts, time series analysis, mapping, and dashboard creation. You will also explore data joining, blending, and advanced storytelling techniques to enhance your reports.",
    learn_list: [
      "Navigate and utilize Tableau’s interface efficiently",
      "Create bar charts, scatter plots, and time series visualizations",
      "Apply filters and aggregation techniques for insightful analysis",
      "Develop interactive dashboards with storytelling elements",
      "Blend and join data from multiple sources",
      "Use advanced data preparation techniques for better visualization",
      "Implement table calculations and dual-axis charts",
      "Master best practices for building effective Tableau reports",
    ],
    course_desc_3:
      "By completing this course, you will have the skills to create visually compelling and interactive Tableau dashboards, enabling data-driven decision-making in any business environment.",
    course_lessons: [
      {
        title: "Tableau Essentials",
        text: "Learn the fundamentals and advanced techniques of Tableau for effective data visualization and analysis.",
        lessons: [
          { title: "It's Super Easy to Get Started" },
          { title: "Tableau Basic - Introduction to Bar Chart" },
          {
            title:
              "Tableau Basic - Time Series, Aggregation and Basic Filter (Show Filters)",
          },
          { title: "Maps & Scatterplots & Introduction of Dashboard" },
          { title: "Joining Data, Blending Data and Dual Axis Data" },
          { title: "Table Calculation, Advanced Dashboards, Storytelling" },
          { title: "Other Topics" },
          { title: "Advanced Data Preparation" },
        ],
      },
    ],
  },
  {
    img: "course-09.jpg",
    duration: "30 Hours",
    course_outline: "Onsite",
    level: "Basic to Advance",
    title: "Tableau",
    rating: "",
    rating_count: 0,
    course_price: "₹ 24,999",
    student: 0,
    category: "Data Analytics",
    short_desc:
      "Master Tableau from basics to advanced levels, including LOD calculations, animations, and complex data visualization techniques.",
    features: [],
    language: "English",
    certificate: "Included",
    videoId: "MOS_Training123",
    course_desc:
      "This comprehensive Tableau course is designed for beginners and experienced professionals looking to enhance their data visualization skills. You will start with the basics and gradually progress to advanced topics, such as Level of Detail (LOD) calculations, advanced table calculations, and data animation techniques.",
    course_desc_2:
      "Develop expertise in Tableau’s powerful features, including advanced mapping techniques, data preparation, and analytics. This course will help you leverage Tableau’s capabilities to create compelling and insightful visualizations for data-driven decision-making.",
    learn_list: [
      "Understand and navigate Tableau’s interface effectively",
      "Create interactive dashboards and visual reports",
      "Utilize advanced table calculations for deeper insights",
      "Work with Level of Detail (LOD) calculations for precise analysis",
      "Develop animated visualizations to enhance storytelling",
      "Implement advanced mapping techniques for geographical data",
      "Master data preparation and integration in Tableau",
      "Explore new features introduced in Tableau 10",
    ],
    course_desc_3:
      "By the end of this course, you will be able to create professional-grade Tableau dashboards, apply complex analytics techniques, and present data in a visually engaging manner, making you an expert in data visualization.",
    course_lessons: [
      {
        title: "Advanced Tableau",
        text: "Master advanced Tableau techniques, including LOD calculations, mapping, and animations for data visualization.",
        lessons: [
          { title: "Groups and Sets" },
          { title: "Advanced Table Calculations" },
          { title: "Advanced Data Prep + Analytics in Tableau" },
          { title: "Creating Animations in Tableau" },
          { title: "Level of Detail Calculations (LOD)" },
          { title: "Advanced Mapping Techniques" },
          { title: "Advanced Data Preparation" },
          { title: "What's New in Tableau 10" },
        ],
      },
    ],
  },
  {
    img: "course-09.jpg",
    duration: "10 Hours",
    course_outline: "Onsite",
    level: "Basic",
    title: "Power BI",
    rating: "",
    rating_count: 0,
    course_price: "₹ 5,999",
    student: 0,
    category: "Data Analytics",
    short_desc:
      "Master the basics of Power BI to analyze and visualize data efficiently.",
    features: [],
    language: "English",
    certificate: "Included",
    videoId: "MOS_Training123",
    course_desc:
      "This course introduces you to Power BI, a powerful business analytics tool that enables you to visualize data, build interactive reports, and make data-driven decisions. Learn how to connect to various data sources, create data models, and generate impactful dashboards.",
    course_desc_2:
      "Throughout this course, you will explore Power BI’s core functionalities, from data modeling and DAX calculations to advanced visualization techniques. Whether you're a beginner or looking to enhance your skills, this course will equip you with the knowledge to create insightful reports.",
    learn_list: [
      "Understand the fundamentals of Power BI and its ecosystem",
      "Connect to various data sources and transform data",
      "Create data models and use DAX for calculations",
      "Design compelling visualizations and dashboards",
      "Publish and share reports securely using Power BI Service",
      "Implement Row-Level Security (RLS) for data access control",
      "Optimize performance and follow best practices",
    ],
    course_desc_3:
      "By the end of this course, you will be proficient in using Power BI for data analysis and visualization, enabling you to create dynamic reports and dashboards to support business decision-making.",
    course_lessons: [
      {
        title: "Power BI Essentials",
        text: "Learn the fundamentals and advanced concepts of Power BI for effective data analysis and visualization.",
        lessons: [
          { title: "Introduction to Power BI" },
          { title: "Connecting to Data Sources" },
          { title: "Data Modeling" },
          { title: "DAX Fundamentals" },
          { title: "Visualizations in Power BI" },
          { title: "Advanced Visualizations" },
          { title: "Publishing and Sharing" },
          { title: "Row-Level Security (RLS)" },
          { title: "Power BI Service Overview" },
          { title: "Paginated Reports" },
          { title: "Best Practices and Performance Optimization" },
          { title: "Power Query & M Language" },
          { title: "Power BI Integration Elements" },
          { title: "Built Dashboard" },
        ],
      },
    ],
  },
  {
    img: "course-09.jpg",
    duration: "30 Hours",
    course_outline: "Onsite",
    level: "Basic to Advance",
    title: "Power BI",
    rating: "",
    rating_count: 0,
    course_price: "₹ 24,999",
    student: 0,
    category: "Data Analytics",
    short_desc:
      "Master advanced Power BI techniques, including data modeling, DAX, and cloud deployment.",
    features: [],
    language: "English",
    certificate: "Included",
    videoId: "MOS_Training123",
    course_desc:
      "This course is designed for professionals looking to advance their Power BI skills. You will learn how to import and transform data, create dynamic reports, and optimize dashboards for better performance. The course covers advanced DAX expressions, Power Query, cloud deployment, and report automation.",
    course_desc_2:
      "Dive deep into Power BI’s powerful capabilities, including hierarchical reports, drill-down features, and cloud-based deployment. This course will enable you to enhance report interactivity, manage data security, and integrate Power BI with other business applications.",
    learn_list: [
      "Import and transform data for report generation",
      "Optimize report visualizations and properties",
      "Create hierarchical reports with drill-down features",
      "Master Power Query and M Language for data manipulation",
      "Develop complex DAX expressions for advanced calculations",
      "Deploy Power BI reports to the cloud",
      "Enhance report interactivity with subscriptions and alerts",
      "Integrate Power BI with other Microsoft and third-party tools",
    ],
    course_desc_3:
      "By the end of this course, you will be equipped with the skills to create dynamic, high-performance Power BI reports, automate processes, and deploy dashboards for enterprise-level analytics.",
    course_lessons: [
      {
        title: "Power BI Essentials",
        text: "Learn the fundamentals and advanced concepts of Power BI for effective data analysis and visualization.",
        lessons: [
          { title: "Introduction to Power BI" },
          { title: "Connecting to Data Sources" },
          { title: "Data Modeling" },
          { title: "DAX Fundamentals" },
          { title: "Visualizations in Power BI" },
          { title: "Advanced Visualizations" },
          { title: "Publishing and Sharing" },
          { title: "Row-Level Security (RLS)" },
          { title: "Power BI Service Overview" },
          { title: "Paginated Reports" },
          { title: "Best Practices and Performance Optimization" },
          { title: "Power Query & M Language" },
          { title: "Power BI Integration Elements" },
          { title: "Built Dashboard" },
        ],
      },
      {
        title: "Power BI - Advance",
        text: "Enhance your Power BI skills with advanced data modeling, DAX expressions, and cloud deployment techniques.",
        lessons: [
          { title: "How to Import and Edit Data for Final Report" },
          { title: "Report Visualizations And Properties - Part I" },
          { title: "Report Visualizations And Properties - Part II" },
          { title: "Chart And Map Report Properties" },
          { title: "Hierarchies And Drilldown Reports" },
          { title: "Power Query & M Language" },
          { title: "DAX Expressions - Introductions" },
          { title: "DAX Expressions" },
          { title: "Power BI Deployment & Cloud" },
          { title: "Power BI Cloud Operations" },
          { title: "Improving Power BI Reports" },
          { title: "Insights and Subscriptions" },
          { title: "Power BI Integration Elements" },
        ],
      },
    ],
  },
  {
    img: "course-09.jpg",
    duration: "10 Hours",
    course_outline: "Onsite",
    level: "Basic",
    title: "Microsoft Excel",
    rating: "",
    rating_count: 0,
    course_price: "₹ 4,500",
    student: 0,
    category: "Microsoft Office Training",
    short_desc:
      "Learn the basics of Microsoft Excel, including essential formulas, data organization, and fundamental spreadsheet operations.",
    features: [],
    language: "English",
    certificate: "Included",
    videoId: "MOS_Training123",
    course_desc:
      "This beginner-friendly course introduces the core functionalities of Microsoft Excel, focusing on spreadsheets, formulas, tables, and data management techniques.",
    course_desc_2:
      "You will learn how to navigate Excel, work with tables and cell references, apply basic formulas, and use sorting and filtering tools for better data analysis.",
    learn_list: [
      "Understand Excel's interface and essential features",
      "Create, modify, and format spreadsheets effectively",
      "Use basic formulas and functions for calculations",
      "Sort and filter data for efficient data management",
      "Work with tables, conditional formulas, and date functions",
    ],
    course_desc_3:
      "Ideal for beginners who want to develop essential Excel skills for academic, personal, or professional use.",
    course_lessons: [
      {
        title: "Microsoft Excel - Basic",
        text: "Master the fundamental functionalities of Microsoft Excel.",
        lessons: [
          { title: "Introduction of Excel" },
          { title: "Working with Tables" },
          { title: "Understanding Cell References" },
          { title: "Basic Functions of Excel" },
          { title: "Sorting Data" },
          { title: "Filtering Data" },
          { title: "Basics of Formula/Functions" },
          { title: "If Functions and Text Functions" },
          { title: "Working with Dates and Countifs and Sumifs" },
        ],
      },
    ],
  },
  {
    img: "course-09.jpg",
    duration: "7 Hours",
    course_outline: "Onsite",
    level: "Basic",
    title: "Microsoft Word",
    rating: "",
    rating_count: 0,
    course_price: "₹ 1,500",
    student: 0,
    category: "Microsoft Office Training",
    short_desc:
      "Learn the fundamental skills of Microsoft Word, including document creation, formatting, tables, and templates.",
    features: [],
    language: "English",
    certificate: "Included",
    videoId: "MOS_Training123",
    course_desc:
      "This beginner-friendly course introduces the essential features of Microsoft Word, helping you create and format professional documents with ease.",
    course_desc_2:
      "You will learn how to edit and format text, work with tables and graphics, manage lists, customize templates, and enhance documents using advanced formatting tools.",
    learn_list: [
      "Navigate and utilize Microsoft Word efficiently",
      "Edit, format, and structure documents professionally",
      "Work with tables, lists, and charts for better organization",
      "Insert and customize images, graphics, and quick parts",
      "Use templates, mail merge, macros, and security features",
    ],
    course_desc_3:
      "Ideal for beginners looking to develop essential Microsoft Word skills for personal, academic, or professional use.",
    course_lessons: [
      {
        title: "Microsoft Word - Basic",
        text: "Learn the fundamental features of Microsoft Word.",
        lessons: [
          { title: "Basic Introduction and Setup" },
          { title: "Editing Text" },
          { title: "Format Text & Paragraphs" },
          { title: "Tables" },
          { title: "Graphics" },
          { title: "Page Appearance" },
          { title: "Proofing" },
          { title: "Managing Lists" },
          { title: "Tables & Charts" },
          { title: "Customized Formats" },
          { title: "Modifying Pictures" },
          { title: "Custom Graphics" },
          { title: "Quick Parts" },
          { title: "Text Flow Control" },
          { title: "Templates" },
          { title: "Mail Merge" },
          { title: "Create & Edit Macros" },
          { title: "Collaborating" },
          { title: "References" },
          { title: "Managing Long Documents" },
          { title: "Document Security" },
          { title: "Forms" },
        ],
      },
    ],
  },
  {
    img: "course-09.jpg",
    duration: "3 Hours",
    course_outline: "Onsite",
    level: "Basic",
    title: "Microsoft PowerPoint",
    rating: "",
    rating_count: 0,
    course_price: "₹ 1,500",
    student: 0,
    category: "Microsoft Office Training",
    short_desc:
      "Learn the essential skills to create engaging and professional presentations using Microsoft PowerPoint.",
    features: [],
    language: "English",
    certificate: "Included",
    videoId: "MOS_Training123",
    course_desc:
      "This beginner-friendly course covers the fundamentals of Microsoft PowerPoint, teaching you how to design and deliver impactful presentations.",
    course_desc_2:
      "You will learn how to structure slides, apply design principles, work with templates, and enhance presentations with animations and multimedia elements.",
    learn_list: [
      "Understand the basics of PowerPoint and its interface",
      "Create and design visually appealing slides",
      "Apply formatting, themes, and transitions for better engagement",
      "Work with templates to streamline presentation creation",
      "Enhance presentations with animations and real-time collaboration",
    ],
    course_desc_3:
      "Perfect for beginners looking to develop Microsoft PowerPoint skills for academic, professional, or personal use.",
    course_lessons: [
      {
        title: "Microsoft PowerPoint - Basic",
        text: "Create engaging presentations using PowerPoint's core features.",
        lessons: [
          { title: "Introduction & Essential Knowledge" },
          { title: "Slide Design (13 Functional Slides)" },
          { title: "Polishing Presentations" },
          { title: "Creating Templates" },
          { title: "Working with Real-Time Project" },
        ],
      },
    ],
  },
  {
    img: "course-09.jpg",
    duration: "15 Hours",
    course_outline: "Onsite",
    level: "Advance",
    title: "Microsoft Excel",
    rating: "",
    rating_count: 0,
    course_price: "₹ 8,000",
    student: 0,
    category: "Microsoft Office Training",
    short_desc:
      "Master advanced Microsoft Excel techniques, including data analysis, automation, and dashboard creation.",
    features: [],
    language: "English",
    certificate: "Included",
    videoId: "MOS_Training123",
    course_desc:
      "This advanced Microsoft Excel course is designed for professionals who want to elevate their skills with complex functions, data automation, and business intelligence tools.",
    course_desc_2:
      "You will learn how to work with PivotTables, Power Query, advanced formulas, data validation, automation techniques, and dashboard creation for better decision-making.",
    learn_list: [
      "Leverage advanced Excel functions for data analysis",
      "Automate tasks using Macros (Non-VBA)",
      "Create dynamic dashboards with PivotTables and Charts",
      "Work with Power Query and Power Pivot for data modeling",
      "Ensure data integrity with validation and security techniques",
    ],
    course_desc_3:
      "Ideal for professionals, analysts, and business users looking to enhance their Microsoft Excel expertise for data management and reporting.",
    course_lessons: [
      {
        title: "Microsoft Excel - Advanced",
        text: "Enhance your Excel skills with advanced functionalities.",
        lessons: [
          { title: "Lookup and Information Functions" },
          { title: "Using Named Ranges" },
          { title: "Data Validation" },
          { title: "Using Conditional Formatting" },
          { title: "Summarizing Data with PivotTables" },
          { title: "Working with Slicers" },
          { title: "Power Query / Power Pivot" },
          { title: "Charts" },
          { title: "Excel Dashboard" },
          { title: "Other Topics" },
          { title: "Protecting and Security" },
          { title: "Forecast & Outline" },
          { title: "Macros (Only Recording, Non-VBA)" },
          { title: "Bonus Contents for Office 365 - Dynamic Array Functions" },
        ],
      },
    ],
  },
  {
    img: "course-09.jpg",
    duration: "5 Hours",
    course_outline: "Onsite",
    level: "Advance",
    title: "Microsoft PowerPoint",
    rating: "",
    rating_count: 0,
    course_price: "₹ 2,500",
    student: 0,
    category: "Microsoft Office Training",
    short_desc:
      "Master advanced PowerPoint techniques, including AI integration, animations, and data visualization.",
    features: [],
    language: "English",
    certificate: "Included",
    videoId: "MOS_Training123",
    course_desc:
      "This advanced PowerPoint course is designed for professionals who want to create impactful presentations using cutting-edge features, AI tools, and advanced design techniques.",
    course_desc_2:
      "Learn to enhance presentations with animations, AI-powered tools, and modern design elements while optimizing your workflow for business or educational purposes.",
    learn_list: [
      "Utilize advanced animations and transition effects",
      "Leverage AI tools like ChatGPT, OpenAI, and Microsoft Copilot",
      "Create professional slides with ZOOM, MORPH, and 3D elements",
      "Effectively visualize and present large datasets",
      "Optimize PowerPoint for online and offline education",
    ],
    course_desc_3:
      "Ideal for professionals, educators, and designers who want to elevate their PowerPoint skills for high-impact presentations and business storytelling.",
    course_lessons: [
      {
        title: "Microsoft PowerPoint - Advanced",
        text: "Master PowerPoint with advanced design and presentation techniques.",
        lessons: [
          { title: "Working with Animation" },
          { title: "Presenting a Presentation in PowerPoint" },
          { title: "AI in PowerPoint (ChatGPT, OpenAI, Microsoft Copilot)" },
          { title: "ZOOM & MORPH (2019+)" },
          { title: "3D Options and Usage" },
          { title: "Tables in PowerPoint" },
          { title: "Presenting Large Data" },
          { title: "Vector Files in PowerPoint" },
          { title: "PowerPoint for Offline or Online Education" },
          { title: "Accessibility Features" },
          { title: "Inspiration & Creative Techniques" },
          { title: "Advanced Tips & Best Practices" },
          { title: "Brainstorming PowerPoint Templates" },
          { title: "Slide Design (New Ideas & Trends)" },
          { title: "Video-Based Answers to Common Questions" },
        ],
      },
    ],
  },
  {
    img: "course-09.jpg",
    duration: "6 Hours",
    course_outline: "Onsite",
    level: "Associate",
    title: "Microsoft Office Specialist (Word)",
    rating: "",
    rating_count: 0,
    course_price: "₹ 4,500",
    student: 0,
    category: "Microsoft Office Specialist",
    short_desc:
      "Master Microsoft Word from basics to advanced with hands-on training.",
    features: [],
    language: "English",
    certificate: "₹ 12,390",
    videoId: "MOS_Training123",
    course_desc:
      "This course provides a comprehensive understanding of Microsoft Word, covering document creation, formatting, and collaboration tools.",
    course_desc_2:
      "Learn how to efficiently use Microsoft Word for professional document creation, including advanced formatting, tables, and graphics.",
    learn_list: [
      "Create, format, and manage Word documents",
      "Utilize advanced editing tools for professional documents",
      "Implement tables, lists, and references",
      "Enhance productivity with collaboration tools",
      "Prepare for MOS Word certification",
    ],
    course_desc_3:
      "Ideal for students and professionals looking to enhance their Word skills for business and academic purposes.",
    course_lessons: [
      {
        title: "Microsoft Word Essentials",
        text: "Understand the core functionalities of Microsoft Word.",
        lessons: [
          { title: "Manage Documents" },
          { title: "Insert and Format Text, Paragraphs, and Sections" },
          { title: "Manage Tables and Lists" },
          { title: "Create and Manage References" },
          { title: "Insert and Format Graphic Elements" },
          { title: "Manage Document Collaboration" },
        ],
      },
    ],
  },
  {
    img: "course-09.jpg",
    duration: "10 Hours",
    course_outline: "Onsite",
    level: "Expert",
    title: "Microsoft Office Specialist (Word)",
    rating: "",
    rating_count: 0,
    course_price: "₹ 7,500",
    student: 0,
    category: "Microsoft Office Specialist",
    short_desc:
      "Advance your Microsoft Word skills with expert-level training and techniques.",
    features: [],
    language: "English",
    certificate: "₹ 14,390",
    videoId: "MOS_Training123",
    course_desc:
      "This advanced course dives deep into Microsoft Word's complex features, helping users streamline their workflow and increase efficiency.",
    course_desc_2:
      "Master advanced Word functionalities such as automation, customization, and efficient document management.",
    learn_list: [
      "Customize Word interface and settings",
      "Use advanced formatting and editing tools",
      "Implement document automation with macros",
      "Manage large and complex documents",
      "Prepare for MOS Expert certification",
    ],
    course_desc_3:
      "Designed for professionals and power users who need expert-level Word proficiency.",
    course_lessons: [
      {
        title: "Advanced Microsoft Word Features",
        text: "Learn expert-level functionalities for high-efficiency document creation.",
        lessons: [
          { title: "Manage Document Options and Settings" },
          { title: "Use Advanced Editing and Formatting Features" },
          { title: "Create Custom Document Elements" },
          { title: "Use Advanced Word Features" },
        ],
      },
    ],
  },
  {
    img: "course-09.jpg",
    duration: "6 Hours",
    course_outline: "Onsite",
    level: "Associate",
    title: "Microsoft Office Specialist (Excel)",
    rating: "",
    rating_count: 0,
    course_price: "₹ 4,500",
    student: 0,
    category: "Microsoft Office Specialist",
    short_desc:
      "Learn Excel from the ground up, covering essential spreadsheet management skills.",
    features: [],
    language: "English",
    certificate: "₹ 12,390",
    videoId: "MOS_Training123",
    course_desc:
      "This course provides hands-on experience with Excel's core functionalities, including data entry, formulas, and charts.",
    course_desc_2:
      "Develop strong Excel skills for personal and professional use, including data organization and visualization techniques.",
    learn_list: [
      "Manage worksheets and workbooks",
      "Perform calculations using formulas and functions",
      "Create tables and analyze data",
      "Visualize data using charts and graphs",
      "Prepare for MOS Excel certification",
    ],
    course_desc_3:
      "Perfect for beginners and professionals who need to master Excel basics.",
    course_lessons: [
      {
        title: "Excel Fundamentals",
        text: "Get familiar with Excel's key features and functions.",
        lessons: [
          { title: "Manage Worksheets and Workbooks" },
          { title: "Manage Data Cells and Ranges" },
          { title: "Manage Tables and Table Data" },
          { title: "Perform Operations using Formulas and Functions" },
          { title: "Manage Charts" },
        ],
      },
    ],
  },
  {
    img: "course-09.jpg",
    duration: "10 Hours",
    course_outline: "Onsite",
    level: "Expert",
    title: "Microsoft Office Specialist (Excel)",
    rating: "",
    rating_count: 0,
    course_price: "₹ 7,500",
    student: 0,
    category: "Microsoft Office Specialist",
    short_desc:
      "Enhance your Excel skills with expert-level functions, formulas, and automation.",
    language: "English",
    certificate: "₹ 14,390",
    videoId: "MOS_Training123",
    course_desc:
      "This expert-level Excel course covers automation, advanced functions, and complex data analysis techniques.",
    course_desc_2:
      "Learn how to leverage Excel's powerful tools for business intelligence, automation, and data visualization.",
    learn_list: [
      "Master complex formulas and functions",
      "Automate tasks with macros",
      "Analyze data using advanced pivot tables",
      "Create professional dashboards and reports",
      "Prepare for MOS Excel Expert certification",
    ],
    course_desc_3:
      "Ideal for professionals who need to work efficiently with large datasets and automation.",
    course_lessons: [
      {
        title: "Advanced Excel Techniques",
        text: "Master Excel's advanced features for maximum efficiency.",
        lessons: [
          { title: "Manage Workbook Options and Settings" },
          { title: "Manage and Format Data" },
          { title: "Create Advanced Formulas and Macros" },
          { title: "Manage Advanced Charts and Tables" },
        ],
      },
    ],
  },
];

course_data.forEach((course) => {
  course.id = `${toKebabCase(course.title)}-${course.level?.toLowerCase()}`;
});

export default course_data;
