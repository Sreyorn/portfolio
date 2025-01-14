export default {
  target: "static",
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "iamorn",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
  ],
  tailwindcss: {
    configPath: "~/config/tailwind.js",
    cssPath: "~/assets/tailwind.css",
    jit: true,
    exposeConfig: true,
  },
  colorMode: {
    classSuffix: "",
  },
  googleFonts: {
    families: {
      Inter: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    webpack5: true,
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        // postcss-responsive-type ==>  https://www.npmjs.com/package/postcss-responsive-type
        // postcss-hexrbga ==> https://www.npmjs.com/package/postcss-hexrgba
        "postcss-url": false,
        "postcss-nested": {},
        "postcss-responsive-type": {},
        "postcss-hexrgba": {},
        "postcss-color-gray": {},
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true,
        },
      },
    },
  },
};
