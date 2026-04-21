"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("projects");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState({});

  // منع الـ Scroll عند فتح الـ Lightbox
  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  // دالة للتحقق لو القيمة صورة حقيقية أو Emoji
  const isRealImage = (src) => {
    return src && src.startsWith("/") && !/^[\p{Emoji}]+$/u.test(src.trim());
  };

  // إغلاق الـ Lightbox عند ضغط Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const projects = [
    {
      id: 3,
      title: t("projects.studytrack.title"),
      description: t("projects.studytrack.desc"),
      image: "/imageProject/WhatsApp Image 2026-03-21 at 7.54.21 PM.jpeg",
      tags: ["React", "Redux Toolkit", "Firebase", "Framer Motion"],
      category: "frontend",
      link: "https://study-track-nu.vercel.app/",
      github: "#",
      gradient: "from-pink-500 to-purple-500",
      features: [
        "Task Management System",
        "Progress Tracking Dashboard",
        "Firebase Integration",
        "Responsive UI",
      ],
    },
    {
      id: 4,
      title: t("projects.restaurant.title"),
      description: t("projects.restaurant.desc"),
      image: "/imageProject/WhatsApp Image 2026-03-22 at 2.41.59 PM (1).jpeg",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      category: "frontend",
      link: "https://crunchybite.vercel.app/",
      github: "#",
      gradient: "from-orange-500 to-red-500",
      features: [
        "Interactive Food Menu",
        "Cart System using Context API",
        "Smooth Animations",
        "Responsive Design",
      ],
    },
    {
      id: 5,
      title: t("projects.ecommerce.title"),
      description: t("projects.ecommerce.desc"),
      image: "/imageProject/WhatsApp Image 2026-03-22 at 3.17.54 PM.jpeg",
      tags: ["React", "React Router", "Context API", "Bootstrap"],
      category: "frontend",
      link: "https://willowy-llama-affd20.netlify.app/",
      github: "#",
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
      category: "frontend",
      link: "https://lustrous-meerkat-c75d89.netlify.app/",
      github: "#",
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
      category: "frontend",
      link: "https://spiffy-sprite-1fc859.netlify.app/",
      github: "#",
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
      category: "frontend",
      link: "https://ourpharmacies.vercel.app/",
      github: "#",
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
    {
      id: 8,
      title: t("projects.fullstack.title"),
      description: t("projects.fullstack.desc"),
      image: "⚡",
      tags: ["Next.js", "Prisma", "MySQL", "Tailwind CSS"],
      category: "fullstack",
      link: "#",
      github: "#",
      gradient: "from-teal-500 to-green-500",
      features: [
        "Full CRUD Operations",
        "Database Design (Prisma + MySQL)",
        "SSR & CSR using Next.js",
        "REST API Routes",
      ],
    },
    {
      id: 1,
      title: t("projects.safarni.title"),
      description: t("projects.safarni.desc"),
      image: "✈️",
      tags: ["React", "Redux Toolkit", "Tailwind CSS", "MUI"],
      category: "frontend",
      link: "https://r7-react-safarni.vercel.app/",
      github: "#",
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Flight Booking & Reservation System",
        "Secure Payment Integration",
        "Destinations & Favorites System",
        "Compare Flights Feature",
        "REST API Integration",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
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

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => {
            const hasRealImage = isRealImage(project.image);
            return (
              <motion.div
                key={project.id}
                className="group bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full"
                variants={itemVariants}
                layout
              >
                {/* Project Image/Emoji Header */}
                <div
                  className="relative h-48 overflow-hidden cursor-pointer"
                  onClick={() =>
                    hasRealImage && setSelectedImage(project.image)
                  }
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  />

                  {hasRealImage ? (
                    <>
                      {/* Real Image */}
                      {!isImageLoaded[project.id] && (
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
                          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                        </div>
                      )}
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={`object-cover transition-transform duration-500 group-hover:scale-110 ${
                          isImageLoaded[project.id]
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        onLoad={() =>
                          setIsImageLoaded((prev) => ({
                            ...prev,
                            [project.id]: true,
                          }))
                        }
                        onError={() =>
                          setIsImageLoaded((prev) => ({
                            ...prev,
                            [project.id]: true,
                          }))
                        }
                      />
                      {/* Zoom Icon Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      >
                        <motion.div
                          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </motion.div>
                      </motion.div>
                    </>
                  ) : (
                    /* Emoji Placeholder */
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.span
                        className="text-7xl select-none"
                        animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        {project.image}
                      </motion.span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 leading-relaxed flex-grow text-sm">
                    {project.description}
                  </p>

                  {/* Features */}
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
                        +{project.features.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 rounded-full text-xs text-slate-300 border border-slate-700/50`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  {project.id !== 8 && (
                    <div className="flex gap-3">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-lg text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg`}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {t("liveDemo")}
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </motion.a>
                      {/* {project.github !== "#" && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white text-sm font-semibold transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Code
                      </motion.a>
                    )} */}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center py-12 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl"
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
          <motion.a
            href="https://github.com/kero571-adel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            {t("githubCTA")}
          </motion.a>
        </motion.div>
      </div>

      {/* ===== Image Lightbox / Zoom Modal ===== */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-white border border-slate-600 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Close image preview"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>

            {/* Zoomed Image */}
            <motion.div
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Project preview - zoomed"
                width={1920}
                height={1080}
                className="rounded-lg shadow-2xl shadow-blue-500/20 object-contain max-h-[90vh] w-auto"
                priority
              />
            </motion.div>

            {/* Hint Text */}
            <motion.p
              className="absolute bottom-6 text-slate-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {t("lightbox.hint")}{" "}
              <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Esc</kbd>{" "}
              to close
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
