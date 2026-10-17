import { useTranslations } from "next-intl";
import { CLIENT_SITE_DATA } from "@/data/clientSites";

import { motion } from "framer-motion";
const NAMES = CLIENT_SITE_DATA.map((d) => d[1]);

export default function Brands() {
  const t = useTranslations("brands");

  return (
    <section
      aria-label={t("title")}
      className="relative border-y border-slate-700/50 bg-slate-900/40 py-6"
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          <span className="gradient-text">{t("title")}</span>
        </h2>
      </motion.div>
      {/* dir="ltr" عشان اتجاه الحركة ميتقلبش في الصفحة العربي */}
      <div
        dir="ltr"
        className="marquee overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
      >
        <ul className="marquee-track flex w-max items-center">
          {[...NAMES, ...NAMES].map((name, i) => (
            <li
              key={i}
              aria-hidden={i >= NAMES.length}
              className="flex shrink-0 items-center whitespace-nowrap text-lg font-bold text-slate-300 sm:text-xl"
            >
              <span className="px-6 sm:px-10">{name}</span>
              <span aria-hidden="true" className="text-xs text-blue-400/70">
                ✦
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
