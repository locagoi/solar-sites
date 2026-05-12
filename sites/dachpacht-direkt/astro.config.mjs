// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://dachpacht-direkt.de",
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: "auto",
  },
  // Preserve / → /dachflaeche from the previous Lovable SPA. Without an SSR
  // adapter Astro emits a zero-second meta-refresh page for static redirects.
  // The /solar-analyse/*, /solar/*, /partner/* wildcard redirects (with param
  // pass-through) are configured at the Render CDN layer as real HTTP 301s —
  // see the Render service config.
  redirects: {
    "/": "/dachflaeche",
    "/solar-analyse": "https://www.solaranalysetool.com/solar-analyse",
    "/embed": "https://www.solaranalysetool.com/embed",
  },
});
