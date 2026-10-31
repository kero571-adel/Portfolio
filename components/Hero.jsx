"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { getImageProps } from "next/image";
import { useTranslations } from "next-intl";

/* ───────────────────────── إعدادات سريعة ───────────────────────── */
const ACCENT = "#FFA96A";
const DESKTOP_IMAGE = "/hero.webp";
const MOBILE_IMAGE = "/logo.webp";
// صورة شفافة 1x1: بتخلي المتصفح ما يحمّلش صورة الشاشة التانية
const BLANK =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

/* ───────────────────────── أنيميشن CSS فقط ─────────────────────────
   مهم للـ LCP: الصور مفيهاش opacity:0 ولا delay، فبتظهر من أول frame */
const CSS = `
@keyframes h-up    { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:none; } }
@keyframes h-pop   { from { opacity:0; transform:scale(.8); }        to { opacity:1; transform:none; } }
@keyframes h-fade  { from { opacity:0; }                              to { opacity:1; } }
@keyframes h-rise-m{ from { transform:translateY(70px) scale(.94); }  to { transform:none; } }
@keyframes h-rise-d{ from { transform:translateY(40px) scale(.97); }  to { transform:none; } }
@keyframes h-float { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-14px); } }
@keyframes h-blob  { 0%,100% { transform:translate(0,0) scale(1); }   50% { transform:translate(20px,-10px) scale(1.1); } }

/* موبايل */
.hm-badge  { animation: h-pop  .5s ease-out .15s both; }
.hm-title  { animation: h-up   .6s ease-out .3s both; }
.hm-circle { animation: h-fade .6s ease-in-out .15s both; }
.hm-photo  { animation: h-rise-m .7s cubic-bezier(.34,1.35,.64,1) both; }
.hm-pill   { animation: h-up   .5s ease-out .7s both; }

/* ديسكتوب */
.hd-eyebrow { animation: h-up .6s ease-out .05s both; }
.hd-title   { animation: h-up .7s ease-out .15s both; }
.hd-role    { animation: h-up .7s ease-out .3s both; }
.hd-btns    { animation: h-up .7s ease-out .45s both; }
.hd-card    { animation: h-rise-d .9s cubic-bezier(.22,1,.36,1) both; }
.hd-float   { animation: h-float 5s ease-in-out 1s infinite; }
.hd-brk     { animation: h-fade .6s ease-out .7s both; }
.hd-blob    { animation: h-blob 7s ease-in-out infinite; }

@media (prefers-reduced-motion: reduce) {
  .hm-badge,.hm-title,.hm-circle,.hm-photo,.hm-pill,
  .hd-eyebrow,.hd-title,.hd-role,.hd-btns,.hd-card,.hd-float,.hd-brk,.hd-blob { animation: none; }
}
`;

/* صورة بتتحمّل على نوع الشاشة المناسب بس (art direction) */
function Photo({ src, alt, sizes, hideOn, className = "", quality = 75 }) {
  const { props } = getImageProps({
    src,
    alt,
    fill: true,
    sizes,
    quality,
    priority: true,
    fetchPriority: "high",
  });
  const media = hideOn === "desktop" ? "(min-width:1024px)" : "(max-width:1023px)";
  return (
    <picture>
      <source media={media} srcSet={BLANK} />
      <img {...props} className={className} />
    </picture>
  );
}

const scrollTo = (id) => (e) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

