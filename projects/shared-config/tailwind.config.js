/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "../project-1/src/**/*.{js,ts,jsx,tsx,mdx}",
      "../project-2/src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
      },
    },
    plugins: [],
  };
  