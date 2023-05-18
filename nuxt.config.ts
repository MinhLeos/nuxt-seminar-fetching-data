// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // srcDir: 'src/',
    css: ["~/assets/tailwindcss.css"],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    runtimeConfig: {
      // Private keys are only available on the server
      apiSecret: '123',
      // Public keys that are exposed to the client
      public: {
        apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
      }
    }
})
