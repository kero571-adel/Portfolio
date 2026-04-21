"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
export default function Experience() {
  const t = useTranslations("experience");
  const experiences = [
    {
      title: t("internships.huma.title"),
      company: t("internships.huma.company"),
      duration: t("internships.huma.duration"),
      description: t("internships.huma.desc"),
      responsibilities: t.raw("internships.huma.responsibilities"), // ✅ استخدام raw للمصفوفات
      skills: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Tailwind CSS",
        "ShadCN UI",
        "Material UI",
        "Git",
      ],
    },
    {
      title: t("internships.saiket.title"),
      company: t("internships.saiket.company"),
      duration: t("internships.saiket.duration"),
      description: t("internships.saiket.desc"),
      responsibilities: t.raw("internships.saiket.responsibilities"),
      skills: ["HTML", "CSS", "JavaScript", "Git", "UI/UX"],
    },
  ];
  const education = [
    {
      degree: t("education.cs.degree"),
      institution: t("education.cs.institution"),
      year: t("education.cs.year"),
      icon: "🎓",
    },
    {
      degree: t("education.react.degree"),
      institution: t("education.react.institution"),
      year: t("education.react.year"),
      icon: "⚛️",
      certificateLink:
        "https://www.udemy.com/certificate/UC-28e228bf-2438-4ddb-a177-8291ab12442b/",
    },
    {
      degree: t("education.nextjs.degree"),
      institution: t("education.nextjs.institution"),
      year: t("education.nextjs.year"),
      icon: "▲",
      certificateLink: "http://ude.my/UC-9fb8716c-e568-4c84-89b0-b7603cdf81aa",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  const learningPoints = t.raw("learningPoints");
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="gradient-text">{t("title")}</span>
          </h2>
          <p className="section-subtitle">{t("subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <motion.span
                className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"
                layoutId="experienceBorder"
              />
              {t("sections.professional")}
            </h3>

            <motion.div
              className="space-y-6 relative"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Timeline Line */}
              <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="card-base card-hover relative pl-8 group"
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute -left-4 top-6 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-slate-950 group-hover:scale-125 transition-transform shadow-lg shadow-blue-500/50"
                    whileHover={{ scale: 1.3 }}
                  />

                  <div className="mb-4">
                    <motion.h4
                      className="text-lg font-bold text-slate-100"
                      whileHover={{ color: "#60a5fa" }}
                    >
                      {exp.title}
                    </motion.h4>
                    <p className="text-blue-400 font-semibold">{exp.company}</p>
                    <p className="text-slate-500 text-sm">{exp.duration}</p>
                  </div>

                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((resp, i) => (
                      <motion.li
                        key={i}
                        className="text-slate-400 text-sm flex gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <span className="text-blue-400 font-bold flex-shrink-0">
                          ▸
                        </span>
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="px-2 py-1 bg-slate-800/50 rounded text-xs text-slate-400 border border-slate-700/50 hover:border-blue-500/50 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <motion.span
                className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full"
                layoutId="educationBorder"
              />
              {t("sections.education")}
            </h3>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="card-base card-hover"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="text-4xl flex-shrink-0"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    >
                      {edu.icon}
                    </motion.div>
                    <div className="flex-grow">
                      <motion.h4
                        className="text-lg font-bold text-slate-100 mb-1"
                        whileHover={{ color: "#60a5fa" }}
                      >
                        {edu.degree}
                      </motion.h4>
                      <p className="text-purple-400 font-semibold text-sm mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-slate-500 text-sm mb-3">{edu.year}</p>
                      <motion.a
                        href={edu.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        {t("viewCertificate")}
                        <motion.svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </motion.svg>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Continuous Learning */}
              <motion.div
                className="card-base card-hover"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <h4 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
                  <motion.span
                    className="text-2xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    📚
                  </motion.span>
                  {t("sections.continuousLearning")}
                </h4>
                <ul className="space-y-3 text-slate-400 text-sm">
                  {learningPoints.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <span className="text-green-400 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
