import webpack from "webpack";
import GoogleFontsPlugin from "@beyonk/google-fonts-webpack-plugin";

const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/meetings-planner/"
        }
      }
    : {};

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Meeting Planner",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js project"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "./assets/favicon.ico"
      }
    ],
    script: []
  },

  mode: "spa",

  modules: ["@nuxtjs/style-resources", "@nuxtjs/svg-sprite"],

  styleResources: {
    stylus: ["./assets/stylus/vars.styl", "./assets/stylus/tools/mixins.styl"]
  },

  svgSprite: {},

  loading: {
    color: "#f9b000",
    height: "2px"
  },

  /*
   ** Global CSS
   */
  css: [
    {
      src: "~assets/stylus/app.styl",
      lang: "stylus"
    }
  ],

  plugins: [
    { src: "~/plugins/svg4everybody.js", ssr: false },
    { src: "~/plugins/localStorage.js", ssr: false },
    "~/plugins/components.js",
    "~/plugins/click-outside.js",
    "~/plugins/filters.js",
    "~/plugins/vuebar.js"
  ],

  build: {
    plugins: [
      new webpack.ProvidePlugin({
        _: "lodash"
      }),
      new GoogleFontsPlugin({
        fonts: [
          {
            family: "Roboto",
            variants: ["400", "400italic", "700"],
            subsets: ["latin", "cyrillic"]
          }
        ]
      })
    ]
  },
  ...routerBase
};
