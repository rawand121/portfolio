import React from "react";
import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";

export default function Service({ data }) {
  const { t } = useTranslation();
  const { skills } = data;
  
  const categoryTranslations = {
    programmingSkills: t('service.categories.programmingSkills'),
    databaseSkills: t('service.categories.databaseSkills'),
    devOpsSkills: t('service.categories.devOpsSkills'),
    cloudSkills: t('service.categories.cloudSkills'),
    monitoringSkills: t('service.categories.monitoringSkills'),
    designSkills: t('service.categories.designSkills'),
  };
  
  const subTitleTranslations = {
    'Programming': t('service.subTitles.programming'),
    'Architecture': t('service.subTitles.architecture'),
    'Database': t('service.subTitles.database'),
    'Database Concepts': t('service.subTitles.databaseConcepts'),
    'DevOps': t('service.subTitles.devOps'),
    'DevOps Concepts': t('service.subTitles.devOpsConcepts'),
    'Cloud': t('service.subTitles.cloud'),
    'Cloud Concepts': t('service.subTitles.cloudConcepts'),
    'Monitoring': t('service.subTitles.monitoring'),
    'Monitoring Concepts': t('service.subTitles.monitoringConcepts'),
    'Design': t('service.subTitles.design'),
    'Design Concepts': t('service.subTitles.designConcepts'),
  };
  
  return (
    <section className="section" id="services">
      <div className="container">
        {Object.keys(skills).map((key) => (
          <div className="my-5" key={key}>
            <SectionHeading miniTitle={t('common.skills')} title={categoryTranslations[key] || key} />
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
                    <p className="text-sm h6">{subTitleTranslations[item.subTitle] || item.subTitle}</p>
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
