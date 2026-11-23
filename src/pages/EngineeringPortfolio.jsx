import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
import "../scss/engineering.scss";
import {
  Globe,
  Code,
  Users,
  Phone,
  Terminal,
  Database,
  Server,
  Cloud,
  Activity,
  Sun,
  Moon,
  ArrowUpRight,
} from "lucide-react";
import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";

const ScrollRibbon = lazy(() =>
  import("../components/LuxuryThree").then((m) => ({ default: m.ScrollRibbon })),
);

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
    skillsSec: { title: "TECHNOLOGIES" },
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
    skillsSec: { title: "تەکنەلۆژیاکان" },
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
    skillsSec: { title: "التقنيات" },
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
    thumbUrl: "/images/morinaapp.png",
    url: "https://morina.app",
    type: { en: "Web App & Ticketing", ku: "وێب ئەپ و بلیت", ar: "تطبيق ويب وتذاكر" }[lang],
    langages: "React.js, Node.js, Express, Tailwind",
    title: "Morina App",
    description: {
      en: "An event management and ticketing platform for concerts, exhibitions, and bazaars with real-time seat and ticket booking.",
      ku: "پلاتفۆرمی بەڕێوەبردنی بۆنە و بڕینی بلیت بۆ کۆنسێرت، پێشانگا و بازاڕەکان لەگەڵ سیستەمی بڕینی بلیتی ڕاستەوخۆ.",
      ar: "منصة لإدارة الفعاليات وحجز التذاكر للحفلات الموسيقية والمعارض والبازارات مع نظام حجز التذاكر المباشر.",
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

const extra = {
  en: {
    cta1: "View projects",
    scroll: "Scroll",
    home: "Home",
  },
  ku: {
    cta1: "پڕۆژەکان ببینە",
    scroll: "سکرۆڵ بکە",
    home: "سەرەکی",
  },
  ar: {
    cta1: "عرض المشاريع",
    scroll: "مرر للأسفل",
    home: "الرئيسية",
  },
};

/* Fade / rise on scroll */
const Reveal = ({ children, className = "", delay = 0, as: Tag = "div" }) => {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!("IntersectionObserver" in window)) {
      setSeen(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={`rx-reveal ${seen ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

/* Project card with 3D tilt on pointer devices */
const TiltCard = ({ project, visitLabel, delay }) => {
  const ref = useRef(null);
  const canHover = () =>
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const onMove = (e) => {
    const el = ref.current;
    if (!el || !canHover()) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - py) * 9}deg`);
    el.style.setProperty("--ry", `${(px - 0.5) * 11}deg`);
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  const isLive = project.url && project.url !== "#";

  return (
    <Reveal delay={delay} className="rx-card-slot">
      <article
        className="rx-card"
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
      >
        <div className="rx-card-media">
          <img
            src={project.thumbUrl}
            alt={project.title}
            loading="lazy"
            decoding="async"
          />
          <span className="rx-card-kind">{project.type}</span>
        </div>
        <div className="rx-card-body">
          <h3 className="rx-card-title" dir="ltr">
            {project.title.trim()}
          </h3>
          <p className="rx-card-desc">{project.description}</p>
          <div className="rx-tags" dir="ltr">
            {project.langages.split(",").map((tech, i) => (
              <span className="rx-tag" key={i}>
                {tech.trim()}
              </span>
            ))}
          </div>
          {isLive && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rx-card-link"
            >
              {visitLabel}
              <ArrowUpRight size={18} className="rx-flip" />
            </a>
          )}
        </div>
        <span className="rx-card-shine" />
      </article>
    </Reveal>
  );
};

/* Animated number that counts up when scrolled into view */
const Count = ({ to, suffix = "" }) => {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let raf = 0;
    const run = () => {
      const start = performance.now();
      const dur = 1800;
      const tick = (now) => {
        const p = Math.min(1, (now - start) / dur);
        setVal(Math.round(to * (1 - Math.pow(1 - p, 4))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    if (!("IntersectionObserver" in window)) {
      setVal(to);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [to]);
  return (
    <span ref={ref} dir="ltr">
      {val.toLocaleString("en")}
      {suffix}
    </span>
  );
};

const LangSwitch = ({ lang, setLang }) => (
  <div className="rx-lang" role="group" aria-label="Language">
    {["en", "ku", "ar"].map((l) => (
      <button
        key={l}
        className={lang === l ? "active" : ""}
        onClick={() => setLang(l)}
      >
        {l.toUpperCase()}
      </button>
    ))}
  </div>
);

const App = () => {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("rx-theme");
      if (saved) return saved;
      return window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    } catch (e) {
      return "dark";
    }
  });
  const [lang, setLang] = useState("ku");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const rootRef = useRef(null);
  const barRef = useRef(null);

  const t = translations[lang];
  const x = extra[lang];
  const isRTL = lang === "ku" || lang === "ar";
  const projects = getProjects(lang);

  /* Page background follows theme */
  useEffect(() => {
    document.body.style.background = theme === "dark" ? "#2B2D31" : "#D9DADC";
    document.body.style.margin = "0";
    document.documentElement.style.background =
      theme === "dark" ? "#2B2D31" : "#D9DADC";
    try {
      localStorage.setItem("rx-theme", theme);
    } catch (e) {
      /* ignore */
    }
  }, [theme]);

  /* Close mobile menu with Escape / when resized to desktop */
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setIsMenuOpen(false);
    const onResize = () => window.innerWidth > 900 && setIsMenuOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  /* Lock page scroll while mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  /* Scroll driven CSS variables + progress bar */
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      if (barRef.current)
        barRef.current.style.transform = `scaleX(${Math.min(1, y / max)})`;
      if (rootRef.current) rootRef.current.style.setProperty("--y", y);
      setScrolled(y > 24);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const navItems = [
    ["about", t.nav.about],
    ["projects", t.nav.projects],
    ["skills", t.nav.skills],
    ["contact", t.nav.contact],
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = encodeURIComponent(
      `${f.get("name")} (${f.get("email")})\n\n${f.get("message")}`,
    );
    window.open(`https://wa.me/9647725194590?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const projectNames = [
    ...projects.map((p) => p.title.trim()),
    "Market Management System",
    "Shop Management System",
  ];

  return (
    <div
      className="portfolio-container rx-root"
      data-theme={theme}
      data-lang={lang}
      dir={isRTL ? "rtl" : "ltr"}
      ref={rootRef}
    >
      <div className="rx-progress">
        <span ref={barRef} />
      </div>

      {/* NAV */}
      <header className={`rx-nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="rx-nav-bar">
          <a href="#about" className="rx-brand" aria-label="Rawand Rebwar">
            <img src="/logo21.png" alt="Logo" />
          </a>

          <nav className="rx-links" aria-label="Main">
            {navItems.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>

          <div className="rx-actions">
            <LangSwitch lang={lang} setLang={setLang} />
            <button
              className="rx-icon-btn"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="#contact" className="rx-btn rx-btn-gold rx-desktop-only">
              {t.nav.getInTouch}
            </a>
            <button
              className={`rx-icon-btn rx-burger ${isMenuOpen ? "is-open" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              <span className="rx-burger-lines">
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`rx-drawer ${isMenuOpen ? "open" : ""}`}>
        {navItems.map(([id, label], i) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setIsMenuOpen(false)}
            style={{ transitionDelay: `${80 + i * 60}ms` }}
          >
            <span>0{i + 1}</span>
            {label}
          </a>
        ))}
        <a
          href="#contact"
          className="rx-btn rx-btn-gold"
          onClick={() => setIsMenuOpen(false)}
        >
          {t.nav.getInTouch}
        </a>
        <div className="rx-drawer-foot">
          <LangSwitch lang={lang} setLang={setLang} />
          <span>© {new Date().getFullYear()} Rawand Rebwar</span>
        </div>
      </div>

      <main className="rx-main">
        {/* HERO */}
        <section className="rx-hero" id="about">
          <div className="rx-hero-grid">
            <div className="rx-hero-copy">
              <Reveal className="rx-accent-line" />

              <Reveal as="h1" className="rx-hero-title" delay={80}>
                {t.hero.intro && <span className="rx-dim">{t.hero.intro} </span>}
                <span className="rx-gold-text">{t.hero.name}</span>
                <span className="rx-dim">{t.hero.title}</span>
              </Reveal>

              <Reveal as="p" className="rx-hero-bio" delay={160}>
                {t.hero.bio}
              </Reveal>

              <Reveal className="rx-cta" delay={240}>
                <a href="#projects" className="rx-btn rx-btn-gold">
                  {x.cta1}
                  <ArrowUpRight size={18} className="rx-flip" />
                </a>
                <a href="#contact" className="rx-btn rx-btn-ghost">
                  {t.nav.getInTouch}
                </a>
              </Reveal>

              <Reveal className="rx-metrics" delay={320}>
                <div className="rx-metric">
                  <Globe size={20} />
                  <strong>
                    <Count to={15} suffix="+" />
                  </strong>
                  <span>{t.hero.liveProjects}</span>
                </div>
                <div className="rx-metric">
                  <Code size={20} />
                  <strong>
                    <Count to={5} suffix="+" />
                  </strong>
                  <span>{t.hero.yearsExp}</span>
                </div>
                <div className="rx-metric">
                  <Users size={20} />
                  <strong>
                    <Count to={10000} suffix="+" />
                  </strong>
                  <span>{t.hero.activeUsers}</span>
                </div>
              </Reveal>
            </div>

            <Reveal className="rx-portrait-col" delay={140}>
              <div className="rx-portrait-clean">
                <span className="rx-corner rx-corner-tl" aria-hidden="true" />
                <span className="rx-corner rx-corner-br" aria-hidden="true" />
                <div className="rx-portrait-dots" aria-hidden="true" />

                <img
                  src="/me/img1-removebg-preview.png"
                  alt="Rawand Rebwar"
                  className="rx-portrait-img"
                  decoding="async"
                />

                <div className="rx-portrait-baseline" aria-hidden="true" />

                <div className="rx-float-chip rx-chip-top" dir="ltr">
                  <span className="rx-chip-dot" />
                  Software Engineer
                </div>
                <div className="rx-float-chip rx-chip-bottom" dir="ltr">
                  <Code size={14} />
                  Backend · Web · Cloud
                </div>
                <div className="rx-float-chip rx-chip-side" dir="ltr">
                  <Server size={14} />
                  Scalable Systems
                </div>
              </div>
            </Reveal>
          </div>

          <div className="rx-scroll-cue" aria-hidden="true">
            <span>{x.scroll}</span>
            <i />
          </div>
        </section>

        {/* PROJECTS MARQUEE + THREE.JS SCROLL RIBBON */}
        <div className="rx-band">
          <Suspense fallback={null}>
            <ScrollRibbon theme={theme} />
          </Suspense>
          <div className="rx-marquee" dir="ltr" aria-label="Projects showcase">
            <div className="rx-marquee-track">
              {[...projectNames, ...projectNames].map((name, i) => (
                <a href="#projects" key={i} className="rx-marquee-item">
                  {name}
                  <i />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* PROJECTS */}
        <section className="rx-section" id="projects">
          <Reveal className="rx-head">
            <span className="rx-index">01</span>
            <h2>{t.projectsSec.title}</h2>
            <p>{t.projectsSec.subtitle}</p>
          </Reveal>

          <div className="rx-grid">
            {projects.map((project, index) => (
              <TiltCard
                key={project.title + index}
                project={project}
                visitLabel={t.projectsSec.visitSite}
                delay={(index % 3) * 90}
              />
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="rx-section" id="skills">
          <Reveal className="rx-head">
            <span className="rx-index">02</span>
            <h2>{t.skillsSec.title}</h2>
          </Reveal>

          <div className="rx-skills" dir="ltr">
            {skillsData.map((cat, index) => (
              <Reveal
                key={cat.category}
                className="rx-skill"
                delay={(index % 3) * 90}
              >
                <div className="rx-skill-head">
                  <span className="rx-skill-icon">{cat.icon}</span>
                  <h3>{cat.category}</h3>
                </div>
                <div className="rx-tags">
                  {cat.items.map((skill) => (
                    <span className="rx-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="rx-section" id="contact">
          <Reveal className="rx-head">
            <span className="rx-index">03</span>
            <h2>{t.contactSec.title}</h2>
          </Reveal>

          <div className="rx-contact">
            <Reveal className="rx-panel">
              <h3>{t.contactSec.formTitle}</h3>
              <form onSubmit={handleSubmit}>
                <input
                  name="name"
                  type="text"
                  placeholder={t.contactSec.name}
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder={t.contactSec.email}
                  required
                />
                <textarea
                  name="message"
                  placeholder={t.contactSec.message}
                  rows="5"
                  required
                />
                <button type="submit" className="rx-btn rx-btn-gold">
                  {t.contactSec.submit}
                  <ArrowUpRight size={18} className="rx-flip" />
                </button>
              </form>
            </Reveal>

            <Reveal className="rx-panel" delay={120}>
              <h3>{t.contactSec.socialTitle}</h3>
              <ul className="rx-channels">
                <li>
                  <span className="rx-chan-icon">
                    <BsFacebook size={18} />
                  </span>
                  <a
                    href="https://www.facebook.com/rawandrebwar121/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.contactSec.fbPage}
                  </a>
                  <ArrowUpRight size={16} className="rx-chan-arrow rx-flip" />
                </li>
                <li>
                  <span className="rx-chan-icon">
                    <BsLinkedin size={18} />
                  </span>
                  <a
                    href="https://www.linkedin.com/in/rawandrebwar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.contactSec.linkedin}
                  </a>
                  <ArrowUpRight size={16} className="rx-chan-arrow rx-flip" />
                </li>
                <li>
                  <span className="rx-chan-icon">
                    <BsYoutube size={18} />
                  </span>
                  <a
                    href="https://www.youtube.com/@CodeLand"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.contactSec.youtube}
                  </a>
                  <ArrowUpRight size={16} className="rx-chan-arrow rx-flip" />
                </li>
                <li>
                  <span className="rx-chan-icon">
                    <Phone size={18} />
                  </span>
                  <a href="tel:+9647725194590" dir="ltr">
                    +964 772 519 4590
                  </a>
                  <ArrowUpRight size={16} className="rx-chan-arrow rx-flip" />
                </li>
              </ul>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="rx-foot">
        <img src="/logo21.png" alt="Logo" />
        <p>
          © {new Date().getFullYear()} Rawand Rebwar. {t.footer.rights}
        </p>
      </footer>
    </div>
  );
};

export default App;
