"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const categories = {
  frontend: ["react", "nextjs", "javascript", "typescript", "html5", "css3"],
  styling: ["tailwind", "mui", "shadcn", "bootstrap", "sass", "responsive"],
  quality: ["testing", "performance", "seo", "geo"],
  tools: ["git", "github", "postman", "figma", "vercel", "netlify"],
};

export default function Skills() {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="py-20 relative">
      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">{t("title")}</span>
          </h2>
          <p className="section-subtitle">{t("subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(categories).map(([category, skills], i) => (
            <motion.div
              key={category}
              className="card-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-lg font-bold text-slate-100 mb-4">
                {t(`categories.${category}.title`)}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm text-slate-200 bg-slate-800/60 border border-slate-700/50"
                  >
                    {t(`${category}.${skill}`)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}