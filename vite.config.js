import { defineConfig } from "vite"
import postcss from "rollup-plugin-postcss"
import { createHtmlPlugin } from "vite-plugin-html"

export default defineConfig({
  plugins: [
    postcss({
      extract: true, // Extract CSS into a single file
      minimize: true, // Minify the CSS
    }),
    createHtmlPlugin({
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],

  // Output directory for the build
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        login: "login.html",
        menu: "menus.html",
        order: "order.html",
        contact: "contact.html",
        recipe: "recipes.html",
        recipeSingle: "recipe_single.html",
        recipeEdit: "recipe_edit.html",
        recipeCreate: "recipe_create.html",
        contactEdit: "contact_edit.html",
        contactCreate: "contact_create.html",
        orderEdit: "order_edit.html",
        orderCreate: "order_create.html",
        orderSingle: "order_single.html",
        menuEdit: "menu_edit.html",
        menuCreate: "menu_create.html",
        menuSingle: "menu_single.html",
      },
      output: {
        manualChunks: undefined,
      },
    },
    minify: "esbuild",
  },

  // Development server configuration
  server: {
    port: 3000,
  },
})
