import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://jbryanbarnes.com",
  integrations: [tailwind(), sitemap()],
  output: "static",
  redirects: {
    "/projects/umbc.edu/": "/case-studies/umbc-website/",
    "/projects/program-directory-overhaul/":
      "/case-studies/programs-directory/",
    "/projects/mobile-performance-optimization/":
      "/case-studies/performance/",
    "/projects/python-web-app/": "/case-studies/ai-marketing-hub/",
    "/projects/daily-sheets/": "/projects/",
    "/projects/edgely/": "/projects/touchdowns-live/",
    "/projects/photography/": "/projects/",
    "/projects/hill-killer/": "/projects/",
  },
});
