"use client";

import { LazyMotion } from "framer-motion";

// نحمّل ميزات الأنيميشن بشكل متأخر (async) بدل ما تكون جزء من الـ bundle الأساسي
const loadFeatures = () =>
  import("./motionFeatures").then((mod) => mod.default);

export default function MotionProvider({ children }) {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
}