/* ───────────────────────── Mobile ───────────────────────── */
function HeroMobile({ t }) {
  const [active, setActive] = useState("portfolio");

  return (
    <section className="grid h-[100dvh] w-full grid-rows-[1fr_auto] overflow-hidden pt-[80px] lg:hidden">
      <div className="flex min-h-0 w-full flex-col items-center justify-center">
        {/* Badge */}
        <div className="hm-badge relative mb-4 inline-flex justify-center">
          <div className="z-10 inline-flex items-center gap-1 rounded-full border border-gray-400 bg-transparent px-6 py-1.5 text-sm font-medium">
            {t("helloBadge")}
          </div>
          <div className="absolute -right-6 -top-4 text-orange-400">
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
        </div>

        {/* Heading */}
        <div className="hm-title relative z-10 mb-4 w-full px-2 text-center">
          <h1 className="text-[clamp(1.75rem,5vw,3rem)] font-bold leading-tight">
            {t("greeting")}{" "}
            <span style={{ color: ACCENT }}>{t("name")}</span>,<br />
            {t("role")}
          </h1>
        </div>
      </div>

      {/* الصورة + نص الدايرة + الأزرار */}
      <div className="relative flex w-full flex-col items-center justify-end">
        <div className="hm-circle absolute bottom-0 left-1/2 z-10 h-[300px] w-screen -translate-x-1/2 overflow-hidden rounded-t-full bg-[#46444475]" />

        <div className="hm-photo pointer-events-none relative bottom-0 z-20 mb-0 h-[420px] w-[340px]">
          <Photo
            src={MOBILE_IMAGE}
            alt="Keroles Adel"
            sizes="340px"
            hideOn="desktop"
            quality={70}
            className="object-contain object-bottom"
          />
        </div>

        <div className="absolute inset-x-0 bottom-12 z-30 flex justify-center">
          <div className="hm-pill flex items-center rounded-full border border-white/60 bg-transparent p-1 backdrop-blur-md">
            <a
              href="#projects"
              onClick={(e) => {
                setActive("portfolio");
                scrollTo("projects")(e);
              }}
              className="flex items-center gap-2 rounded-full px-6 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: active === "portfolio" ? ACCENT : "transparent",
              }}
            >
              {t("projectsBtn")} <span className="text-lg leading-none">↗</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                setActive("hire");
                scrollTo("contact")(e);
              }}
              className="rounded-full px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: active === "hire" ? ACCENT : "transparent",
              }}
            >
              {t("hireMeBtn")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Desktop ───────────────────────── */
function HeroDesktop({ t }) {
  return (
    <section className="relative hidden min-h-screen items-center overflow-hidden pb-12 pt-24 lg:flex">
      {/* خلفية متحركة */}
      <div
        className="hd-blob pointer-events-none absolute -right-24 top-1/3 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: `radial-gradient(circle, ${ACCENT}, transparent 70%)` }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-2 items-center gap-14 px-6">
        {/* النص */}
        <div>
          <p
            className="hd-eyebrow flex items-center gap-2 font-mono text-[11px] uppercase tracking-[.12em]"
            style={{ color: ACCENT }}
          >
            <i
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: ACCENT }}
            />
            {t("helloBadge")}
          </p>

          <h1 className="mt-3 text-5xl font-bold leading-[1.1] tracking-[-.02em] xl:text-6xl">
            <span className="hd-title block text-slate-100">
              {t("greeting")} <span style={{ color: ACCENT }}>{t("name")}</span>,
            </span>
            <span className="hd-role mt-1 block text-slate-200">{t("role")}</span>
          </h1>

          <div className="hd-btns mt-9 flex gap-3">
            <a
              href="#projects"
              onClick={scrollTo("projects")}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl px-8 text-sm font-bold text-[#1b1208] transition-transform duration-300 hover:-translate-y-0.5 active:scale-95"
              style={{
                backgroundColor: ACCENT,
                boxShadow: "0 10px 40px -10px rgba(255,169,106,.6)",
              }}
            >
              {t("viewWork")}
            </a>
            <a
              href="#contact"
              onClick={scrollTo("contact")}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#212022] px-8 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2a292b] active:scale-95"
            >
              {t("contactMe")}
            </a>
          </div>
        </div>

        {/* الصورة الكبيرة على الجنب */}
        <div className="hd-card justify-self-end">
          <div className="hd-float">
            <div
              className="relative h-[min(74vh,660px)] w-[min(470px,42vw)] overflow-hidden rounded-[30px] border border-white/5 bg-[#17161a]"
              style={{
                boxShadow:
                  "0 30px 80px -25px rgba(0,0,0,.9), 0 0 60px -30px rgba(255,169,106,.4)",
              }}
            >
              <Photo
                src={DESKTOP_IMAGE}
                alt="Keroles Adel"
                sizes="470px"
                hideOn="mobile"
                quality={78}
                className="object-cover object-[50%_20%]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.3),transparent_22%,transparent_60%,rgba(8,7,9,.7))]" />
              <span className="hd-brk absolute left-4 top-4 h-3.5 w-3.5 border-l-[1.5px] border-t-[1.5px] border-white/60" />
              <span className="hd-brk absolute right-4 top-4 h-3.5 w-3.5 border-r-[1.5px] border-t-[1.5px] border-white/60" />
              <span className="hd-brk absolute bottom-4 left-4 h-3.5 w-3.5 border-b-[1.5px] border-l-[1.5px] border-white/60" />
              <span className="hd-brk absolute bottom-4 right-4 h-3.5 w-3.5 border-b-[1.5px] border-r-[1.5px] border-white/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Hero (ملف واحد) ───────────────────────── */
export default function Hero() {
  const t = useTranslations("hero");

  return (
    <>
      <style>{CSS}</style>
      <HeroMobile t={t} />
      <HeroDesktop t={t} />
    </>
  );
}