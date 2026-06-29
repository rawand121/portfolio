import React, { useState, useEffect } from "react";
import "../scss/engineering.scss";
import {
  Globe,
  Code,
  Users,
  Mail,
  Phone,
  Terminal,
  Database,
  Server,
  Cloud,
  Activity,
  Menu,
  X,
  Sun,
  Moon,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";

// --- FULL SITE TRANSLATIONS ---
const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      getInTouch: "Get In Touch",
    },
    hero: {
      intro: "I'M",
      name: "RAWAND REBWAR",
      title: ", A SOFTWARE ENGINEER.",
      bio: "I’m a software engineer with 5+ years of experience building scalable applications used across Iraq, the UAE, and Europe. I enjoy turning complex problems into simple, reliable solutions — with clean code and solid architecture. Currently open for freelance projects and collaborations.",
      liveProjects: "Live Projects",
      yearsExp: "Years Experience",
      activeUsers: "Daily Active Users",
    },
    projectsSec: {
      title: "SELECTED WORKS",
      subtitle:
        "A showcase of scalable platforms, high-traffic web applications, and intuitive user interfaces.",
      swipe: "Swipe to explore",
      techStack: "Tech Stack",
      visitSite: "Visit Site",
    },
    skillsSec: { title: "ENGINEERING CAPABILITIES" },
    contactSec: {
      title: "CONTACT & SOCIAL HUB",
      formTitle: "SEND ME A MESSAGE",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Submit",
      socialTitle: "PERSONAL CHANNELS",
      fbPage: "Facebook page.",
      youtube: "Youtube channel.",
      fbDesc: "(Personal Branding)",
      linkedin: "LinkedIn profile:",
      phone: "Phone:",
    },
    footer: { rights: "All rights reserved." },
  },
  ku: {
    nav: {
      about: "دەربارە",
      projects: "پڕۆژەکان",
      skills: "شارەزاییەکان",
      contact: "پەیوەندی",
      getInTouch: "پەیوەندیم پێوە بکە",
    },
    hero: {
      intro: "",
      name: "ڕەوەند ڕێبوار",
      title: "، ئەندازیاری پرۆگرامساز.",
      bio: "من ئەندازیاری پڕۆگرامسازیم بە زیاتر لە ٥ ساڵ ئەزموون لە دروستکردنی و ئەپلیکەیشنی گەورە و خێرا و پارێزراو کە لە عێراق، ئیمارات و ئەوروپا بەکاردەهێنرێن. هەمووکات بیردەکەمەوە لە گۆڕینی کێشە ئاڵۆزەکان بۆ چارەسەری سادە و جێی متمانە. لە ئێستادا ئامادەم بۆ پڕۆژەی فریلانس و کاری هاوبەش.",
      liveProjects: "پڕۆژەی کار",
      yearsExp: "ساڵ ئەزموون",
      activeUsers: "بەکارهێنەری ڕۆژانە",
    },
    projectsSec: {
      title: "کارە هەڵبژێردراوەکان",
      subtitle: "نموونەیەک لە پلاتفۆرمەکان، وێب ئەپلیکەیشن، وێبسایتەکان.",
      swipe: "ڕابکێشە بۆ بینین",
      techStack: "تەکنەلۆژیاکان",
      visitSite: "سەردانی ماڵپەڕ",
    },
    skillsSec: { title: "توانا ئەندازیارییەکان" },
    contactSec: {
      title: "پەیوەندی و تۆڕە کۆمەڵایەتییەکان",
      formTitle: "نامەیەکم بۆ بنێرە",
      name: "ناو",
      email: "ئیمەیڵ",
      message: "نامە",
      submit: "ناردن",
      socialTitle: "کەناڵە کەسییەکان",
      youtube: "کەناڵی یوتیوب.",
      fbPage: "پەیجی فەیسبووک.",
      fbDesc: "(بڕاندی کەسی)",
      linkedin: "پڕۆفایلی لینکدین:",
      phone: "ژمارە مۆبایل:",
    },
    footer: { rights: "هەموو مافێک پارێزراوە." },
  },
  ar: {
    nav: {
      about: "حول",
      projects: "المشاريع",
      skills: "المهارات",
      contact: "اتصل بي",
      getInTouch: "تواصل معي",
    },
    hero: {
      intro: "أنا",
      name: "رەوەند ریبوار",
      title: "، مهندس برمجيات .",
      bio: "أنا مهندس برمجيات بخبرة تزيد عن 5 سنوات في بناء تطبيقات قابلة للتوسع تُستخدم في جميع أنحاء العراق، الإمارات العربية المتحدة، وأوروبا. أستمتع بتحويل المشاكل المعقدة إلى حلول بسيطة وموثوقة — بكود نظيف وبنية معمارية متينة. متاح حالياً للمشاريع المستقلة والتعاون.",
      liveProjects: "مشاريع حية",
      yearsExp: "سنوات الخبرة",
      activeUsers: "مستخدم نشط يومياً",
    },
    projectsSec: {
      title: "أعمال مختارة",
      subtitle:
        "عرض للمنصات القابلة للتوسع وتطبيقات الويب عالية الزيارات وواجهات المستخدم البديهية.",
      swipe: "اسحب للاستكشاف",
      techStack: "التقنيات المستخدمة",
      visitSite: "زيارة الموقع",
    },
    skillsSec: { title: "القدرات الهندسية" },
    contactSec: {
      title: "التواصل والشبكات الاجتماعية",
      formTitle: "أرسل لي رسالة",
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      submit: "إرسال",
      socialTitle: "القنوات الشخصية",
      youtube: "قناة YouTube.",
      fbPage: "صفحة الفيسبوك.",
      fbDesc: "(علامة تجارية شخصية)",
      linkedin: "حساب لينكد إن:",
      phone: "رقم الهاتف:",
    },
    footer: { rights: "جميع الحقوق محفوظة." },
  },
};

