import colors from 'vuetify/es5/util/colors';

export default {
  mode: 'spa',  target: 'static',
  router: {
    base: '/rdo-naturalist/',
  },
  head: {
    titleTemplate: 'RDO: Animal Field Guide',
    title: 'RDO: Animal Field Guide',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Red Dead Online Animal Field Guide. Helps you track your progress as a naturalist.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [{ src: '~/plugins/vuex-persist', ssr: false }],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', 'nuxt-i18n'],
  i18n: {
    locales: [
      {
        name: 'English',
        code: 'en',
        file: 'en-US.js',
      },
      {
        name: 'Deutsch',
        code: 'de',
        file: 'de-DE.js',
      },
      {
        name: 'Español',
        code: 'es',
        file: 'es-ES.js',
      },
      {
        name: 'Polski',
        code: 'pl',
        file: 'pl-PL.js',
      },
      {
        name: 'Mexican',
        code: 'mx',
        file: 'es-MX.js',
      },
      {
        name: 'Français',
        code: 'fr',
        file: 'fr-FR.js',
      },
      {
        name: 'Italiano',
        code: 'it',
        file: 'it-IT.js',
      },
      {
        name: 'Português',
        code: 'pt',
        file: 'pt-BR.js',
      },
      {
        name: 'Русский',
        code: 'ru',
        file: 'ru-RU.js',
      },
      {
        name: '日本語',
        code: 'jp',
        file: 'ja-JP.js',
      },
      {
        name: '한국어',
        code: 'kr',
        file: 'ko-KR.js',
      },
      {
        name: '简体中文',
        code: 'cn',
        file: 'zh-CN.js',
      },
      {
        name: '繁体中文',
        code: 'tw',
        file: 'zh-TW.js',
      },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
    vueI18n: {
      silentTranslationWarn: process.env.NODE_ENV === 'production',
      fallbackLocale: 'en',
    },
  },
  axios: {},
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.red.darken1,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent4,
        },
      },
    },
  },
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)|(\.svg$)/,
          options: {
            fix: true,
          },
        });
      }
    },
  },
};
