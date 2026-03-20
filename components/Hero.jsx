"use client";

import { useEffect, useState } from "react";
import HeroMobile from "./HeroMobile";
import HeroDesktop from "./HeroDesktop";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // تعيين الحجم الأولي
    handleResize();

    // الاستماع لتغيير حجم الشاشة
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // تجنب hydration mismatch
  if (!isLoaded) {
    return null;
  }

  return isMobile ? <HeroMobile /> : <HeroDesktop />;
}
