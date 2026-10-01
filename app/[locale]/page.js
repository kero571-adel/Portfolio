"use client";
import dynamic from "next/dynamic";
import MotionProvider from "@/components/MotionProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useState, useEffect } from "react";
// الأقسام اللي تحت الـ fold بتتقسم لـ chunks منفصلة (لسه بتتعمل render في الـ HTML بتاع السيرفر)
// ده بيقلل الـ JS اللي بيتنفذ في التحميل الأول (Unused JS + Main thread work)
const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));
const Projects = dynamic(() => import("@/components/Projects"));
const Experience = dynamic(() => import("@/components/Experience"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"));

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MotionProvider>
      <main className="relative w-full min-w-0 overflow-x-clip">
        <AnimatedBackground />
        <Navbar scrolled={scrolled} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </MotionProvider>
  );
}
