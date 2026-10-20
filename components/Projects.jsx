"use client";
import {
  memo,
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { CLIENT_SITE_DATA } from "../data/clientSites";

/* ---------------------------------- */
/* Static data */
/* ---------------------------------- */

const CATEGORY_IDS = [
  "all",
  "platform",
  "ecommerce",
  "portfolio",
  "media",
  "ugc",
  "landing",
];
const UI_KEYS = [
  "preview",
  "open",
  "desktop",
  "mobile",
  "loading",
  "closePreview",
  "closeImage",
  "live",
];

const GRADIENTS = [
  "from-pink-500 to-rose-500",
  "from-violet-500 to-fuchsia-500",
  "from-sky-500 to-indigo-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-cyan-500 to-blue-500",
];

// موقع عميل: بيتعرض لايف فوق في الكارت، وبيتفتح كمعاينة كبيرة بالضغط عليه
const site = (t, id, title, category, link, i, dashboard = false) => ({
  id,
  title,
  description:
    t(`sites.desc.${category}`) + (dashboard ? t("sites.desc.dashboard") : ""),
  category,
  link,
  preview: true,
  image: null,
  tags: dashboard
    ? ["Next.js", "Tailwind CSS", "Firebase", "Cloudinary", "Dashboard"]
    : ["Next.js", "Tailwind CSS"],
  features: dashboard
    ? [
        t("sites.features.responsive"),
        t("sites.features.fast"),
        t("sites.features.dashboard"),
      ]
    : [t("sites.features.responsive"), t("sites.features.fast")],
  gradient: GRADIENTS[i % GRADIENTS.length],
});

function buildProjects(t) {
  return [
    {
      id: 12,
      title: t("projects.doctormate.title"),
      description: t("projects.doctormate.desc"),
      image: "/imageProject/ChatGPT Image 28 مايو 2026، 07_58_59 م.png",
      tags: ["React", "Firebase", "Redux Toolkit", "Agora RTC", "MUI"],
      category: "platform",
      link: "https://doctor-mate.vercel.app",
      gradient: "from-cyan-500 to-blue-600",
      features: [1, 2, 3, 4].map((n) =>
        t(`projects.doctormate.features.feature${n}`),
      ),
    },
    {
      id: 10,
      title: t("projects.eduplatform.title"),
      description: t("projects.eduplatform.desc"),
      image: "/imageProject/WhatsApp Image 2026-05-28 at 5.40.20 PM.jpeg",
      tags: ["Next.js", "Firebase", "Tailwind CSS", "Framer Motion"],
      category: "platform",
      link: "https://edu-platform-nine-eta.vercel.app/login",
      gradient: "from-purple-500 to-indigo-500",
      features: [
        "Course Management System",
        "Student Dashboard",
        "Authentication System",
        "Responsive UI",
      ],
    },
    {
      // مطعم: عدة صفحات + checkout بيبعت الأوردر على واتساب
      id: 4,
      title: t("projects.restaurant.title"),
      description: t("projects.restaurant.desc"),
      image: "/imageProject/WhatsApp Image 2026-03-22 at 2.41.59 PM (1).jpeg",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Context API"],
      category: "ecommerce",
      link: "https://crunchybite.vercel.app/",
      gradient: "from-orange-500 to-red-500",
      features: [1, 2, 3, 4, 5, 6].map((n) =>
        t(`projects.restaurant.features.feature${n}`),
      ),
    },
    {
      id: 3,
      title: t("projects.studytrack.title"),
      description: t("projects.studytrack.desc"),
      image: "/imageProject/WhatsApp Image 2026-03-21 at 7.54.21 PM.jpeg",
      tags: ["React", "Redux Toolkit", "Firebase", "Framer Motion"],
      category: "platform",
      link: "https://study-track-nu.vercel.app/",
      gradient: "from-pink-500 to-purple-500",
      features: [
        "Task Management System",
        "Progress Tracking Dashboard",
        "Firebase Integration",
        "Responsive UI",
      ],
    },
    {
      id: 11,
      title: t("projects.devwear.title"),
      description: t("projects.devwear.desc"),
      image: "/imageProject/a_خلى_الخلفيه_dark_قلي.webp",
      tags: [
        "Next.js",
        "Firebase",
        "Tailwind CSS",
        "Framer Motion",
        "Dashboard",
      ],
      category: "ecommerce",
      link: "https://my-prand.vercel.app/",
      gradient: "from-green-500 to-lime-600",
      features: [1, 2, 3, 4].map((n) =>
        t(`projects.devwear.features.feature${n}`),
      ),
    },
    {
      id: 5,
      title: t("projects.ecommerce.title"),
      description: t("projects.ecommerce.desc"),
      image: "/imageProject/WhatsApp Image 2026-03-22 at 3.17.54 PM.jpeg",
      tags: ["React", "React Router", "Context API", "Bootstrap"],
      category: "ecommerce",
      link: "https://store-three-ten.vercel.app/",
      gradient: "from-green-500 to-emerald-500",
      features: [
        "Cart & User Interaction Management",
        "Client-side Routing",
        "Responsive UI Design",
        "Reusable Components",
      ],
    },
    {
      id: 6,
      title: t("projects.weather.title"),
      description: t("projects.weather.desc"),
      image: "/imageProject/WhatsApp Image 2026-03-22 at 2.42.00 PM.jpeg",
      tags: ["React", "Axios", "Material UI"],
      category: "platform",
      link: "https://lustrous-meerkat-c75d89.netlify.app/",
      gradient: "from-yellow-500 to-orange-500",
      features: [
        "Real-Time API Data Fetching",
        "Search by Location",
        "Error Handling & Loading States",
        "Reusable Components",
      ],
    },
    {
      id: 7,
      title: t("projects.facebook.title"),
      description: t("projects.facebook.desc"),
      image: "📱",
      tags: ["HTML", "CSS", "JavaScript", "Axios"],
      category: "platform",
      link: "https://spiffy-sprite-1fc859.netlify.app/",
      gradient: "from-indigo-500 to-blue-500",
      features: [
        "Create/Edit/Delete Posts",
        "Comments System",
        "Authentication using localStorage",
        "API Integration with Axios",
      ],
    },
    {
      id: 9,
      title: t("projects.pharmacy.title"),
      description: t("projects.pharmacy.desc"),
      image: "/imageProject/Screenshot 2026-04-21 013205.png",
      tags: ["Next.js", "Tailwind CSS", "SEO", "RTL", "Landing Page"],
      category: "landing",
      link: "https://ourpharmacies.vercel.app/",
      gradient: "from-green-500 to-teal-500",
      features: [
        "Modern Landing Page Design",
        "Arabic RTL Localization",
        "Services Showcase Sections",
        "SEO Optimization (Meta + JSON-LD)",
        "Responsive UI Across Devices",
        "WhatsApp Quick Contact Integration",
      ],
    },
    ...CLIENT_SITE_DATA.map((d) => site(t, ...d)),
  ];
}

/* ---------------------------------- */
/* Helpers */
/* ---------------------------------- */

const isRealImage = (src) =>
  !!src && src.startsWith("/") && !/^[\p{Emoji}]+$/u.test(src.trim());

const hostOf = (url) => {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
};

// preconnect لما المستخدم يقف على الكارت، فالمعاينة الكبيرة تفتح أسرع
const warmed = new Set();
function warm(url) {
  if (typeof document === "undefined") return;
  try {
    const origin = new URL(url).origin;
    if (warmed.has(origin)) return;
    warmed.add(origin);
    const l = document.createElement("link");
    l.rel = "preconnect";
    l.href = origin;
    document.head.appendChild(l);
  } catch {}
}

function useModalLock(open, onClose) {
  useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus?.();
    };
  }, [open, onClose]);
}

const CloseIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

/* ---------------------------------- */
/* LiveFrame: موقع لايف مصغّر جوه الكارت */
/* - بيتحمّل بس لما الكارت يظهر على الشاشة، وبيتشال لما يبعد */
/* - ارتفاع الحاوية ثابت => مفيش CLS */
/* - pointer-events:none عشان الضغط يروح للزرار الشفاف فوقه */
/* ---------------------------------- */

const FRAME_W = 1280; // عرض الديسكتوب اللي بنصغّره
const FRAME_BOX_H = 192; // = h-48

function LiveFrame({ url, title, host, gradient }) {
  const boxRef = useRef(null);
  const [scale, setScale] = useState(0.3);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [saveData, setSaveData] = useState(false);

  useEffect(() => {
    setSaveData(!!navigator.connection?.saveData);
    const el = boxRef.current;
    if (!el) return;

    const ro = new ResizeObserver(([e]) => {
      setScale(e.contentRect.width / FRAME_W);
    });
    ro.observe(el);

    const io = new IntersectionObserver(
      ([e]) => {
        setInView(e.isIntersecting);
        if (!e.isIntersecting) setLoaded(false);
      },
      { rootMargin: "150px" },
    );
    io.observe(el);

    return () => {
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  const showFrame = inView && !saveData;

  return (
    <div ref={boxRef} className="absolute inset-0 overflow-hidden bg-slate-900">
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br ${gradient} transition-opacity duration-300 ${
          loaded ? "opacity-0" : "opacity-90"
        }`}
      >
        <span className="h-6 w-6 animate-spin rounded-full border-2 border-white/40 border-t-white" />
        <span dir="ltr" className="text-xs font-semibold text-white/90">
          {host}
        </span>
      </div>

      {showFrame && (
        <iframe
          src={url}
          title={title}
          tabIndex={-1}
          aria-hidden="true"
          loading="lazy"
          referrerPolicy="no-referrer"
          sandbox="allow-scripts allow-same-origin"
          onLoad={() => setLoaded(true)}
          style={{
            width: FRAME_W,
            height: FRAME_BOX_H / scale,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
          className={`pointer-events-none absolute left-0 top-0 border-0 bg-white transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}

/* ---------------------------------- */
/* Project card */
/* ---------------------------------- */

const ProjectCard = memo(function ProjectCard({
  project,
  liveDemoLabel,
  moreLabel,
  ui,
  onZoom,
  onPreview,
}) {
  const hasRealImage = isRealImage(project.image);
  const canPreview = !!project.preview;
  const showLive = canPreview && !hasRealImage;

  const headerAction = hasRealImage
    ? () => onZoom(project.image)
    : canPreview
      ? () => onPreview(project)
      : undefined;

  return (
    <motion.article
      className="group bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors duration-300 flex flex-col h-full"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* الهيدر: ارتفاع ثابت h-48 => مفيش CLS */}
      <div className="relative h-48 overflow-hidden">
        {hasRealImage ? (
          <>
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
            />
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              loading="lazy"
            />
            <span className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </span>
            </span>
          </>
        ) : showLive ? (
          <>
            <LiveFrame
              url={project.link}
              title={project.title}
              host={hostOf(project.link)}
              gradient={project.gradient}
            />
            <span className="pointer-events-none absolute top-2 end-2 z-10 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-bold text-white">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              {ui.live}
            </span>
            <span className="pointer-events-none absolute inset-0 z-[5] flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white border border-white/30">
                {ui.preview}
              </span>
            </span>
          </>
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-7xl select-none">
            {project.image}
          </span>
        )}

        {/* زرار شفاف فوق الهيدر: بياخد الضغط بدل الـ iframe */}
        {headerAction && (
          <button
            type="button"
            onClick={headerAction}
            onPointerEnter={canPreview ? () => warm(project.link) : undefined}
            onFocus={canPreview ? () => warm(project.link) : undefined}
            aria-label={
              showLive ? `${ui.preview}: ${project.title}` : project.title
            }
            className="absolute inset-0 z-20 cursor-pointer"
          />
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 mb-4 leading-relaxed flex-grow text-sm">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.features.slice(0, 3).map((feature, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-300 border border-slate-600/50"
            >
              ✓ {feature}
            </span>
          ))}
          {project.features.length > 3 && (
            <span className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-400">
              +{project.features.length - 3} {moreLabel}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className={`px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-xs text-slate-100 border border-slate-700/50`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {canPreview ? (
            <>
              <button
                type="button"
                onClick={() => onPreview(project)}
                onPointerEnter={() => warm(project.link)}
                onFocus={() => warm(project.link)}
                className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-lg text-white text-sm font-semibold transition-shadow duration-300 hover:shadow-lg`}
              >
                {ui.preview}
              </button>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white text-sm font-semibold transition-colors"
              >
                {ui.open}
              </a>
            </>
          ) : (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-lg text-white text-sm font-semibold transition-shadow duration-300 hover:shadow-lg`}
            >
              {liveDemoLabel}
              <svg
                className="w-4 h-4 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
});

/* ---------------------------------- */
/* Live preview modal (كبير): الـ iframe بيتعمل وقت الفتح بس */
/* ---------------------------------- */

function LivePreview({ project, ui, onClose }) {
  const [device, setDevice] = useState("desktop");
  const [loaded, setLoaded] = useState(false);
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col bg-black/90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
    >
      <div
        className="flex items-center justify-between gap-3 px-4 py-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">
            {project.title}
          </p>
          <p dir="ltr" className="truncate text-xs text-slate-400">
            {hostOf(project.link)}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div
            className="hidden sm:flex rounded-lg bg-slate-800 p-1 text-xs font-semibold"
            role="group"
          >
            {["desktop", "mobile"].map((d) => (
              <button
                key={d}
                type="button"
                aria-pressed={device === d}
                onClick={() => setDevice(d)}
                className={`rounded-md px-3 py-1.5 transition-colors ${
                  device === d
                    ? "bg-blue-500 text-white"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {ui[d]}
              </button>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-slate-800 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-700"
          >
            {ui.open}
          </a>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={ui.closePreview}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white border border-slate-600 hover:bg-slate-700"
          >
            <CloseIcon />
          </button>
        </div>
      </div>

      <div
        className="flex flex-1 justify-center px-3 pb-3 min-h-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`relative h-full overflow-hidden rounded-xl bg-white shadow-2xl ${
            device === "mobile" ? "w-[390px] max-w-full" : "w-full max-w-6xl"
          }`}
        >
          {!loaded && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-slate-900 text-slate-300">
              <span className="h-8 w-8 animate-spin rounded-full border-2 border-slate-600 border-t-blue-400" />
              <span className="text-sm">{ui.loading}</span>
            </div>
          )}
          <iframe
            src={project.link}
            title={project.title}
            onLoad={() => setLoaded(true)}
            referrerPolicy="no-referrer"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            className="h-full w-full border-0 bg-white"
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------------------------- */
/* Main section */
/* ---------------------------------- */

export default function Projects() {
  const t = useTranslations("projects");

  // كل نصوص الواجهة جاية من ملفات اللغة (projects.ui.*)
  const ui = useMemo(
    () => Object.fromEntries(UI_KEYS.map((k) => [k, t(`ui.${k}`)])),
    [t],
  );

  const [filter, setFilter] = useState("all");
  const deferredFilter = useDeferredValue(filter); // الزرار بيتلوّن فوراً والكروت بعده (INP)
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewProject, setPreviewProject] = useState(null);

  const closeImage = useCallback(() => setSelectedImage(null), []);
  const closePreview = useCallback(() => setPreviewProject(null), []);
  useModalLock(!!selectedImage, closeImage);
  useModalLock(!!previewProject, closePreview);

  const projects = useMemo(() => buildProjects(t), [t]);

  const counts = useMemo(() => {
    const c = { all: projects.length };
    for (const p of projects) c[p.category] = (c[p.category] || 0) + 1;
    return c;
  }, [projects]);

  const visible = useMemo(
    () =>
      deferredFilter === "all"
        ? projects
        : projects.filter((p) => p.category === deferredFilter),
    [projects, deferredFilter],
  );

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Category filters */}
        <div
          role="tablist"
          aria-label={t("ui.tabsLabel")}
          className="mb-10 flex gap-2.5 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible [scrollbar-width:none]"
        >
          {CATEGORY_IDS.filter((id) => id === "all" || counts[id]).map((id) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={filter === id}
              onClick={() => setFilter(id)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                filter === id
                  ? "border-blue-500 bg-blue-500 text-white"
                  : "border-slate-700 bg-slate-800/40 text-slate-300 hover:border-blue-500/60"
              }`}
            >
              {t(`categories.${id}`)}
              <span className="ms-2 text-xs opacity-70">{counts[id]}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {visible.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              ui={ui}
              liveDemoLabel={t("liveDemo")}
              moreLabel={t("features.more")}
              onZoom={setSelectedImage}
              onPreview={setPreviewProject}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center py-12 bg-slate-800/40 border border-slate-700/50 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-slate-100">
            {t("viewMore")}
          </h3>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            {t("viewMoreDesc")}
          </p>
          <a
            href="https://github.com/kero571-adel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            {t("githubCTA")}
          </a>
        </motion.div>
      </div>

      {/* Image lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeImage}
            role="dialog"
            aria-modal="true"
            aria-label={ui.closeImage}
          >
            <button
              type="button"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-white border border-slate-600 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                closeImage();
              }}
              aria-label={ui.closeImage}
            >
              <CloseIcon />
            </button>

            <motion.div
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt=""
                width={1920}
                height={1080}
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="rounded-lg shadow-2xl object-contain max-h-[90vh] w-auto"
              />
            </motion.div>

            <p className="absolute bottom-6 text-slate-400 text-sm">
              {t("lightbox.hint")}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Live preview */}
      <AnimatePresence>
        {previewProject && (
          <LivePreview
            project={previewProject}
            ui={ui}
            onClose={closePreview}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
