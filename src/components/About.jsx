import { Icon } from "@iconify/react";
import React from "react";
import parser from "html-react-parser";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";

export default function About({ data }) {
  const { t } = useTranslation();
  const { imgSrc, funfacts, btnUrl } = data;
  return (
    <section className="about-section section" id="about">
      <div className="container">
        <div className="effect-1">
          <img
            src="/images/effect-1.svg"
            alt="Shape"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="500"
          />
        </div>
        <div className="effect-2">
          <img
            src="/images/effect-2.svg"
            alt="Shape"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="400"
          />
        </div>
        <div className="row align-items-center justify-content-center gy-5">
          <div
            className="col-lg-6 col-xl-5"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            <div
              className="about-banner text-center"
              style={{ padding: "20px" }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "450px",
                  margin: "0 auto",
                  animation: "float 8s ease-in-out infinite",
                }}
              >
                {/* Main Image Container */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "580px",
                    borderRadius: "25px",
                    overflow: "hidden",
                    background: "linear-gradient(135deg, #2563eb, #14b8a6, #06b6d4)",
                    padding: "8px",
                    boxShadow: "0 30px 60px rgba(20, 184, 166, 0.4)",
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "14px",
                      overflow: "hidden",
                      border: "3px solid #fff",
                      position: "relative",
                    }}
                  >
                    <img
                      src={imgSrc}
                      alt="Rawand Rebwar - About"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center top",
                      }}
                    />
                    {/* Subtle Overlay */}
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        background:
                          "linear-gradient(180deg, transparent 60%, rgba(20, 184, 166, 0.1) 100%)",
                        borderRadius: "14px",
                      }}
                    />
                  </div>

                  {/* Corner Accent */}
                  <div
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      width: "50px",
                      height: "50px",
                      background: "rgba(255, 255, 255, 0.9)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Icon
                      icon="mdi:check-circle"
                      style={{
                        fontSize: "24px",
                        color: "#14b8a6",
                      }}
                    />
                  </div>
                </div>

                {/* Bottom Info Card */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-40px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "85%",
                    background: "rgba(255, 255, 255, 0.95)",
                    borderRadius: "20px",
                    padding: "25px",
                    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(20, 184, 166, 0.3)",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        color: "#14b8a6",
                        fontSize: "18px",
                        fontWeight: "700",
                        marginBottom: "8px",
                      }}
                    >
                      RAWAND REBWAR
                    </div>
                    <div
                      style={{
                        color: "#666",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      {t('about.fullStackDeveloper')}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "20px",
                        marginTop: "15px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          fontSize: "14px",
                          color: "#97D0B0",
                          fontWeight: "600",
                        }}
                      >
                        <Icon icon="mdi:star" style={{ fontSize: "16px" }} />
                        5+ Years
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          fontSize: "14px",
                          color: "#14b8a6",
                          fontWeight: "600",
                        }}
                      >
                        <Icon
                          icon="mdi:code-braces"
                          style={{ fontSize: "16px" }}
                        />
                        Advanced
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div
                  style={{
                    position: "absolute",
                    top: "-25px",
                    left: "-25px",
                    width: "75px",
                    height: "75px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #2563eb, #14b8a6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 12px 30px rgba(20, 184, 166, 0.5)",
                    border: "3px solid #fff",
                    zIndex: "3",
                  }}
                >
                  <Icon
                    icon="mdi:briefcase"
                    style={{
                      fontSize: "28px",
                      color: "#fff",
                    }}
                  />
                </div>

                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "-30px",
                    transform: "translateY(-50%)",
                    width: "65px",
                    height: "65px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #14b8a6, #06b6d4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 12px 30px rgba(6, 182, 212, 0.5)",
                    border: "3px solid #fff",
                    zIndex: "3",
                  }}
                >
                  <Icon
                    icon="mdi:rocket-launch"
                    style={{
                      fontSize: "24px",
                      color: "#fff",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 px-lg-5">
            <div
              className="about-text"
              data-aos="fade"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="section-heading">
                <h6>
                  <span>{t('about.miniTitle')}</span>
                </h6>

                <h2>{parser(t('about.title'))}</h2>
              </div>
              <p>{t('about.description')}</p>
              <div className="review-box">
                {funfacts?.map((item, index) => {
                  let translationKey = '';
                  if (item.title === 'Live Projects') translationKey = 'about.funfacts.liveProjects';
                  else if (item.title === 'Years Experience') translationKey = 'about.funfacts.yearsExperience';
                  else if (item.title === 'Daily Active users') translationKey = 'about.funfacts.dailyActiveUsers';
                  else translationKey = item.title;
                  
                  return (
                    <div className="r-box" key={index}>
                      <h3>
                        {item.number}
                        <span>+</span>
                      </h3>
                      <label>{translationKey.includes('about.funfacts') ? t(translationKey) : item.title}</label>
                    </div>
                  );
                })}
              </div>
              <div className="btn-bar">
                <ScrollLink
                  to={btnUrl}
                  spy={true}
                  smooth="easeInOutQuart"
                  offset={-100}
                  duration={800}
                  className="px-btn"
                >
                  <span>{t('about.btnText')}</span>{" "}
                  <i>
                    <Icon icon="bi:arrow-right" />
                  </i>
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
