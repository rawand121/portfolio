import React from "react";

const skillsObj = {
  monitoringSkills: "Monitoring",
  devOpsSkills: "DevOps",
  designSkills: "Design",
  programmingSkills: "Programming",
  databaseSkills: "Database",
  cloudSkills: "Cloud",
};

export default function SectionHeading({ miniTitle, title, variant }) {
  return (
    <div className={`section-heading ${variant ? variant : ""}`}>
      <h6
        data-aos={variant === "text-center" ? "fade-up" : "fade-right"}
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <span>{miniTitle}</span>
      </h6>
      <h2 className="mb-0">{skillsObj[title]}</h2>
    </div>
  );
}
