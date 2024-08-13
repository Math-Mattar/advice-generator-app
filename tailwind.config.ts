import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#202733',
        'dark-grayish-blue': '#313A48',
        'grayish-blue': '#4F5D74',
        'light-cyan': '#CEE3E9',
        'neon-green': '#53FFAA',
      },
      backgroundColor: {
        'dark-blue': '#202733',
        'dark-grayish-blue': '#313A48',
        'grayish-blue': '#4F5D74',
        'light-cyan': '#CEE3E9',
        'neon-green': '#53FFAA',
      },
      fontSize: {
        sm: '13px',
        md: '28px',
      },
      letterSpacing: {
        sm: '-0.3px',
        md: '4px',
      },
      boxShadow: {
        'drop-shadow': '0px 0px 40px 0px rgba(83,255,170,1)',
      },
    },
  },
  plugins: [],
};
export default config;
