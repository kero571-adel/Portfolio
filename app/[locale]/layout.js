import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter, Cairo } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata = {
  title: "Keroles Adel | Frontend Developer",
  description:
    "Professional Full Stack Developer Portfolio - Building Exceptional Web Experiences",
  keywords: "Developer, Portfolio, Full Stack, React, Next.js, JavaScript",
  authors: [{ name: "Keroles Adel" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Keroles Adel | Frontend Developer",
    description: "Professional Frontend Developer Portfolio",
    type: "website",
  },
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  const isRTL = locale === "ar";

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"}>
      <body
        className={`${
          isRTL ? cairo.className : inter.className
        } bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 overflow-x-hidden`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
