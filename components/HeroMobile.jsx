"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
export default function HeroMobile() {
  const t = useTranslations("hero");
  const router = useRouter();
  const [activeButton, setActiveButton] = useState("portfolio");

  const handlePortfolioClick = () => {
    setActiveButton("portfolio");
    // يمكن إضافة أكشن إضافي هنا مثل Scroll أو Navigation
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHireClick = () => {
    setActiveButton("hire");
    router.push("#contact");
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      setTimeout(() => {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
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

  const imageVariants = {
    hidden: { y: 300, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  return (
    <section
      className="
    lg:hidden 
    w-full 
    h-[100dvh] 
    grid 
    grid-rows-[1fr_auto] 
    overflow-hidden 
    pt-[80px]
    "
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col items-center justify-center min-h-0"
      >
        {/* Heliot Badge - تحت Navbar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 relative inline-flex justify-center"
        >
          <div className="border border-gray-400 bg-transparent px-6 py-1.5 rounded-full text-sm font-medium inline-flex items-center gap-1 z-10">
            {t("helloBadge")}
          </div>
          {/* Decorative strokes top right */}
          <div className="absolute -top-4 -right-6 text-orange-400">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path
                d="M6 10L10 14M12 6L14 12M18 8L16 13"
                className="origin-center rotate-[30deg]"
              />
            </svg>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-8 text-center z-10 w-full px-2"
        >
          {/* Decorative strokes left */}
          <div className="absolute left-0 md:left-6 -bottom-6 text-orange-400"></div>
          <h3 className="text-[clamp(1.75rem,5vw,3rem)] font-bold leading-tight">
            {t("greeting")} <span className="text-orange-400">{t("name")}</span>
            ,<br />
            {t("role")}
          </h3>
        </motion.div>
      </motion.div>

      {/* Main Image & Layout Section - في النهاية السفلية */}
      <div className="relative w-full flex flex-col items-center justify-end">
        {/* Half Circle Background with smooth transition - اكبر حجم */}
        <motion.div
          animate={{ backgroundColor: "#46444475" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute w-screen h-[380px] md:w-[100%] md:h-[480px] rounded-t-full bottom-0 z-10 overflow-hidden"
          style={{ left: "50%", transform: "translateX(-50%)" }}
        ></motion.div>

        {/* Image with welcome animation - اكبر حجم */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="relative bottom-0 w-[340px] h-[480px] md:w-[420px] md:h-[580px] z-20 pointer-events-none mb-0"
        >
          <Image
            src="/WhatsApp Image 2026-03-15 at 4.35.19 PM-Photoroom.png"
            alt="profile"
            fill
            className="object-contain object-bottom"
            priority
          />
        </motion.div>

        {/* Container for Buttons - positioned overlapping the bottom border of the avatar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute bottom-12 flex items-center p-1 border border-white/60 bg-transparent backdrop-blur-md rounded-full z-30"
        >
          <motion.button
            onClick={handlePortfolioClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 text-white rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg transition-all duration-300"
            style={{
              backgroundColor:
                activeButton === "portfolio" ? "#FFA96A" : "transparent",
            }}
          >
            {t("projectsBtn")} <span className="text-lg leading-none">↗</span>
          </motion.button>

          <motion.button
            onClick={handleHireClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 text-white rounded-full text-sm font-semibold transition-all duration-300"
            style={{
              backgroundColor:
                activeButton === "hire" ? "#FFA96A" : "transparent",
            }}
          >
            {t("hireMeBtn")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
