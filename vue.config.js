// eslint-disable-next-line no-unused-vars
const path = require('path')

module.exports = {
  lintOnSave: 'warning',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/scss/variables.scss";
        `
      }
    }
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Just Muslim Things'
      args[0].meta = { description: 'A single page application created using Vue.js' }

      return args
    })
  }
}