// --- PROJECT DATA WITH TRANSLATIONS ---
const getProjects = (lang) => [
  {
    thumbUrl: "/images/morinamenu.png",
    url: "https://www.morinamenu.com",
    type: { en: "Digital Menu", ku: "مینیوی دیجیتاڵی", ar: "قائمة رقمية" }[
      lang
    ],
    langages: "Node.js, MySQL",
    title: "Morina Menu",
    description: {
      en: "Designed and developed a robust backend system handling user authentication, menu management, and order processing.",
      ku: "گەشەپێدانی سیستەمێکی باک-ئێندی بەهێز بۆ بەڕێوەبردنی بەکارهێنەران، مینیو، و داواکارییەکان.",
      ar: "تصميم وتطوير نظام خلفي قوي يتعامل مع مصادقة المستخدمين وإدارة القوائم ومعالجة الطلبات.",
    }[lang],
  },
  {
    thumbUrl: "/images/kdcde.png",
    url: "https://www.kdcde.org",
    type: { en: "NGO Website", ku: "وێبسایتی ڕێکخراو", ar: "موقع منظمة" }[lang],
    langages: "Node.js, MongoDB, Next.js",
    title: "KDCDE Website",
    description: {
      en: "Platform for the KDCDE Organization based in the UK, focusing on community outreach.",
      ku: "پلاتفۆرمێک بۆ ڕێکخراوی KDCDE لە بەریتانیا، بە ئامانجی خزمەتکردنی کۆمەڵگا.",
      ar: "منصة لمنظمة KDCDE ومقرها في المملكة المتحدة، تركز على التواصل المجتمعي.",
    }[lang],
  },
  {
    thumbUrl: "/images/cdo.png",
    url: "https://www.cdo-iraq.org",
    type: { en: "Website", ku: "وێبسایت", ar: "موقع إلكتروني" }[lang],
    langages: "Node.js, MongoDB, Next.js, Tailwind",
    title: "CDO Website",
    description: {
      en: "Developed a platform for an NGO providing free education to children in Iraq, hosted on Vercel.",
      ku: "پەرەپێدانی پلاتفۆرمێک بۆ ڕێکخراوێکی ناحکومی کە پەروەردەی بێبەرامبەر پێشکەش بە منداڵان دەکات لە عێراق.",
      ar: "تطوير منصة لمنظمة غير حكومية تقدم تعليماً مجانياً للأطفال في العراق، مستضافة على Vercel.",
    }[lang],
  },
  {
    thumbUrl: "/images/hybrid.png",
    url: "#",
    type: {
      en: "Management Systems",
      ku: "سیستەمی بەڕێوەبردن",
      ar: "أنظمة الإدارة",
    }[lang],
    langages: "Node.js, MySQL, React.js",
    title: "POS & Management",
    description: {
      en: "Built end-to-end POS platforms deployed across multiple establishments to track inventory and process transactions at scale.",
      ku: "دروستکردنی سیستەمی کاشێر و بەڕێوەبردن بۆ چەندین شوێنی جیاواز بۆ چاودێریکردنی کۆگا و مامەڵە داراییەکان.",
      ar: "بناء منصات نقاط بيع متكاملة نُشرت عبر عدة مؤسسات لتتبع المخزون ومعالجة المعاملات على نطاق واسع.",
    }[lang],
  },
  {
    thumbUrl: "/images/newroz.png",
    url: "https://newrozsportsclub.com",
    type: { en: "Web App", ku: "مۆبایل ئەپ", ar: "تطبيق ويب" }[lang],
    langages: "Node.js, Fastify, Next.js",
    title: "Newroz SC",
    description: {
      en: "Application to receive news, real-time scores, online shop, and purchase tickets through the app.",
      ku: "ئەپلیکەیشنی فەرمی یانەی نەورۆز بۆ وەرگرتنی هەواڵ، ئەنجامی ڕاستەوخۆ، فرۆشگای ئۆنلاین و کڕینی بلیت.",
      ar: "تطبيق لتلقي الأخبار والنتائج المباشرة والمتجر الإلكتروني وشراء التذاكر من خلال التطبيق.",
    }[lang],
  },
  {
    thumbUrl: "/images/plus4.png",
    url: "https://www.plus4.co",
    type: { en: "News Portal", ku: "پۆرتاڵی هەواڵ", ar: "بوابة إخبارية" }[lang],
    langages: "HTML, CSS, JS, Bootstrap",
    title: "Plus4 Website",
    description: {
      en: "Developed a news website for PLUS4, a Kurdish media platform delivering political, economic, and social news.",
      ku: "پەرەپێدانی وێبسایتی هەواڵ بۆ دەزگای پڵەس٤، کە پلاتفۆرمێکی میدیایی کوردییە بۆ هەواڵی سیاسی، ئابووری و کۆمەڵایەتی.",
      ar: "تطوير موقع إخباري لـ PLUS4، وهي منصة إعلامية كردية تقدم الأخبار السياسية والاقتصادية والاجتماعية.",
    }[lang],
  },
  {
    thumbUrl: "/images/nexusapp.png",
    url: "#",
    type: { en: "Nexus App", ku: "ئەپلیکەیشنی نێکسۆس", ar: "تطبيق نيكسوس" }[
      lang
    ],
    langages: "Node.js, Express, MongoDB",
    title: "  Nexus App",
    description: {
      en: "Application to get discount in other restaurants and cafes, and get points to redeem for free items. also there is a ranking system to reward the users with points.",
      ku: "ئەپلیکەیشنێک بۆ بەدەستهێنانی داشکاندن لە چێشتخانە و کافێی جیاوازدا، لەگەڵ کۆکردنەوەی خاڵ بۆ گۆڕینەوەیان بە دیاری و بڕگەی خۆڕایی. هەروەها سیستمێکی ڕیزبەندی (Ranking) تێدایە بۆ خەڵاتکردنی بەکارهێنەران بە خاڵی زیاتر.",
      ar: "تطبيق للحصول على خصم في مطاعم و كافيهات أخرى، والحصول على نقاط لتبديلها لعناصر مجانية. كما هناك نظام ترتيب لتكريم المستخدمين 'تطبيق للحصول على خصومات في مختلف المطاعم والمقاهي، وجمع النقاط لاستبدالها بوجبات أو عناصر مجانية. كما يوجد نظام تصنيف (Ranking) لمكافأة المستخدمين بنقاط إضافية",
    }[lang],
  },
  {
    thumbUrl: "/images/ocean.png",
    url: "https://www.ocean-wave.co",
    type: { en: "Corporate Website", ku: "وێبسایتی کۆمپانیا", ar: "موقع شركة" }[
      lang
    ],
    langages: "HTML, CSS, JS",
    title: "Ocean Wave",
    description: {
      en: "Showcasing services in general construction, logistics, and oil & gas sectors with a professional responsive design.",
      ku: "وێبسایتێک بۆ نیشاندانی خزمەتگوزارییەکانی بیناسازی، لۆجستی، و کەرتی نەوت و غاز بە دیزاینێکی پێشکەوتوو.",
      ar: "عرض الخدمات في مجالات البناء العام والخدمات اللوجستية وقطاعات النفط والغاز بتصميم احترافي متجاوب.",
    }[lang],
  },
  {
    thumbUrl: "/images/lokmada.png",
    url: "https://www.lokmada.com",
    type: {
      en: "Restaurant Website",
      ku: "وێبسایتی چێشتخانە",
      ar: "موقع مطعم",
    }[lang],
    langages: "HTML, CSS, JS",
    title: "Lokmada Website",
    description: {
      en: "A rich menu display including desserts and full meals, focused on a modern dining experience.",
      ku: "وێبسایتێک بۆ نیشاندانی مینیوی دەوڵەمەندی چێشتخانە کە شیرینی و ژەمە سەرەکییەکان لەخۆدەگرێت.",
      ar: "عرض قائمة غنية تشمل الحلويات والوجبات الكاملة، مع التركيز على تجربة تناول طعام حديثة.",
    }[lang],
  },
];

