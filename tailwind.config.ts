import type { Config } from 'tailwindcss'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#0A0A0A",
        primary: "#525252",
        "black-2": "#161616",
        // white: '#FFF',
        // whiter: '#FFFFFF',
        // 'light-green': '#CDEAEC',
        grey: "#ECECEC",
        green: '#EBEBEB',
        "grey-2": "#EBEBEB",
        // 'grey-3': '#666C6C',
        // 'grey-4': '#4D5454',
        // 'grey-5': '#808484',
        // 'grey-6': '#333B3B',
        // 'grey-7': '#E5E7E7'
      },
      backgroundImage: {
        "hero-bg": "url('/img/hero-bg.png')",
        "hero-bg-mob": "url('/img/hero-bg-mob.png')",
        "about-bg": "url('/img/about-bg.png')",
        "about-bg-mob": "url('/img/about-bg-mob.png')",
        "services-bg": "url('/img/services-bg.png')",
        "services-bg-mob": "url('/img/excellence.png')",
        "contact-bg": "url('/img/contact-bg.png')",
        "contact-bg-mob": "url('/img/contact-bg-mob.png')",
        "blog-bg": "url('/img/blog-bg.png')",
        logo: "url('/img/logo.png')",
        "logo-footer": "url('/img/logo-footer.png')",
        "ebooks-bg": "url('/img/ebooks-bg.png')",
      },
    },
  },
  plugins: [],
  content: [],
};
