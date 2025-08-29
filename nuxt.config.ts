// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxt/eslint','@sidebase/nuxt-auth'],
  app: {
    head: {
      title: 'OpenEnergyCoop Dashboard',
      meta: [{ name: 'description', content: 'Dashboard for OpenEnergyCoop' }],
    },
  },
})
