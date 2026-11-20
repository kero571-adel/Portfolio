"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

// الفقاعات من فوق لتحت. id = id السكشن في الصفحة
const ITEMS = [
  { key: "about", id: "about" },
  { key: "skills", id: "skills" },
  { key: "projects", id: "projects" },
  { key: "experience", id: "experience" },
  { key: "contact", id: "contact" },
];
const R = 98; // نصف قطر نص الدايرة
const NAVY = "#0b1530"; // لون خلفية الروبوت والفقاعات

function Robot() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
      <line x1="32" y1="9" x2="32" y2="15" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="7" r="4" fill="#67e8f9" />
      <rect x="9" y="15" width="46" height="36" rx="14" fill="#2563eb" />
      <rect x="14" y="21" width="36" height="22" rx="9" fill="#0a1128" />
      <g className="rg-eyes">
        <ellipse cx="25" cy="32" rx="3.2" ry="4" fill="#67e8f9" />
        <ellipse cx="39" cy="32" rx="3.2" ry="4" fill="#67e8f9" />
      </g>
      <path d="M27 38.5c2.6 2.4 7.4 2.4 10 0" stroke="#67e8f9" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="19" cy="38" r="2.4" fill="#1d4ed8" />
      <circle cx="45" cy="38" r="2.4" fill="#1d4ed8" />
      <rect x="3" y="28" width="6" height="12" rx="3" fill="#60a5fa" />
      <rect x="55" y="28" width="6" height="12" rx="3" fill="#60a5fa" />
    </svg>
  );
}

export default function RobotGuide() {
  const t = useTranslations("robot");
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [hello, setHello] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  // الرسالة بتختفي لوحدها عشان ما تغطيش المحتوى
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => setHello(false), 9000);
    return () => clearTimeout(timer);
  }, [show]);

  useEffect(() => {
    if (!open) return;
    const key = (e) => e.key === "Escape" && setOpen(false);
    const outside = (e) => {
      if (!e.target.closest("[data-robot]")) setOpen(false);
    };
    window.addEventListener("keydown", key);
    document.addEventListener("mousedown", outside);
    document.addEventListener("touchstart", outside);
    return () => {
      window.removeEventListener("keydown", key);
      document.removeEventListener("mousedown", outside);
      document.removeEventListener("touchstart", outside);
    };
  }, [open]);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 72,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  if (!show) return null;

  const step = 160 / (ITEMS.length - 1);

  return (
    <div data-robot className="rg-root fixed bottom-[46dvh] right-3 z-[9999] sm:bottom-40 print:hidden">
      <style>{`
        .rg-root{animation:rg-in .6s cubic-bezier(.2,1.3,.4,1) both}
        .rg-bot{animation:rg-float 3.2s ease-in-out infinite}
        .rg-eyes{transform-origin:32px 32px;animation:rg-blink 4s infinite}
        .rg-pulse{animation:rg-pulse 2s ease-out infinite}
        @keyframes rg-in{from{opacity:0;transform:translateX(80px)}to{opacity:1;transform:none}}
        @keyframes rg-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @keyframes rg-blink{0%,92%,100%{transform:scaleY(1)}95%{transform:scaleY(.1)}}
        @keyframes rg-pulse{0%{box-shadow:0 0 0 0 rgba(96,165,250,.55)}100%{box-shadow:0 0 0 16px rgba(96,165,250,0)}}
        @media (prefers-reduced-motion:reduce){.rg-root,.rg-bot,.rg-eyes,.rg-pulse{animation:none}}
      `}</style>

      <div className="relative h-16 w-16">
        {ITEMS.map(({ key, id }, i) => {
          const a = ((10 + i * step) * Math.PI) / 180; // من فوق لتحت ناحية الشمال
          const x = -Math.sin(a) * R;
          const y = -Math.cos(a) * R;
          return (
            <button
              key={id}
              type="button"
              tabIndex={open ? 0 : -1}
              aria-hidden={!open}
              onClick={() => go(id)}
              style={{
                background: NAVY,
                transform: open ? `translate(${x}px,${y}px) scale(1)` : "translate(0,0) scale(0)",
                transitionDelay: open ? `${i * 45}ms` : "0ms",
              }}
              className={`absolute left-1/2 top-1/2 -ml-[27px] -mt-[27px] grid h-[54px] w-[54px] place-items-center rounded-full border border-blue-400/40 px-1 text-[10px] font-semibold text-blue-100 shadow-lg transition duration-300 ease-out hover:bg-blue-600 hover:text-white ${
                open ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              {t(`items.${key}`)}
            </button>
          );
        })}

        {hello && !open && (
          <div
            className="absolute bottom-full right-0 mb-3 w-48 rounded-2xl rounded-br-sm border border-blue-400/30 p-3 text-[13px] leading-snug text-white shadow-xl"
            style={{ background: NAVY, paddingInlineEnd: 28 }}
          >
            <button
              type="button"
              onClick={() => {
                setOpen(true);
                setHello(false);
              }}
              className="block w-full"
              style={{ textAlign: "start" }}
            >
              {t("greeting")}
              <span className="mt-1 block text-[11px] font-semibold text-cyan-300">{t("tap")}</span>
            </button>
            <button
              type="button"
              aria-label={t("dismiss")}
              onClick={() => setHello(false)}
              className="absolute top-1.5 grid h-5 w-5 place-items-center rounded-full text-blue-200/70 hover:text-white"
              style={{ insetInlineEnd: 6 }}
            >
              ×
            </button>
          </div>
        )}

        <button
          type="button"
          aria-label={open ? t("close") : t("open")}
          aria-expanded={open}
          onClick={() => {
            setOpen((v) => !v);
            setHello(false);
          }}
          className={`rg-bot ${hello && !open ? "rg-pulse" : ""} relative h-16 w-16 rounded-full p-1.5 shadow-xl ring-2 ring-blue-400/50 transition hover:ring-blue-300`}
          style={{ background: NAVY }}
        >
          <Robot />
        </button>
        <button
          type="button"
          aria-label={t("hide")}
          onClick={() => {
            setShow(false);
            setOpen(false);
          }}
          className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-blue-600 text-[11px] leading-none text-white"
        >
          ×
        </button>
      </div>
    </div>
  );
}
