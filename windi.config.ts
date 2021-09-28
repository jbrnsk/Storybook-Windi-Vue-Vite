import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'carolina-blue': '#00ccff',
      },
      screens: {
        xs: '480px',
      },
      fontFamily: {
        'inter-black': ['Inter-Black', 'Inter', 'San-serif'],
      },
    },
  },
  // safelist: [
  //   'bg-transparent',
  //   'border-carolina-blue',
  //   'border-solid',
  //   'border-2',
  //   'cursor-pointer',
  //   'font-inter-bold',
  //   'my-2',
  //   'px-2',
  //   'py-2',
  //   'text-carolina-blue',
  //   'text-sm',
  // ],
});
