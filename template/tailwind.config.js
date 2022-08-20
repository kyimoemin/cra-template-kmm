/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: (theme) => ({ ...theme("width") }),
      minWidth: (theme) => ({ ...theme("width") }),
      maxHeight: (theme) => ({ ...theme("height") }),
      minHeight: (theme) => ({ ...theme("height") }),
      flexGrow: {
        3: 3,
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
