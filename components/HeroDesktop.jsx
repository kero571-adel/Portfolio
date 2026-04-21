"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
export default function HeroDesktop() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  const t = useTranslations("hero");

  // Animation variants
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

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-1 overflow-hidden">
      {/* Animated Background Gradient Circle */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500 via-purple-400 to-blue-300 blur-3xl opacity-30"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-0 bottom-0 w-80 h-80 rounded-full bg-gradient-to-tr from-purple-500 via-blue-400 to-transparent blur-3xl opacity-20"
        animate={{
          scale: [1, 0.9, 1],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-slate-100">{t("greeting")} </span>
                <span className="gradient-text">{t("name")}</span>
                <span className="text-slate-100">,</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-200">
                {t("role")}
              </h2>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-full shadow-lg shadow-blue-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
               {t("viewWork")}
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-bold rounded-full hover:bg-blue-400/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("contactMe")}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            className="relative hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Large Background Circle */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-400 to-blue-300 opacity-40"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Image Container */}
            <motion.div
              className="relative w-80 h-96 z-10"
              variants={floatingVariants}
              animate="animate"
            >
              <div className="relative w-full h-full  overflow-hidden ">
                <Image
                  src="/WhatsApp Image 2026-03-15 at 4.35.19 PM-Photoroom.png"
                  alt="Keroles Adel"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 100vw, 320px"
                />
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-10 -right-10 text-6xl opacity-50"
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ✨
              </motion.div>

              <motion.div
                className="absolute -bottom-5 -left-5 text-5xl opacity-50"
                animate={{ rotate: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              >
                💫
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
