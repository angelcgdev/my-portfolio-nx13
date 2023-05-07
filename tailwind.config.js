/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const { fontFamily } = require("tailwindcss/defaultTheme");

const hoverPlugin = plugin(function ({ addVariant, e, postcss }) {
  addVariant("hover", ({ container, separator }) => {
    const hoverRule = postcss.atRule({
      name: "media",
      params: "(hover: hover)",
    });
    hoverRule.append(container.nodes);
    container.append(hoverRule);
    hoverRule.walkRules((rule) => {
      rule.selector = `.${e(
        `hover${separator}${rule.selector.slice(1)}`
      )}:hover`;
    });
  });
});

const customClass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".text-body": {
      "@apply text-sm md:text-base lg:text-lg": {},
    },
  });
});

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", "[class~='dark']"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-variant": "rgb(var(--color-primary-variant) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        disabled: "rgb(var(--color-disabled) / <alpha-value>)",
        borderc: "rgb(var(--color-border) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  variants: {
    extend: {
      textOpacity: ["dark"],
    },
  },
  plugins: [hoverPlugin, customClass],
};
