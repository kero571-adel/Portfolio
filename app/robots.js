export default function robots() {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
      },
      sitemap: "https://kerolesadel.vercel.app/sitemap.xml",
    };
  }