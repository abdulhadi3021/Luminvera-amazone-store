/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 🎨 Custom color palette
        'bg-primary': '#FFFFFF',       // White background
        'text-primary': '#222222',     // Dark Grey text and headings
        'heading': '#222222',          // Headings
        'footer': '#E0E7E3',           // Light Mint Green (footer/sections)
        'accent': '#C58C63',           // Light Brown (links/buttons)
        'cta': '#000000',              // Black (button backgrounds)
        'cta-text': '#FFFFFF',         // White text on CTA
        'input-bg': '#FFFFFF',         // White input fields
        'border': '#C58C63',           // Light Brown border
      },
    },
  },
  plugins: [],
};
