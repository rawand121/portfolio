import React from "react";
import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";

export default function Experience({ data }) {
  const { t } = useTranslation();
  const { allExperience } = data;

  return (
    <section className="section gray-bg">
      <div className="container">
        <SectionHeading
          miniTitle={t('experience.sectionHeading.miniTitle')}
          title={t('experience.sectionHeading.title')}
        />
        <div className="row gy-3">
          {allExperience?.map((item, index) => (
            <div
              className="col-12"
              key={index}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={index * 100}
            >
              <div className="ex-box">
                <div className="row gy-4">
                  <div className="col-md-4 col-lg-3">
                    <div className="ex-left">
                      <h4>
                        {item.designation === 'IT Manager & Project Coordinator'
                          ? t('experience.positions.itManagerProjectCoordinator')
                          : item.designation === 'Full Stack Developer'
                          ? t('experience.positions.fullStackDeveloper')
                          : item.designation === 'Front-end Developer'
                          ? t('experience.positions.frontEndDeveloper')
                          : item.designation}
                      </h4>
                      <span>{item.company}</span>
                      <p>{item.duration}</p>
                      <label>
                        {item.jobType.includes('Full time') 
                          ? t('experience.jobTypes.fullTime')
                          : item.jobType.includes('Part time') || item.jobType.includes('Part Time')
                          ? t('experience.jobTypes.partTime')
                          : item.jobType.includes('Freelance')
                          ? t('experience.jobTypes.freelance')
                          : item.jobType}
                        {item.jobType.includes('|') && (
                          <>
                            {' | '}
                            {item.jobType.includes('Part time') || item.jobType.includes('Part Time')
                              ? t('experience.jobTypes.partTime')
                              : item.jobType.includes('Freelance')
                              ? t('experience.jobTypes.freelance')
                              : ''}
                          </>
                        )}
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-9">
                    <div className="ex-right">
                      <h5>{item.companyTitle === 'About The Organization' 
                        ? t('experience.companyTitle')
                        : item.companyTitle === 'About Company'
                        ? t('experience.companyTitleAlt')
                        : item.companyTitle}</h5>
                      <p className="m-0">
                        {item.company === 'Civil Development Organization'
                          ? t('experience.companyDescriptions.cdo')
                          : item.company === 'Morina Company'
                          ? t('experience.companyDescriptions.morina')
                          : item.company === 'Dreexle Company'
                          ? t('experience.companyDescriptions.dreexle')
                          : item.company === 'Smarthand Company'
                          ? t('experience.companyDescriptions.smarthand')
                          : item.company === 'Freelance'
                          ? t('experience.companyDescriptions.freelance')
                          : item.companyDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
