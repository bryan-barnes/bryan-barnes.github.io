/** @type {import('tailwindcss').Config} */

// Colors resolve to CSS variables set per theme (team x day/night) in
// src/styles/global.css. "white" and "black" are remapped to ink and paper so
// existing text-white/xx and bg-black/xx utilities follow the active theme.
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./src/**/*.{astro,html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: v("ink"),
        black: v("paper"),
        ink: v("ink"),
        paper: v("paper"),
        surface: v("paper-2"),
        muted: v("muted"),
        faint: v("faint"),
        accent: v("accent"),
        rule: v("rule"),
        "accent-ink": v("accent-ink"),
        "on-accent": v("on-accent"),
      },
      fontFamily: {
        sans: [
          "InterVariable",
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        display: [
          "Big Shoulders Variable",
          "Arial Narrow",
          "sans-serif-condensed",
          "sans-serif",
        ],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};
