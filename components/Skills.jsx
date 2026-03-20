"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 90, icon: "⚛️" },
        { name: "Next.js", level: 85, icon: "▲" },
        { name: "JavaScript (ES6+)", level: 90, icon: "📜" },
        { name: "TypeScript", level: 80, icon: "🔷" },
        { name: "HTML5", level: 95, icon: "🏗️" },
        { name: "CSS3", level: 90, icon: "🎨" },
      ],
    },

    styling: {
      title: "Styling & UI",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Tailwind CSS", level: 90, icon: "🎯" },
        { name: "Material UI", level: 85, icon: "🧩" },
        { name: "ShadCN UI", level: 85, icon: "🧱" },
        { name: "Bootstrap", level: 85, icon: "🅱️" },
        { name: "SASS", level: 80, icon: "💅" },
        { name: "Responsive Design", level: 90, icon: "📱" },
      ],
    },

    tools: {
      title: "Tools & Platforms",
      icon: "🛠️",
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Git", level: 90, icon: "🌳" },
        { name: "GitHub", level: 90, icon: "🐙" },
        { name: "Postman", level: 85, icon: "📬" },
        { name: "Figma", level: 80, icon: "🎨" },
        { name: "Vercel", level: 90, icon: "▲" },
        { name: "Netlify", level: 90, icon: "🌐" },
      ],
    },
  };

  const categories = Object.keys(skillCategories);
  const current = skillCategories[activeCategory];

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
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I use to build modern web applications
          </p>
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
          {[
            {
              title: "Quick Learner",
              description: "Rapidly adapt to new technologies and frameworks",
              icon: "⚡",
              color: "from-yellow-500 to-orange-500",
            },
            {
              title: "Best Practices",
              description:
                "Follow industry standards and clean code principles",
              icon: "✨",
              color: "from-blue-500 to-purple-500",
            },
            {
              title: "Continuous Growth",
              description: "Always learning and improving my craft",
              icon: "📈",
              color: "from-green-500 to-emerald-500",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="card-base card-hover text-center"
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
