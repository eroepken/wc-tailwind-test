/**
 * Tailwind config for design system
 *   Requires Tailwind 1.4.0 or greater
 */

const path = require("path");

const colors = require("./colors.tailwind.json");
const fontFamily = require("./font-family.tailwind.json");

// Default Tailwind config can be found here: https://github.com/tailwindcss/tailwindcss/blob/v1.4.0/stubs/defaultConfig.stub.js
module.exports = {
  // Purge CSS from Tailwind Only.
  purge: {
    content: [path.resolve(__dirname, "**/*.js")],
    options: {
      // Whitelist Non-DS Dependent Patterns.
      whitelistPatterns: [/^bg/, /^text/, /:?-?m[xy]?-/, /:?p[xy]?-/],
      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      extensions: ["yml", "twig", "json", "js"],
    },
  },
  theme: {
    colors,
    fontFamily,
    container: {
      center: true,
      padding: {
        default: "1rem",
        lg: "1.5rem",
      },
    },
    extend: {
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem",
      },
      letterSpacing: {
        spacious: "0.25em",
      },
      boxShadow: {
        "outline-karma-coral": `0 1px 9px 0 ${colors["karma-coral"]}`,
        "outline-soft-black": `0 1px 9px 0 ${colors["soft-black"]}`,
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  variants: {
    borderColor: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
