import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";
import Slider from "react-slick";
import Modal from "./Modal";

export default function Projects({ data }) {
  const { i18n, t } = useTranslation();
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("image");
  const [modalData, setModalData] = useState({});
  const { allProjects } = data;
  
  // Check if current language is RTL
  const rtlLanguages = ['ar', 'ku'];
  const isRTL = rtlLanguages.includes(i18n.language);
  
  // Map project titles to translation keys
  const projectKeyMap = {
    "Morina Menu": "morinaMenu",
    "CDO Website": "cdoWebsite",
    "KDCDE Website": "kdcdWebsite",
    "Newroz SC": "newrozSc",
    "POS and Management Systems": "posSystems",
    "Plus4 Website": "plus4Website",
    "Ocean Wave Website": "oceanWave",
    "Lokmada Website": "lokmada",
  };
  
  const getProjectTranslation = (project, field) => {
    const key = projectKeyMap[project.title];
    // Keep project titles and company names in original form
    if (field === 'title') {
      return project.title; // Keep original project name
    }
    if (field === 'subTitle') {
      return project.subTitle; // Keep original subtitle
    }
    if (key && field === 'detailsTitle') {
      return t(`projects.items.${key}.detailsTitle`, { defaultValue: project.details?.title });
    }
    if (key && field === 'detailsDescription') {
      return t(`projects.items.${key}.detailsDescription`, { defaultValue: project.details?.description });
    }
    if (key && field === 'type') {
      return t(`projects.items.${key}.type`, { defaultValue: project.details?.type });
    }
    return project[field] || project.details?.[field];
  };
  const handelProjectDetails = (item, itemType) => {
    // Create a modified item with translated content for the modal
    const translatedItem = {
      ...item,
      details: {
        ...item.details,
        title: getProjectTranslation(item, 'detailsTitle'),
        description: getProjectTranslation(item, 'detailsDescription'),
        type: getProjectTranslation(item, 'type'),
      }
    };
    setModalData(translatedItem);
    setModalType(itemType);
    setModal(!modal);
  };

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
    rtl: isRTL, // Enable RTL mode for slick slider
  };

  return (
    <>
      <section className="project-section section gray-bg" id="project">
        <div className="container">
          <SectionHeading
            miniTitle={t('projects.sectionHeading.miniTitle')}
            title={t('projects.sectionHeading.title')}
          />
          <div
            className="full-width"
            data-aos="fade"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <Slider {...settings} className="slider-gap-24">
              {allProjects?.map((item, index) => (
                <div key={index} style={{ width: "416px" }}>
                  <div className="project-box">
                    <div className="project-media">
                      <img src={item.thumbUrl} alt="Thumb" />
                      <span
                        className="gallery-link"
                        onClick={() => handelProjectDetails(item, "details")}
                      >
                        <i>
                          <Icon icon="bi:plus" />
                        </i>
                      </span>
                    </div>
                    <div className="project-body">
                      <div className="text">
                        <h5>{getProjectTranslation(item, 'title')}</h5>
                        <span>{getProjectTranslation(item, 'subTitle')}</span>
                      </div>
                      <div className="link">
                        <span
                          className="p-link"
                          onClick={() => handelProjectDetails(item, "details")}
                        >
                          <Icon icon="bi:arrow-right" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      {modal && (
        <div className="mfp-wrap">
          <div className="mfp-container">
            <div className="mfp-bg" onClick={() => setModal(!modal)}></div>
            <div className="mfp-content">
              <button
                type="button"
                className="mfp-close"
                onClick={() => setModal(!modal)}
              >
                ×
              </button>
              {modalType === "image" ? (
                <img src={modalData.thumbUrl} alt="Thumbnail" />
              ) : (
                <Modal modalData={modalData} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