// Skills Array (Keys kept entirely in English as requested)
const skillsData = [
  {
    category: "Programming & Architecture",
    icon: <Terminal size={20} />,
    items: [
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Express.js",
      "Fastify",
      "Next.js",
      "React.js",
      "REST API Design",
      "Clean Architecture",
    ],
  },
  {
    category: "Databases & Caching",
    icon: <Database size={20} />,
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Data Modeling",
      "Query Optimization",
      "Transactions",
      "Supabase",
    ],
  },
  {
    category: "DevOps & Infrastructure",
    icon: <Server size={20} />,
    items: [
      "Docker",
      "Linux Admin",
      "Nginx",
      "PM2",
      "CI/CD Pipelines",
      "Git & GitHub",
      "BullMQ",
      "Load Handling",
    ],
  },
  {
    category: "Cloud Services",
    icon: <Cloud size={20} />,
    items: [
      "AWS EC2",
      "Google Cloud (GCP)",
      "S3 / GCS",
      "DigitalOcean",
      "Domain & DNS",
      "SSL / HTTPS",
      "Netlify",
    ],
  },
  {
    category: "Monitoring & Health",
    icon: <Activity size={20} />,
    items: [
      "Grafana",
      "Prometheus",
      "System Health",
      "Application Logging",
      "Error Tracking",
      "Node Exporter",
    ],
  },
];

