import React from "react";
import SectionHeading from "./SectionHeading";

export default function Service({ data }) {
  const { skills } = data;
  return (
    <section className="section" id="services">
      <div className="container">
        {Object.keys(skills).map((key) => (
          <div className="my-5">
            <SectionHeading miniTitle={"Skills"} title={key} />
            <div className="row gy-3">
              {skills[key]?.map((item, index) => (
                <div className="col-sm-6 col-md-3 col-lg-2" key={index}>
                  <div
                    className="text-center skillsBox"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay={index * 100}
                  >
                    <h1 className="text-md h5">{item.title}</h1>
                    <p className="text-sm h6">{item.subTitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
