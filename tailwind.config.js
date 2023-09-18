/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ".src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
};
