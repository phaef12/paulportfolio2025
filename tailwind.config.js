/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
 extend: {
      fontFamily: {
        code: [
          'Fira Code',       // popular monospaced coding font
          'Source Code Pro', // fallback
          'Consolas',
          'Menlo',
          'Monaco',
          'Courier New',
          'monospace',
        ],
      },
    },
    },
  plugins: [],
}
