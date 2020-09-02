import colors from 'vuetify/es5/util/colors'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/global.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: nuxt-i18n
    'nuxt-i18n',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      rtl: false,
      dark: false,
      options: {
        customProperties: true,
      },
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.grey.lighten3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          txt_pr_1: colors.black,
          txt_pr_2: '#E1F5FE',
          txt_nd_1: colors.white,
          txt_nd_2: colors.grey.lighten5,
          txt_nl_1: colors.black,
          txt_nl_2: colors.grey.lighten1,
          txt_sp_1: colors.green.darken2,
          txt_sp_2: colors.lime.darken4,
          bg_sp_1: colors.green.lighten4,
          bg_sp_2: colors.amber.accent2,
          bg_bdg_1: colors.red.darken1,
          bg_bdg_2: '#5E35B1',
          bg_bdg_3: colors.blue.lighten2,
          background: colors.grey.lighten5,
        },
        light: {
          primary: colors.blue.lighten2,
          accent: colors.grey.lighten3,
          secondary: colors.grey.darken3,
          info: colors.teal.darken1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          txt_pr_1: colors.white,
          txt_pr_2: colors.blue.lighten5,
          txt_nd_1: colors.grey.lighten5,
          txt_nd_2: colors.grey.lighten1,
          txt_nl_1: colors.black,
          txt_nl_2: colors.grey.darken1,
          txt_sp_1: colors.green.darken2,
          txt_sp_2: colors.lime.darken4,
          bg_sp_1: colors.green.lighten4,
          bg_sp_2: colors.amber.accent2,
          bg_bdg_1: colors.red.darken1,
          bg_bdg_2: '#5E35B1',
          bg_bdg_3: colors.blue.lighten2,
          background: colors.grey.lighten5,
        },
      },
    },
  },
  /*
   ** nuxt-i18n configuration
   ** https://i18n.nuxtjs.org/
   */
  i18n: {
    seo: true,
    baseUrl: 'http://localhost:3000',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      cookieCrossOrigin: true,
      alwaysRedirect: true,
    },
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
    locales: [
      {
        name: 'Arabic',
        code: 'ar',
        iso: 'ar-DZ',
        file: 'ar-DZ.js',
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
      },
    ],
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
