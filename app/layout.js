import "./globals.css";

export const metadata = {
  title: "Keroles Adel | frontend Developer",
  description:
    "Professional Full Stack Developer Portfolio - Building Exceptional Web Experiences",
  keywords: "Developer, Portfolio, Full Stack, React, Next.js, JavaScript",
  authors: [{ name: "Keroles Adel" }],
  openGraph: {
    title: "Keroles Adel | frontend Developer",
    description: "Professional frontend Developer Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
