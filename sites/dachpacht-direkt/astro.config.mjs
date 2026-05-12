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
  // Preserve URLs from the previous Lovable SPA. / used to redirect to /dachflaeche;
  // the /solar-analyse, /solar, /partner, /embed routes used to hand off to the
  // Solar Analyse Tool, which now lives on www.solaranalysetool.com.
  // Without an SSR adapter these emit zero-second meta-refresh HTML pages.
  redirects: {
    "/": "/dachflaeche",
    "/solar-analyse": "https://www.solaranalysetool.com/solar-analyse",
    "/embed": "https://www.solaranalysetool.com/embed",
    "/solar-analyse/[token]": "https://www.solaranalysetool.com/solar-analyse/[token]",
    "/solar/[partnerSlug]": "https://www.solaranalysetool.com/solar/[partnerSlug]",
    "/partner/[secretToken]": "https://www.solaranalysetool.com/auth",
  },
});
