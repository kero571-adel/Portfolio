"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const internships = [
  {
    key: "huma",
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
    key: "saiket",
    skills: ["HTML", "CSS", "JavaScript", "Git", "UI/UX"],
  },
];

const education = [
  { key: "cs" },
  {
    key: "react",
    link: "https://www.udemy.com/certificate/UC-28e228bf-2438-4ddb-a177-8291ab12442b/",
  },
  {
    key: "nextjs",
    link: "http://ude.my/UC-9fb8716c-e568-4c84-89b0-b7603cdf81aa",
  },
];

export default function Experience() {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="py-20 relative">
      <div className="container-max">
        <motion.div className="text-center mb-16" {...fadeUp}>
          <h2 className="section-title">
            <span className="gradient-text">{t("title")}</span>
          </h2>
          <p className="section-subtitle">{t("subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Internships */}
          <div>
            <h3 className="text-2xl font-bold mb-8">
              {t("sections.professional")}
            </h3>

            <div className="border-s-2 border-blue-500/40 space-y-6">
              {internships.map(({ key, skills }) => (
                <motion.div
                  key={key}
                  className="card-base relative ms-6"
                  {...fadeUp}
                >
                  <span className="absolute -start-[34px] top-7 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950" />

                  <h4 className="text-lg font-bold text-slate-100">
                    {t(`internships.${key}.title`)}
                  </h4>
                  <p className="text-blue-400 font-semibold">
                    {t(`internships.${key}.company`)}
                  </p>
                  <p className="text-slate-500 text-sm mb-4">
                    {t(`internships.${key}.duration`)}
                  </p>

                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {t(`internships.${key}.desc`)}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {t.raw(`internships.${key}.responsibilities`).map((item) => (
                      <li key={item} className="text-slate-400 text-sm flex gap-2">
                        <span className="text-blue-400 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-slate-800/50 rounded text-xs text-slate-400 border border-slate-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8">
              {t("sections.education")}
            </h3>

            <div className="space-y-6">
              {education.map(({ key, link }) => (
                <motion.div key={key} className="card-base" {...fadeUp}>
                  <h4 className="text-lg font-bold text-slate-100 mb-1">
                    {t(`education.${key}.degree`)}
                  </h4>
                  <p className="text-purple-400 font-semibold text-sm">
                    {t(`education.${key}.institution`)}
                  </p>
                  <p className="text-slate-500 text-sm">
                    {t(`education.${key}.year`)}
                  </p>

                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
                    >
                      {t("viewCertificate")}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}