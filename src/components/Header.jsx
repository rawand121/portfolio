import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const { t } = useTranslation();
  const [mobileToggle, setMobileToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`header-top-fixed one-page-nav ${
        mobileToggle ? "menu-open menu-open-desk" : ""
      } ${scrolled ? "fixed-header scrolled" : ""}`}
    >
      <div className="container">
        <div className="logo">
          <Link className="navbar-brand" href="/">
            <img
              className="logo-light"
              width={60}
              title
              alt="Logo"
              src="/logohq (1).png"
            />
          </Link>
        </div>
        {/* / */}
        <ul className="main-menu">
          <li>
            <ScrollLink
              to="home"
              spy={true}
              smooth="easeInOutQuart"
              offset={-100}
              duration={800}
              onClick={() => setMobileToggle(false)}
            >
              {t('header.home')}
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              spy={true}
              smooth="easeInOutQuart"
              offset={-100}
              duration={800}
              onClick={() => setMobileToggle(false)}
            >
              {t('header.aboutMe')}
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="project"
              spy={true}
              smooth="easeInOutQuart"
              offset={-100}
              duration={800}
              onClick={() => setMobileToggle(false)}
            >
              {t('header.projects')}
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="services"
              spy={true}
              smooth="easeInOutQuart"
              offset={-100}
              duration={800}
              onClick={() => setMobileToggle(false)}
            >
              {t('header.services')}
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contactus"
              spy={true}
              smooth="easeInOutQuart"
              offset={-100}
              duration={800}
              onClick={() => setMobileToggle(false)}
            >
              {t('header.contact')}
            </ScrollLink>
          </li>
        </ul>
        {/* Top Menu */}
        <div className="d-flex align-items-center gap-3">
          <ThemeToggle />
          <LanguageSwitcher />
          <ScrollLink
            to="contactus"
            spy={true}
            smooth="easeInOutQuart"
            offset={-100}
            duration={800}
            onClick={() => setMobileToggle(false)}
            className="px-btn d-none d-lg-inline-flex"
          >
            {t('header.letsTalk')}
          </ScrollLink>
          <button
            className="toggler-menu d-lg-none"
            onClick={() => setMobileToggle(!mobileToggle)}
          >
            <span />
          </button>
        </div>
        {/* / */}
      </div>
    </div>
  );
}
