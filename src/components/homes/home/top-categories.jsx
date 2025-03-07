import Link from "next/link";
import { toKebabCase } from "../../../utils/convertion-utils";

const category_contents = {
  title: "Top Categories",
  text: "Boost your career with industry-relevant training in business, technology, analytics, marketing, and global education.",
  category_items: [
    {
      delay: "50",
      color: "color-primary-style",
      icon: "icon-9",
      title: "Business & Management Training",
    },
    {
      delay: "100",
      color: "color-secondary-style",
      icon: "icon-10 art-design",
      title: "Marketing & Digital Skills",
    },
    {
      delay: "150",
      color: "color-extra01-style",
      icon: "icon-11 personal-development",
      title: "Technology & Software Training",
    },
    {
      delay: "50",
      color: "color-tertiary-style",
      icon: "icon-12 health-fitness",
      title: "Data Analytics & Business Tools",
    },
    {
      delay: "100",
      color: "color-extra02-style",
      icon: "icon-13 data-science",
      title: "Microsoft Office Training & Certification",
    },
    {
      delay: "150",
      color: "color-extra03-style",
      icon: "icon-14",
      title: "Overseas Education & Career Opportunities",
    },
  ],
};

const { title, text, category_items } = category_contents;

const TopCategories = () => {
  return (
    <div className="edu-categorie-area categorie-area-2 edu-section-gap">
      <div className="container">
        <div
          className="section-title section-center"
          data-sal-delay="150"
          data-sal="slide-up"
          data-sal-duration="800"
        >
          <h2 className="title">{title}</h2>
          <span className="shape-line">
            <i className="icon-19"></i>
          </span>
          <p>{text}</p>
        </div>

        <div className="row g-5">
          {category_items.map((item, i) => (
            <div
              key={i}
              className="col-lg-4 col-md-6"
              data-sal-delay={`${item.delay}`}
              data-sal="slide-up"
              data-sal-duration="800"
            >
              <div className={`categorie-grid categorie-style-2 ${item.color}`}>
                <div className="icon">
                  <i className={item.icon}></i>
                </div>
                <div className="content">
                  <Link href={`/courses/${toKebabCase(item.title)}`}>
                    <h5 className="title">{item.title}</h5>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
