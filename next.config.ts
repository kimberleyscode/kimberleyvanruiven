import type { NextConfig } from "next";

const dev = process.env.NODE_ENV === "development";

/* De fonts komen van next/font en worden bij de build meegebakken, dus er gaan geen
   verzoeken naar Google. Unsplash wordt nergens meer gebruikt. De agenda-link is een
   gewone link: navigatie valt niet onder CSP, dus die host hoeft er niet in te staan. */
const csp = [
  "default-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  // 'unsafe-inline' is nodig omdat Next zijn bootstrap-scripts inline zet. Een strikte
  // nonce-CSP kan alleen bij server-rendering per verzoek en zou deze statische site
  // dynamisch maken; dat is de ruil niet waard.
  `script-src 'self' 'unsafe-inline'${dev ? " 'unsafe-eval' https://va.vercel-scripts.com" : ""}`,
  "img-src 'self' data:",
  "font-src 'self'",
  // Vercel Web Analytics stuurt zijn beacons naar /_vercel/insights op dezelfde origin.
  `connect-src 'self'${dev ? " ws: http://localhost:*" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  { key: "Content-Security-Policy", value: csp },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  // De Nectar-demo is een losse statische app in public/nectar; zonder rewrite is
  // alleen /nectar/index.html bereikbaar.
  async rewrites() {
    return [{ source: "/nectar", destination: "/nectar/index.html" }];
  },
};

export default nextConfig;
