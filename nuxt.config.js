const path = require("path");

export default {
  /*
   ** Rendering mode
   ** Doc: https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",

  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "Nuxt.js starter for CSB",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Official Nuxt.js starter for CodeSandBox"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/api/configuration-css
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/guide/plugins
   */
  plugins: [
    {
      src: "~/plugins/lazyload.js",
      ssr: false
    }
  ],

  /*
   ** Nuxt.js modules
   ** Doc: https://nuxtjs.org/guide/modules
   */
  modules: [
    // Doc: https://http.nuxtjs.org
    "@nuxt/http",
    // TODO: Remove it if you want to eject from codeSandbox
    "./codesandbox",
    "@bazzite/nuxt-optimized-images"
  ],

  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ["jpeg", "png", "svg", "webp", "gif"],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: "img-loader",
    mozjpeg: {
      quality: 85
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    },
    webp: {
      quality: 85
    }
  },

  /*
   ** HTTP module configuration
   */
  http: {
    // See https://http.nuxtjs.org/api/#options
  },

  /*
   ** Build configuration
   ** Doc: https://nuxtjs.org/api/configuration-build
   */
  build: {
    // transpile: ['vue-instantsearch', 'instantsearch.js/de'],
    postcss: {
      // extractCSS: true,
      plugins: {
        "postcss-import": {},
        tailwindcss: path.resolve(__dirname, "./tailwind.config.js"),
        "postcss-advanced-variables": {},
        "postcss-nested": {},
        "postcss-percentage": {}
      },
      // Change the postcss-preset-env settings
      preset: {
        stage: 0,
        autoprefixer: {
          cascade: false,
          grid: true
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
        ctx.loaders.vue.transformAssetUrls.img = ["data-src", "src"];
        ctx.loaders.vue.transformAssetUrls.source = ["data-srcset", "srcset"];
      }
    }
  }
};
