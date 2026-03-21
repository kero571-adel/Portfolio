"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 3,
      title: "StudyTrack – Study Management Dashboard",
      description:
        "Interactive study dashboard with task management, progress tracking, and Firebase integration.",
      image: "📊",
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
      title: "Restaurant Web App",
      description:
        "Modern restaurant application with menu browsing, cart system, and smooth animations.",
      image: "🍔",
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
      title: "E-Commerce Store",
      description:
        "Fully functional e-commerce application with cart management, routing system, and dynamic state handling using React Context.",
      image: "🛒",
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
      title: "Weather App",
      description:
        "Real-time weather application with API integration, search functionality, and advanced state handling.",
      image: "🌤️",
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
      title: "Facebook Clone",
      description:
        "Social media platform clone with full post system, authentication, and dynamic API integration.",
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
      id: 8,
      title: "Full-Stack Next.js App",
      description:
        "Full-stack application built with Next.js, Prisma, and MySQL with server-side rendering and full CRUD operations.",
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
      title: "Safarni – Travel Booking Platform",
      description:
        "Advanced travel booking platform with full flight booking flow, secure payment system, and dynamic state management using Redux Toolkit.",
      image: "✈️",
      tags: ["React", "Redux Toolkit", "Tailwind CSS", "MUI"],
      category: "frontend",
      link: "#",
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

    {
      id: 2,
      title: "Cure – Medical Consultation Platform",
      description:
        "Medical consultation platform with full authentication system, protected routes, and real-time doctor & appointment management.",
      image: "🩺",
      tags: ["React", "TypeScript", "Tailwind", "ShadCN UI"],
      category: "frontend",
      link: "#",
      github: "#",
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Authentication System (Login/Register)",
        "Protected Routes",
        "Doctor Profiles & Data",
        "Appointment Booking System",
        "API Integration",
      ],
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
    <section id="projects" className="py-20 relative">
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
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="section-subtitle">
            Showcasing my best work and technical expertise
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
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group card-base card-hover overflow-hidden flex flex-col h-full"
              variants={itemVariants}
              layout
            >
              {/* Project Header with Gradient */}
              <motion.div
                className={`h-40 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300 relative overflow-hidden flex items-center justify-center`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                <motion.div
                  className="relative z-10 text-6xl"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {project.image}
                </motion.div>
              </motion.div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <motion.h3
                  className="text-xl font-bold mb-2 text-slate-100 group-hover:text-blue-400 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  {project.title}
                </motion.h3>

                <p className="text-slate-400 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, i) => (
                    <motion.span
                      key={i}
                      className="px-2 py-1 bg-slate-800/50 rounded text-xs text-slate-300 border border-slate-700/50"
                      whileHover={{ scale: 1.1 }}
                    >
                      ✓ {feature}
                    </motion.span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 rounded-full text-xs text-slate-300 border border-slate-700/50`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.id !== 1 && project.id !== 2 && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-lg text-white font-semibold transition-all duration-300`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
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
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center py-12 card-base card-hover"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
          <p className="text-slate-400 mb-6">
            Explore more projects and code samples on my GitHub profile
          </p>
          <motion.a
            href="https://github.com/kero571-adel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