const App = () => {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("ku"); // Translation state
  const t = translations[lang]; // Active dictionary

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 6;
  const activeProjects = getProjects(lang);
  const totalPages = Math.ceil(activeProjects.length / projectsPerPage);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const displayedProjects = isMobile
    ? activeProjects
    : activeProjects.slice(
        currentPage * projectsPerPage,
        (currentPage + 1) * projectsPerPage,
      );

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "dark" ? "#0B1120" : "#F8FAFC";
    document.body.style.margin = "0";
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const handleNextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };
  const handlePrevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  // Set direction based on language
  const isRTL = lang === "ku" || lang === "ar";

  return (
    <div
      className="portfolio-container"
      data-theme={theme}
      data-lang={lang}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="content-wrapper">
        {/* HEADER NAVIGATION */}
        <nav className="navbar">
          <div className="logo-placeholder">
            <img src="/logo21.png" alt="Logo" className="nav-logo" />
          </div>

          <ul className={`nav-links ${isMenuOpen ? "mobile-active" : ""}`}>
            <li>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                {t.nav.about}
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                {t.nav.projects}
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setIsMenuOpen(false)}>
                {t.nav.skills}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                {t.nav.contact}
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            {/* Global Language Switcher */}
            <div className="lang-switcher-global">
              <button
                className={lang === "en" ? "active" : ""}
                onClick={() => setLang("en")}
              >
                EN
              </button>
              <button
                className={lang === "ku" ? "active" : ""}
                onClick={() => setLang("ku")}
              >
                KU
              </button>
              <button
                className={lang === "ar" ? "active" : ""}
                onClick={() => setLang("ar")}
              >
                AR
              </button>
            </div>

            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="btn-primary desktop-only getInTouch">
              {t.nav.getInTouch}
            </button>
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* HERO SECTION */}
        <header className="hero-section" id="about">
          <div className="avatar-complex">
            <div className="glow-ring">
              <div className="inner-circle">
                <img
                  src="/me/img1-removebg-preview.png"
                  alt="Rawand Rebwar"
                  className="portrait"
                />
                {/* <div className="overlay-logo">
                  <img src="/logo21.png" alt="R Logo" />
                </div> */}
              </div>
            </div>
          </div>

          <h1 className="hero-title">
            {t.hero.intro} <span className="highlight">{t.hero.name}</span>
            {t.hero.title}
          </h1>

          <p className="hero-bio">{t.hero.bio}</p>

          <div className="metrics-container">
            <div className="metric-badge">
              <Globe className="icon" />
              <div className="text">
                <span className="number">15+</span>
                <span className="label">{t.hero.liveProjects}</span>
              </div>
            </div>
            <div className="metric-badge">
              <Code className="icon green" />
              <div className="text">
                <span className="number green">5+</span>
                <span className="label">{t.hero.yearsExp}</span>
              </div>
            </div>
            <div className="metric-badge">
              <Users className="icon" />
              <div className="text">
                <span className="number">10,000+</span>
                <span className="label">{t.hero.activeUsers}</span>
              </div>
            </div>
          </div>
        </header>

        {/* PROJECTS SHOWCASE */}
        <section className="projects-section" id="projects">
          <div className="section-header-modern">
            <h2 className="section-title">{t.projectsSec.title}</h2>
            <p className="section-subtitle">{t.projectsSec.subtitle}</p>
          </div>

          <div className="mobile-swipe-hint">
            <span>{t.projectsSec.swipe}</span>
            <div className="swipe-line"></div>
          </div>

          <div className="modern-projects-grid">
            {displayedProjects.map((project, index) => (
              <div
                className="modern-project-card"
                key={`${isMobile ? "m" : "d"}-${currentPage}-${index}`}
              >
                <div className="card-image-wrapper">
                  <img
                    src={project.thumbUrl}
                    alt={project.title}
                    className="project-thumbnail"
                  />
                  <div className="image-overlay">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-btn"
                    >
                      {t.projectsSec.visitSite}{" "}
                      <ArrowUpRight size={18} className="rtl-flip-icon" />
                    </a>
                  </div>
                </div>

                <div className="card-info">
                  <div className="info-header">
                    <span className="project-type">{project.type}</span>
                  </div>
                  {/* Keep Project Names English as branding */}
                  <h3 className="en-forced">{project.title}</h3>
                  <p className="description">{project.description}</p>

                  <div className="tech-tags">
                    {project.langages.split(",").map((tech, i) => (
                      <span className="tech-tag en-forced" key={i}>
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!isMobile && totalPages > 1 && (
            <div className="pagination-wrapper">
              <button
                className="page-btn rtl-flip-btn"
                onClick={handlePrevPage}
                disabled={currentPage === 0}
              >
                <ChevronLeft size={24} />
              </button>

              <div className="page-dots">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <span
                    key={idx}
                    className={`dot ${currentPage === idx ? "active" : ""}`}
                    onClick={() => setCurrentPage(idx)}
                  ></span>
                ))}
              </div>

              <button
                className="page-btn rtl-flip-btn"
                onClick={handleNextPage}
                disabled={currentPage === totalPages - 1}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </section>

        {/* SKILLS SECTION (English only as requested, except Title) */}
        <section id="skills">
          <div className="desktop-skills-wrapper">
            <h2 className="section-title">{t.skillsSec.title}</h2>
            <div className="tabbed-skills-container en-forced" dir="ltr">
              <div className="skills-sidebar">
                {skillsData.map((cat, index) => (
                  <button
                    key={index}
                    className={`tab-btn ${activeTab === index ? "active" : ""}`}
                    onClick={() => setActiveTab(index)}
                  >
                    {cat.icon}
                    <span>{cat.category}</span>
                  </button>
                ))}
              </div>
              <div className="skills-content">
                <h3 className="content-title">
                  {skillsData[activeTab].category}
                </h3>
                <div className="skill-tags-alt">
                  {skillsData[activeTab].items.map((skill, i) => (
                    <div className="tag-card" key={i}>
                      <span className="dot"></span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-skills-wrapper">
            <h2 className="section-title">{t.skillsSec.title}</h2>
            <div className="skills-matrix en-forced" dir="ltr">
              {skillsData.map((category, index) => (
                <div className="skill-category-card" key={index}>
                  <div className="category-header">
                    <div className="icon-wrapper">{category.icon}</div>
                    <h3>{category.category}</h3>
                  </div>
                  <div className="skill-tags">
                    {category.items.map((skill, i) => (
                      <span className="tag" key={i}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact-section" id="contact">
          <h2 className="section-title">{t.contactSec.title}</h2>
          <div className="contact-grid">
            <div className="contact-form-panel">
              <h3>{t.contactSec.formTitle}</h3>
              <form>
                <input type="text" placeholder={t.contactSec.name} />
                <input type="email" placeholder={t.contactSec.email} />
                <textarea
                  placeholder={t.contactSec.message}
                  rows="5"
                ></textarea>
                <button type="submit" className="btn-submit">
                  {t.contactSec.submit}
                </button>
              </form>
            </div>

            <div className="social-channels-panel">
              <h3>{t.contactSec.socialTitle}</h3>
              <ul className="channels-list">
                <li>
                  <div className="icon-wrapper">
                    <BsFacebook size={18} />
                  </div>
                  <div className="channel-info">
                    <a
                      href="https://www.facebook.com/rawandrebwar121/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>{t.contactSec.fbPage}</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper">
                    <BsLinkedin size={18} />
                  </div>
                  <div className="channel-info">
                    <a
                      href="https://www.linkedin.com/in/rawandrebwar"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>{t.contactSec.linkedin}</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper">
                    <BsYoutube size={18} />
                  </div>
                  <div className="channel-info">
                    <a
                      href="https://www.youtube.com/@CodeLand"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>{t.contactSec.youtube}</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper">
                    <Mail size={18} />
                  </div>
                  <div className="channel-info">
                    <strong>{t.contactSec.email}:</strong>
                    <a
                      href="mailto:contact@rawandrebwar.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="en-forced">
                        contact@rawandrebwar.dev
                      </span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper">
                    <Phone size={18} />
                  </div>
                  <div className="channel-info">
                    <a
                      href="tel:+9647725194590"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>{t.contactSec.phone}</strong>
                      <br />
                      <span className="en-forced" dir="ltr">
                        +964 772 519 4590
                      </span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <img src="/logo21.png" alt="Logo" className="footer-logo" />
          <p className="copyright">
            © {new Date().getFullYear()} Rawand Rebwar. {t.footer.rights}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
