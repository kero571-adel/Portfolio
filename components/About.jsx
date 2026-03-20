"use client";

import { motion } from "framer-motion";

export default function About() {
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

  const stats = [
    { number: "10+", label: "Projects Built" },
    { number: "2", label: "Internships Completed" },
    { number: "15+", label: "Technologies Used" },
  ];

  const highlights = [
    "React & Next.js Development",
    "Responsive Web Applications",
    "Modern UI with Tailwind & MUI",
    "REST API Integration",
    "Redux Toolkit State Management",
    "Clean & Scalable Code",
  ];

  return (
    <section id="about" className="py-20 relative">
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
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know the developer behind the code
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.p className="text-slate-300 text-lg leading-relaxed">
              I'm a Front-End Developer specializing in React.js and Next.js.
              Currently studying Computer Science while gaining real-world
              experience through internships with international tech teams.
            </motion.p>

            <motion.p className="text-slate-300 text-lg leading-relaxed">
              I focus on building responsive, scalable, and high-performance web
              applications using modern technologies like React, Next.js,
              Tailwind CSS, and Redux Toolkit.
            </motion.p>

            <motion.p className="text-slate-300 text-lg leading-relaxed">
              I enjoy solving front-end challenges, creating clean and
              maintainable code, and turning complex ideas into smooth user
              experiences.
            </motion.p>

            {/* Key Highlights */}
            <motion.div className="space-y-3 mt-8" variants={containerVariants}>
              {highlights.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex gap-3 items-start"
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                >
                  <motion.div
                    className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1"
                    whileHover={{ scale: 1.2 }}
                  >
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <span className="text-slate-300 font-medium">{point}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Stats & Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-4 mb-8 justify-between"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="card-base card-hover text-center w-37.5"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <motion.p
                    className="text-3xl font-bold gradient-text mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      delay: 0.3 + index * 0.1,
                    }}
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-slate-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Quick Facts */}
            <motion.div
              className="card-base card-hover space-y-5"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-slate-100 mb-4">
                Quick Facts
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  { label: "Location", value: "Cairo, Egypt 🇪🇬", icon: "📍" },
                  {
                    label: "Availability",
                    value: "Open to Front-End opportunities",
                    icon: "🎯",
                  },
                  {
                    label: "Preferred Stack",
                    value: "React, Next.js, TypeScript",
                    icon: "⚙️",
                  },
                  {
                    label: "Response Time",
                    value: "Usually within 12 hours",
                    icon: "⚡",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                  >
                    <p className="text-slate-400 text-sm font-semibold flex items-center gap-2">
                      <span>{item.icon}</span>
                      {item.label}
                    </p>
                    <p className="text-slate-100 mt-1">{item.value}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                className="btn-primary w-full text-center mt-6 block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Work Together
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section - Approach */}
        <motion.div
          className="mt-20 grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              title: "Planning",
              description:
                "Understanding project requirements and defining the best technical approach.",
              icon: "📋",
              step: "01",
            },
            {
              title: "Development",
              description:
                "Building responsive and scalable interfaces using modern technologies.",
              icon: "💻",
              step: "02",
            },
            {
              title: "Optimization",
              description:
                "Improving performance, accessibility, and user experience.",
              icon: "⚡",
              step: "03",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="card-base card-hover text-center relative"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="text-6xl mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                {item.icon}
              </motion.div>
              <motion.div
                className="text-4xl font-bold gradient-text mb-3 opacity-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
              >
                {item.step}
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
