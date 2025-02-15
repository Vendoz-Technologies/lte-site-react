import { Certificate, Instructor, OnlineClass, User } from "../../../svg";

const category_contents = [
  {
    icon: <OnlineClass />,
    title: "Comprehensive",
    subtitle: "Training Programs",
  },
  { icon: <Instructor />, title: "Expert", subtitle: "Career Training" },
  {
    icon: <Certificate />,
    title: "Industry",
    subtitle: "Recognized Certifications",
  },
  { icon: <User />, title: "Career", subtitle: "Growth Opportunities" },
];

const CategoryArea = () => {
  return (
    <div className="features-area-2">
      <div className="container">
        <div className="features-grid-wrap">
          {category_contents.map((category, i) => (
            <div
              key={i}
              className="features-box features-style-2 edublink-svg-animate"
            >
              <div className="icon">{category.icon}</div>
              <div className="content">
                <h5 className="title">
                  <span>{category.title}</span>
                  {category.subtitle}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryArea;
