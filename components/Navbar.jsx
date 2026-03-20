"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

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
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass backdrop-blur-md border-b border-slate-700/50 py-3 shadow-lg shadow-blue-500/5"
          : "py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-max flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <motion.div
            className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500/50 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/WhatsApp Image 2026-03-15 at 4.35.19 PM-Photoroom.png"
              alt="Keroles Adel"
              fill
              className="object-cover"
              sizes="40px"
            />
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <motion.div
          className="hidden md:flex gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link, index) => (
            <motion.div key={link.href} variants={itemVariants}>
              <Link
                href={link.href}
                className="text-slate-300 hover:text-blue-400 transition-colors duration-300 relative group font-medium"
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300 w-0"
                  layoutId={`underline-${index}`}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          className="hidden md:flex px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold transition-all duration-300"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          Let's Talk
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-blue-400 relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="h-0.5 w-6 bg-current transition-all duration-300"
            animate={
              mobileMenuOpen
                ? { rotate: 45, translateY: 8 }
                : { rotate: 0, translateY: 0 }
            }
          />
          <motion.div
            className="h-0.5 w-6 bg-current transition-all duration-300"
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.div
            className="h-0.5 w-6 bg-current transition-all duration-300"
            animate={
              mobileMenuOpen
                ? { rotate: -45, translateY: -8 }
                : { rotate: 0, translateY: 0 }
            }
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full glass border-b border-slate-700/50 py-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-max flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors font-medium py-2 block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="#contact"
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold text-center hover:shadow-lg transition-all duration-300 mt-2"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
