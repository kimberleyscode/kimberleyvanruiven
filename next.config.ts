import type { NextConfig } from "next";

/* De site is volledig statisch en wordt geëxporteerd naar out/. Next serveert dan zelf
   niets meer, dus de CSP en de beveiligingsheaders staan nu in public/_headers, dat
   ongewijzigd naar out/ wordt gekopieerd en door Cloudflare Pages wordt gelezen.
   De rewrite voor de Nectar-demo is niet meer nodig: Pages serveert public/nectar/
   vanzelf via index.html. */
const nextConfig: NextConfig = {
  output: "export",
};

export default nextConfig;
