"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Navigation: [
      { label: "Home", href: "#" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
    ],
    Resources: [
      { label: "GitHub", href: "https://github.com/kero571-adel" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/keroles-adel-08020b332/",
      },
      { label: "Contact", href: "#contact" },
    ],
  };

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
    <footer className="relative border-t border-slate-700/50 glass backdrop-blur-md p-3">
      <div className="container-max py-16">
        {/* Footer Content Grid */}
        <motion.div
          className="grid md:grid-cols-4 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold gradient-text mb-3">
              Keroles Adel
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Front-End Developer specializing in React.js and Next.js,
              passionate about
            </p>
            <p className="text-slate-500 text-xs mt-4">
              © {currentYear} All rights reserved.
            </p>
          </motion.div>

          {/* Navigation Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <motion.div key={title} variants={itemVariants}>
              <h4 className="text-lg font-bold text-slate-100 mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : "_self"}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : ""
                      }
                      className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-1 group"
                    >
                      {link.label}
                      {link.href.startsWith("http") && (
                        <motion.svg
                          className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ x: [0, 3, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: 0.2,
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </motion.svg>
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        {/* Divider */}
        <div className="border-t border-slate-700/50 py-8">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>
              Built with <span className="text-red-500">❤️</span> using Next.js,
              React & Tailwind CSS
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20"></div>
    </footer>
  );
}
