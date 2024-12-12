/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      myCode: {
        dotted: "relative before:absolute before:top-2/4 before:-left-4 before:w-1 before:h-1 before:rounded-[50%] before:bg-black",
      }
    },
  },
  plugins: [],
};
