"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const t = useTranslations("skills");

  const skillCategories = {
    frontend: {
      title: t("categories.frontend.title"),
      icon: t("categories.frontend.icon"),
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: t("frontend.react"), level: 90, icon: "⚛️" },
        { name: t("frontend.nextjs"), level: 85, icon: "▲" },
        { name: t("frontend.javascript"), level: 90, icon: "📜" },
        { name: t("frontend.typescript"), level: 80, icon: "🔷" },
        { name: t("frontend.html5"), level: 95, icon: "🏗️" },
        { name: t("frontend.css3"), level: 90, icon: "🎨" },
      ],
    },
    styling: {
      title: t("categories.styling.title"),
      icon: t("categories.styling.icon"),
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: t("styling.tailwind"), level: 90, icon: "🎯" },
        { name: t("styling.mui"), level: 85, icon: "🧩" },
        { name: t("styling.shadcn"), level: 85, icon: "🧱" },
        { name: t("styling.bootstrap"), level: 85, icon: "🅱️" },
        { name: t("styling.sass"), level: 80, icon: "💅" },
        { name: t("styling.responsive"), level: 90, icon: "📱" },
      ],
    },
    tools: {
      title: t("categories.tools.title"),
      icon: t("categories.tools.icon"),
      color: "from-green-500 to-teal-500",
      skills: [
        { name: t("tools.git"), level: 90, icon: "🌳" },
        { name: t("tools.github"), level: 90, icon: "🐙" },
        { name: t("tools.postman"), level: 85, icon: "📬" },
        { name: t("tools.figma"), level: 80, icon: "🎨" },
        { name: t("tools.vercel"), level: 90, icon: "▲" },
        { name: t("tools.netlify"), level: 90, icon: "🌐" },
      ],
    },
  };

  const categories = Object.keys(skillCategories);
  const current = skillCategories[activeCategory];
  const traits = [
    {
      title: t("traits.quickLearner.title"),
      description: t("traits.quickLearner.desc"),
      icon: "⚡",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: t("traits.bestPractices.title"),
      description: t("traits.bestPractices.desc"),
      icon: "✨",
      color: "from-blue-500 to-purple-500",
    },
    {
      title: t("traits.continuousGrowth.title"),
      description: t("traits.continuousGrowth.desc"),
      icon: "📈",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: t("traits.userFocus.title"),
      description: t("traits.userFocus.desc"),
      icon: "📈",
      color: "from-green-500 to-emerald-500",
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-20 relative">
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

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50"
                  : "glass text-slate-300 hover:text-slate-100"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="mr-2">{skillCategories[category].icon}</span>
              {skillCategories[category].title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory}
        >
          {current.skills.map((skill, index) => (
            <motion.div
              key={index}
              className="card-base card-hover"
              variants={itemVariants}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="font-semibold text-slate-100">{skill.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {traits.map((item, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="text-5xl mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
