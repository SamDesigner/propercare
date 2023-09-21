import type { Config } from 'tailwindcss'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#280D19",
        secondary: "#E15E99",
        "black-2": "#161616",
        "light-pink": "#FFF9FF",
        pink: "#E15E99",
        "pink-2": "#EDD4E9",
        "pink-3": "#E3A2BF",
        "light-green": "#EEFCFF",
        grey: "#FCFCFC",
        green: "#01252B",
        "grey-2": "#F5FDFF",
        "grey-3": "#D4D4DA",
        "grey-4": "#1C1A1B",
        'grey-5': '#474766',
        // 'grey-6': '#333B3B',
        // 'grey-7': '#E5E7E7'
      },
      backgroundImage: {
        "discover-bg": "url('/img/discover-img.png')",
      },
    },
  },
  plugins: [],
  content: [],
};
