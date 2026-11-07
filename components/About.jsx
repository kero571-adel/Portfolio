"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function About() {
  const t = useTranslations("about");

  const stats = [
    { number: "10+", label: t("stats.projects") },
    { number: "2", label: t("stats.internships") },
    { number: "15+", label: t("stats.technologies") },
  ];

  const facts = ["location", "availability", "stack"].map((key) => ({
    label: t(`quickFacts.${key}`),
    value: t(`quickFacts.${key}Value`),
  }));

  const steps = ["planning", "development", "optimization"].map((key, i) => ({
    title: t(`approach.${key}.title`),
    description: t(`approach.${key}.desc`),
    number: `0${i + 1}`,
  }));

  return (
    <section id="about" className="py-20 relative">
      <div className="container-max">
        <motion.h2 className="section-title text-center mb-16" {...fadeUp}>
          <span className="gradient-text">{t("title")}</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text + stats */}
          <motion.div className="space-y-6" {...fadeUp}>
            <p className="text-slate-300 text-lg leading-relaxed">
              {t("paragraph1")}
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              {t("paragraph2")}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="card-base text-center">
                  <p className="text-3xl font-bold gradient-text mb-1">
                    {stat.number}
                  </p>
                  <p className="text-slate-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick facts */}
          <motion.div className="card-base space-y-5" {...fadeUp}>
            <h3 className="text-xl font-bold text-slate-100">
              {t("quickFacts.title")}
            </h3>

            <dl className="space-y-4">
              {facts.map((item) => (
                <div key={item.label}>
                  <dt className="text-slate-400 text-sm font-semibold">
                    {item.label}
                  </dt>
                  <dd className="text-slate-100 mt-1">{item.value}</dd>
                </div>
              ))}
            </dl>

            <a href="#contact" className="btn-primary w-full text-center block">
              {t("cta")}
            </a>
          </motion.div>
        </div>

        {/* Approach */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-3xl font-bold gradient-text opacity-40">
                {step.number}
              </span>
              <h3 className="text-lg font-bold text-slate-100 mt-2 mb-2">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}